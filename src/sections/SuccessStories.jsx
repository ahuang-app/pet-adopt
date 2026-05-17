import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import StoryCard from '../components/StoryCard'
import { stories } from '../data/stories'
import { ArrowRight } from 'lucide-react'

export default function SuccessStories() {
  const featured = stories.slice(0, 3)

  return (
    <section className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl text-center text-warm-800 mb-2">
            领养故事
          </h2>
          <div className="flex justify-center mb-12">
            <svg className="w-32 h-3 text-warm-300" viewBox="0 0 128 12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4">
              <path d="M0 6 Q 32 0, 64 6 T 128 6" />
            </svg>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-8">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 text-warm-500 font-body font-semibold hover:text-warm-600 transition-colors"
            >
              查看更多故事
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
