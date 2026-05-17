import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-warm-500 to-warm-600 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 text-6xl opacity-10">🐾</div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-10">🐕</div>
        <div className="absolute top-1/2 left-1/3 text-4xl opacity-10">🐱</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="max-w-2xl mx-auto px-4 text-center relative z-10"
      >
        <Heart className="w-12 h-12 mx-auto mb-6 text-white/80 fill-white/80" />
        <h2 className="font-heading text-3xl sm:text-5xl text-white mb-4">
          准备好迎接新家人了吗？
        </h2>
        <p className="text-white/80 text-lg mb-8">
          每一只等待领养的动物都渴望一个温暖的家。你的选择，改变两个生命。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/pets"
            className="px-8 py-3 bg-white text-warm-600 font-heading text-lg rounded-btn shadow-[4px_4px_0_#C2410C] hover:shadow-[2px_2px_0_#C2410C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-flex items-center justify-center gap-2"
          >
            开始领养之旅
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#how-it-works"
            className="px-8 py-3 border-2 border-white/50 text-white font-heading text-lg rounded-btn hover:bg-white/10 transition-colors"
          >
            了解更多
          </a>
        </div>
      </motion.div>
    </section>
  )
}
