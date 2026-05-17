import { motion } from 'framer-motion'

const filterOptions = [
  { label: '全部', value: 'all' },
  { label: '狗狗', value: 'dog' },
  { label: '猫咪', value: 'cat' },
  { label: '其他', value: 'other' },
]

export default function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filterOptions.map(({ label, value }) => (
        <motion.button
          key={value}
          onClick={() => onFilterChange(value)}
          whileTap={{ scale: 0.95 }}
          className={`px-5 py-2 rounded-full font-body font-semibold text-sm border-2 border-dashed transition-all ${
            activeFilter === value
              ? 'bg-warm-500 text-white border-warm-500 shadow-[2px_2px_0_#C2410C]'
              : 'bg-white text-warm-700 border-warm-200 hover:border-warm-400'
          }`}
        >
          {label}
        </motion.button>
      ))}
    </div>
  )
}
