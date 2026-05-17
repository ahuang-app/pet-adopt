import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { shelters } from '../data/shelters'
import { Building2 } from 'lucide-react'

export default function ShelterPartners() {
  return (
    <section className="py-20 bg-warm-100">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl text-center text-warm-800 mb-2">
            合作收容所
          </h2>
          <div className="flex justify-center mb-12">
            <svg className="w-32 h-3 text-warm-300" viewBox="0 0 128 12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4">
              <path d="M0 6 Q 32 0, 64 6 T 128 6" />
            </svg>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {shelters.map((shelter, i) => (
            <motion.div
              key={shelter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.05 }}
              className="bg-white rounded-card p-4 border-2 border-dashed border-warm-200 text-center hover:border-warm-400 transition-colors"
            >
              <Building2 className="w-8 h-8 mx-auto mb-2 text-warm-400" />
              <h4 className="font-heading text-sm text-warm-700">{shelter.name}</h4>
              <p className="text-xs text-warm-700/50 mt-1">{shelter.location} · {shelter.petCount}只毛小孩</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
