import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FloatingPaws from '../components/FloatingPaws'
import SearchBar from '../components/SearchBar'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 min-h-[85vh] flex items-center">
      <FloatingPaws />
      {/* 装饰波浪 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0 30 Q 180 0, 360 20 T 720 15 T 1080 25 T 1440 10 L 1440 100 L 0 100 Z" fill="#FEFCE8" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-warm-800 leading-tight mb-6"
          >
            给流浪的 TA
            <br />
            <span className="text-warm-500 relative">
              一个家
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-warm-300" viewBox="0 0 200 12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4">
                <path d="M0 6 Q 50 0, 100 6 T 200 6" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-warm-700/70 mb-8 leading-relaxed"
          >
            每年有数百万只流浪动物等待一个温暖的家。领养不只是救一只动物，更是收获一份无条件的爱。找到你的毛小孩，从这一刻开始。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <SearchBar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 flex gap-4"
          >
            <Link
              to="/pets"
              className="px-8 py-3 bg-warm-500 text-white font-heading text-lg rounded-btn shadow-[4px_4px_0_#C2410C] hover:shadow-[2px_2px_0_#C2410C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-flex items-center gap-2"
            >
              开始寻找毛小孩
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#how-it-works"
              className="px-8 py-3 bg-white text-warm-700 font-heading text-lg rounded-btn border-2 border-dashed border-warm-300 hover:border-warm-500 transition-colors"
            >
              了解更多
            </a>
          </motion.div>
        </div>

        {/* 右侧装饰插画区域 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 150, damping: 15 }}
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 text-[200px] select-none"
        >
          <div className="relative">
            <span className="opacity-20">🐕</span>
            <span className="absolute -top-8 -right-8 text-8xl opacity-15">🐱</span>
            <span className="absolute -bottom-10 -left-6 text-6xl opacity-10">🐾</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
