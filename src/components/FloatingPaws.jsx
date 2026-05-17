import { motion } from 'framer-motion'

const pawPositions = [
  { x: '10%', y: '20%', delay: 0, size: 24 },
  { x: '80%', y: '30%', delay: 1.5, size: 18 },
  { x: '20%', y: '70%', delay: 0.8, size: 20 },
  { x: '70%', y: '60%', delay: 2.2, size: 28 },
  { x: '50%', y: '40%', delay: 1.0, size: 16 },
  { x: '90%', y: '80%', delay: 0.5, size: 22 },
]

export default function FloatingPaws() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {pawPositions.map((pos, i) => (
        <motion.svg
          key={i}
          width={pos.size}
          height={pos.size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="absolute text-warm-300/30"
          style={{ left: pos.x, top: pos.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, delay: pos.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M12 12c-1.5-1-3-1.5-4.5-1-1.5.5-3 2-3 4 0 1 .5 2 1.5 2.5 1 .5 2 .5 3 0 .5-.5 1-1 1.5-1.5.5.5 1 1 1.5 1.5 1 .5 2 .5 3 0 1-.5 1.5-1.5 1.5-2.5 0-2-1.5-3.5-3-4-1.5-.5-3 0-4.5 1z" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </motion.svg>
      ))}
    </div>
  )
}
