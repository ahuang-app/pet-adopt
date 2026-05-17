import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import FilterBar from '../components/FilterBar'
import PetCard from '../components/PetCard'
import { pets } from '../data/pets'

export default function PetListPage() {
  const [searchParams] = useSearchParams()
  const typeParam = searchParams.get('type')
  const initialFilter = typeParam === '狗' ? 'dog' : typeParam === '猫' ? 'cat' : typeParam === '其他' ? 'other' : 'all'
  const [filter, setFilter] = useState(initialFilter)

  const filtered = useMemo(() => {
    if (filter === 'all') return pets
    return pets.filter((p) => p.type === filter)
  }, [filter])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 返回 + 标题 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-warm-600 font-body text-sm hover:text-warm-500 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl text-warm-800 mb-2">所有毛小孩</h1>
          <p className="text-warm-700/60 mb-8">找到与你最契合的毛小孩</p>
        </motion.div>

        {/* 筛选栏 */}
        <FilterBar activeFilter={filter} onFilterChange={setFilter} />

        {/* 宠物网格 */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8"
        >
          {filtered.map((pet, i) => (
            <PetCard key={pet.id} pet={pet} index={i} />
          ))}
        </motion.div>

        {/* 空状态 */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-6xl mb-4">🐾</p>
            <p className="text-warm-700/50 text-lg font-body">没有找到匹配的毛小孩</p>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 text-warm-500 font-body font-semibold hover:text-warm-600"
            >
              清除筛选条件
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
