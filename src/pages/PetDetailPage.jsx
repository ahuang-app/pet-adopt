import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Heart, ShieldCheck, Syringe, Scissors } from 'lucide-react'
import PetCard from '../components/PetCard'
import { pets } from '../data/pets'

export default function PetDetailPage() {
  const { id } = useParams()
  const pet = pets.find((p) => p.id === id)

  if (!pet) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-6xl mb-4">😿</p>
        <h1 className="font-heading text-2xl text-warm-800 mb-2">找不到这只毛小孩</h1>
        <Link to="/pets" className="text-warm-500 font-body font-semibold hover:text-warm-600">返回列表</Link>
      </div>
    )
  }

  const recommended = pets.filter((p) => p.id !== pet.id).slice(0, 4)

  const handleAdopt = () => {
    const toast = document.createElement('div')
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-warm-800 text-white px-6 py-3 rounded-full font-body text-sm shadow-lg z-50 animate-bounce'
    toast.textContent = `🐾 已收到你对 ${pet.name} 的领养意向！我们将尽快与你联系。`
    document.body.appendChild(toast)
    setTimeout(() => toast.remove(), 4000)
  }

  const typeEmoji = { dog: '🐕', cat: '🐱', other: '🐾' }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 返回 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/pets"
            className="inline-flex items-center gap-1.5 text-warm-600 font-body text-sm hover:text-warm-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            返回列表
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左侧：照片 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="aspect-square bg-warm-100 rounded-card border-2 border-dashed border-warm-300 flex items-center justify-center text-[120px] relative"
          >
            {typeEmoji[pet.type]}
            <div className="absolute -top-3 -right-3 bg-warm-500 text-white text-xs font-body px-3 py-1 rounded-full">
              {pet.type === 'dog' ? '狗狗' : pet.type === 'cat' ? '猫咪' : '其他'}
            </div>
          </motion.div>

          {/* 右侧：详情 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
          >
            <h1 className="font-heading text-4xl text-warm-800 mb-2">{pet.name}</h1>
            <div className="flex items-center gap-3 text-sm text-warm-700/60 mb-4">
              <span>{pet.breed}</span>
              <span>·</span>
              <span>{pet.gender === 'male' ? '♂ 男生' : '♀ 女生'}</span>
              <span>·</span>
              <span>{pet.age}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-warm-700/60 mb-6">
              <MapPin className="w-4 h-4" />
              {pet.location}
            </div>

            <p className="text-warm-700 leading-relaxed mb-6">{pet.description}</p>

            {/* 性格标签 */}
            <div className="flex flex-wrap gap-2 mb-8">
              {pet.traits.map((trait) => (
                <span key={trait} className="px-4 py-1.5 bg-warm-100 text-warm-700 font-body text-sm rounded-full border-2 border-dashed border-warm-200">
                  {trait}
                </span>
              ))}
            </div>

            {/* 健康信息 */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-3 bg-warm-50 rounded-xl border-2 border-dashed border-warm-200">
                <Syringe className={`w-5 h-5 mx-auto mb-1 ${pet.health.vaccinated ? 'text-green-500' : 'text-warm-300'}`} />
                <p className="text-xs text-warm-700/60">疫苗接种</p>
              </div>
              <div className="text-center p-3 bg-warm-50 rounded-xl border-2 border-dashed border-warm-200">
                <Scissors className={`w-5 h-5 mx-auto mb-1 ${pet.health.neutered ? 'text-green-500' : 'text-warm-300'}`} />
                <p className="text-xs text-warm-700/60">绝育</p>
              </div>
              <div className="text-center p-3 bg-warm-50 rounded-xl border-2 border-dashed border-warm-200">
                <ShieldCheck className={`w-5 h-5 mx-auto mb-1 ${pet.health.microchipped ? 'text-green-500' : 'text-warm-300'}`} />
                <p className="text-xs text-warm-700/60">芯片</p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleAdopt}
              className="w-full sm:w-auto px-10 py-4 bg-warm-500 text-white font-heading text-lg rounded-btn shadow-[4px_4px_0_#C2410C] hover:shadow-[2px_2px_0_#C2410C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              申请领养 {pet.name}
            </button>
          </motion.div>
        </div>

        {/* 推荐宠物 */}
        <div className="mt-20">
          <h2 className="font-heading text-2xl text-warm-800 mb-6">更多毛小孩</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommended.map((recPet, i) => (
              <PetCard key={recPet.id} pet={recPet} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
