import { motion } from 'framer-motion'

export default function StepCard({ number, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-warm-500 text-white font-heading text-2xl rounded-full flex items-center justify-center shadow-[3px_3px_0_#C2410C] border-2 border-dashed border-warm-300">
        {number}
      </div>
      <h3 className="font-heading text-lg text-warm-800 mb-2">{title}</h3>
      <p className="text-sm text-warm-700/70">{description}</p>
    </motion.div>
  )
}
