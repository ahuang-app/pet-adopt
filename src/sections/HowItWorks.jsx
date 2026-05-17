import ScrollReveal from '../components/ScrollReveal'
import StepCard from '../components/StepCard'

const steps = [
  { number: 1, title: '浏览', description: '搜索和筛选你附近的毛小孩，找到你的心动之选' },
  { number: 2, title: '匹配', description: '了解宠物的性格和需求，确认你们是否契合' },
  { number: 3, title: '带回家', description: '填写领养申请，通过审核后就能接 TA 回家了' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl text-center text-warm-800 mb-2">
            领养流程
          </h2>
          <div className="flex justify-center mb-12">
            <svg className="w-32 h-3 text-warm-300" viewBox="0 0 128 12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4">
              <path d="M0 6 Q 32 0, 64 6 T 128 6" />
            </svg>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto relative">
          {/* 桌面端波浪连接线 */}
          <div className="hidden md:block absolute top-8 left-[18%] right-[18%]">
            <svg viewBox="0 0 300 20" fill="none" className="w-full h-5 text-warm-300">
              <path d="M0 10 Q 38 0, 75 10 T 150 10 T 225 10 T 300 10" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" fill="none" />
            </svg>
          </div>
          {steps.map((step, i) => (
            <StepCard key={step.number} number={step.number} title={step.title} description={step.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
