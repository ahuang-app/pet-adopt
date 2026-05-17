import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import FilterBar from '../components/FilterBar'
import PetCard from '../components/PetCard'
import { pets } from '../data/pets'

export default function PetCardsSection() {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return pets.slice(0, 6)
    return pets.filter((p) => p.type === filter).slice(0, 6)
  }, [filter])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl text-center text-warm-800 mb-2">
            等待领养的毛小孩
          </h2>
          <div className="flex justify-center mb-6">
            <svg className="w-32 h-3 text-warm-300" viewBox="0 0 128 12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4">
              <path d="M0 6 Q 32 0, 64 6 T 128 6" />
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <FilterBar activeFilter={filter} onFilterChange={setFilter} />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
          {filtered.map((pet, i) => (
            <PetCard key={pet.id} pet={pet} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-warm-700/50 py-12">暂时没有找到匹配的毛小孩 🐾</p>
        )}

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-8">
            <Link
              to="/pets"
              className="inline-flex items-center gap-2 px-8 py-3 bg-warm-500 text-white font-heading rounded-btn shadow-[3px_3px_0_#C2410C] hover:shadow-[1px_1px_0_#C2410C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              查看全部毛小孩
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
