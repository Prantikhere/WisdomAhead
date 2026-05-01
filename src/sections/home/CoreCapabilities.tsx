import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TiltCard from '@/components/TiltCard'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  {
    index: '01',
    title: 'Strategic Business Process Optimization',
    body: 'We identify high-cost, repetitive workflows and replace them with intelligent, automated systems.',
  },
  {
    index: '02',
    title: 'Intelligent Workflow Orchestration',
    body: 'Private AI frameworks that streamline content production and reduce time-to-market.',
  },
  {
    index: '03',
    title: 'Secure Corporate Intelligence',
    body: 'Turn decades of internal data into real-time insights—without exposing it to public AI systems.',
  },
  {
    index: '04',
    title: 'Operational Cost Transformation',
    body: 'Shift teams from manual execution to strategic oversight through AI-led automation.',
  },
]

export default function CoreCapabilities() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )

      const cards = cardsRef.current?.querySelectorAll('.cap-card')
      if (cards) {
        gsap.fromTo(cards,
          { y: 80, opacity: 0, rotateX: -15 },
          {
            y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative bg-white"
      style={{ padding: 'clamp(120px, 14vw, 240px) 0' }}
    >
      <div className="container-main">
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <span className="text-label block mb-6" style={{ color: 'var(--accent-red)' }}>
            CORE CAPABILITIES
          </span>
          <h2 className="text-h1 text-black">
            Four Pillars of Transformation
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ perspective: '1000px' }}>
          {capabilities.map((cap, i) => (
            <TiltCard
              key={cap.index}
              tiltAmount={6}
              className="cap-card opacity-0"
            >
              <div
                className="px-8 py-10 transition-colors duration-500 h-full group"
                style={{
                  borderLeft: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(200,50,50,0.03)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <span
                  className="font-serif block mb-6 transition-all duration-500 group-hover:translate-x-1"
                  style={{ fontSize: '20px', color: 'var(--text-tertiary)' }}
                >
                  {cap.index}
                </span>
                <h3 className="text-h3 text-black mb-5 group-hover:text-[var(--accent-red)] transition-colors duration-500">
                  {cap.title}
                </h3>
                <p className="text-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{cap.body}</p>
                <div
                  className="mt-8 w-8 h-px transition-all duration-500 group-hover:w-16"
                  style={{ background: 'var(--accent-red)' }}
                />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
