import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TiltCard from '@/components/TiltCard'

gsap.registerPlugin(ScrollTrigger)

const phases = [
  {
    number: '01',
    title: 'Comprehensive Discovery',
    body: 'We immerse ourselves in your organization — mapping workflows, identifying data silos, and understanding the operational DNA that makes your media enterprise unique. This phase surfaces the hidden inefficiencies that constrain growth.',
  },
  {
    number: '02',
    title: 'Sovereign AI Architecture',
    body: 'We design private, secure AI systems tailored to your operational reality. Every framework is built with compliance, control, and competitive advantage as first principles — never as afterthoughts.',
  },
  {
    number: '03',
    title: 'Guided Implementation',
    body: "We don't hand over a blueprint and disappear. Our advisors work alongside your leadership through implementation, ensuring the transformation sticks and your teams evolve from executors to strategic operators.",
  },
]

export default function Methodology() {
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

      const cards = cardsRef.current?.querySelectorAll('.phase-card')
      if (cards) {
        gsap.fromTo(cards,
          { y: 80, opacity: 0, rotateX: -10 },
          {
            y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      }

      const numbers = cardsRef.current?.querySelectorAll('.phase-number')
      if (numbers) {
        gsap.fromTo(numbers,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 0.3, scale: 1, duration: 0.6, stagger: 0.2, ease: 'power3.out', delay: 0.1,
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
      style={{ background: '#fafafa', padding: 'clamp(120px, 14vw, 240px) 0' }}
    >
      <div className="container-main">
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <span className="text-label block mb-5" style={{ color: 'var(--accent-red)' }}>
            OUR METHODOLOGY
          </span>
          <h2 className="text-h1 text-black">
            A Structured Path to Transformation
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12" style={{ perspective: '1000px' }}>
          {phases.map((phase) => (
            <TiltCard key={phase.number} tiltAmount={5}>
              <div className="phase-card opacity-0">
                <span
                  className="phase-number font-serif block mb-5"
                  style={{
                    fontSize: 'clamp(48px, 6vw, 72px)',
                    color: 'var(--accent-red)',
                    opacity: 0,
                    lineHeight: 1,
                  }}
                >
                  {phase.number}
                </span>
                <h3 className="text-h3 text-black mb-4">{phase.title}</h3>
                <p className="text-body max-w-[360px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {phase.body}
                </p>
                <div className="mt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
