import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import StoryCard from '../components/StoryCard'
import { stories } from '../data/stories'

export default function StoryDetailPage() {
  const { id } = useParams()
  const story = stories.find((s) => s.id === id)

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-6xl mb-4">📖</p>
        <h1 className="font-heading text-2xl text-warm-800 mb-2">找不到这个故事</h1>
        <Link to="/" className="text-warm-500 font-body font-semibold hover:text-warm-600">返回首页</Link>
      </div>
    )
  }

  const moreStories = stories.filter((s) => s.id !== story.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 返回 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-warm-600 font-body text-sm hover:text-warm-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
        </motion.div>

        {/* 故事内容 */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {/* 照片占位 */}
          <div className="w-full aspect-video bg-warm-100 rounded-card border-2 border-dashed border-warm-300 flex items-center justify-center text-6xl mb-8">
            <div className="flex gap-4">
              <span>👤</span>
              <Heart className="w-12 h-12 text-warm-500 fill-warm-500" />
              <span>🐕</span>
            </div>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl text-warm-800 mb-4">
            {story.adopterName} & {story.petName} 的故事
          </h1>

          <div className="flex items-center gap-2 text-sm text-warm-700/50 mb-8">
            <Calendar className="w-4 h-4" />
            <span>领养于 {story.date}</span>
          </div>

          <div className="max-w-none">
            {story.fullStory.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-warm-700 leading-relaxed mb-4 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-8 bg-warm-50 rounded-card border-2 border-dashed border-warm-200">
            <Heart className="w-8 h-8 mx-auto mb-3 text-warm-500 fill-warm-500" />
            <p className="text-warm-700 font-body mb-4">每一个领养故事都始于一次勇敢的选择</p>
            <Link
              to="/pets"
              className="inline-block px-8 py-3 bg-warm-500 text-white font-heading rounded-btn shadow-[3px_3px_0_#C2410C] hover:shadow-[1px_1px_0_#C2410C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              找到你的毛小孩
            </Link>
          </div>
        </motion.article>

        {/* 更多故事 */}
        <div className="mt-20">
          <h2 className="font-heading text-2xl text-warm-800 mb-6">更多领养故事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreStories.map((s, i) => (
              <StoryCard key={s.id} story={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
