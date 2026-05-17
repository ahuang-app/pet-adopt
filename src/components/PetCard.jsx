import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Dog, Cat, Bird } from 'lucide-react'

const typeIcons = { dog: Dog, cat: Cat, other: Bird }
const typeEmoji = { dog: '🐕', cat: '🐱', other: '🐾' }
const typeColors = { dog: 'bg-amber-100 text-amber-700', cat: 'bg-orange-100 text-orange-700', other: 'bg-yellow-100 text-yellow-700' }

export default function PetCard({ pet, index = 0 }) {
  const navigate = useNavigate()
  const Icon = typeIcons[pet.type] || Bird
  const rotation = (Math.random() - 0.5) * 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: index * 0.05,
      }}
      whileHover={{ y: -4, scale: 1.03, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(`/pets/${pet.id}`)}
      className="cursor-pointer bg-white rounded-card p-4 border-2 border-dashed border-warm-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`w-full aspect-square rounded-xl mb-3 flex items-center justify-center text-5xl ${typeColors[pet.type] || typeColors.other}`}>
        {typeEmoji[pet.type]}
      </div>
      <div className="flex items-center gap-1.5 mb-1">
        <Icon className="w-4 h-4 text-warm-500" />
        <h3 className="font-heading text-base text-warm-800">{pet.name}</h3>
        <span className="ml-auto text-xs bg-warm-100 text-warm-600 px-2 py-0.5 rounded-full font-body">{pet.age}</span>
      </div>
      <div className="flex items-center gap-1 text-xs text-warm-700/60 mb-2">
        <MapPin className="w-3 h-3" />
        {pet.location}
      </div>
      <div className="flex flex-wrap gap-1">
        {pet.traits.slice(0, 2).map((trait) => (
          <span key={trait} className="text-xs bg-warm-50 text-warm-600 px-2 py-0.5 rounded-full border border-dashed border-warm-200">
            {trait}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
