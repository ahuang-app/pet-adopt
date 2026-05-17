import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ArrowRight } from 'lucide-react'

export default function StoryCard({ story, index = 0 }) {
  const navigate = useNavigate()
  const rotation = (Math.random() - 0.5) * 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.03, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(`/stories/${story.id}`)}
      className="cursor-pointer bg-white rounded-card p-5 border-2 border-dashed border-warm-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-14 h-14 bg-warm-100 rounded-full flex items-center justify-center mb-3 text-2xl">
        {story.petName.slice(0, 1)}
      </div>
      <Heart className="w-5 h-5 text-warm-500 fill-warm-500 mb-2" />
      <p className="text-warm-700 text-sm leading-relaxed mb-3 line-clamp-3">"{story.quote}"</p>
      <div className="flex items-center justify-between text-xs text-warm-700/60">
        <span>— {story.adopterName} & {story.petName}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  )
}
