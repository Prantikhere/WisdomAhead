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
      className="bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
      style={{ padding: 'clamp(120px, 14vw, 240px) 0' }}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-24 h-24 bg-gradient-to-br from-[var(--accent-red)]/5 to-transparent rounded-full blur-3xl float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 right-1/4 w-32 h-32 bg-gradient-to-tl from-[var(--gradient-coral)]/5 to-transparent rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[var(--accent-red)]/3 rounded-full blur-2xl float-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-main relative z-[2]">
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border glass-effect mb-6" style={{
            borderColor: 'rgba(214,52,71,0.2)',
            background: 'rgba(214,52,71,0.05)'
          }}>
            <svg className="w-5 h-5 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span className="text-label" style={{ color: 'var(--accent-red)' }}>
              OUR METHODOLOGY
            </span>
          </div>
          
          <div className="relative inline-block">
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[var(--accent-red)]/10 to-[var(--gradient-coral)]/10 rounded-full blur-xl" />
            <h2 className="text-h1 text-black relative">
              A Structured Path to Transformation
            </h2>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12" style={{ perspective: '1000px' }}>
          {phases.map((phase, index) => (
            <TiltCard key={phase.number} tiltAmount={5}>
              <div className="phase-card opacity-0 group">
                {/* Phase number with icon */}
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-[var(--accent-red)]/10 to-[var(--gradient-coral)]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-white rounded-2xl p-6 border transition-all duration-300 group-hover:border-[var(--accent-red)]/30 group-hover:shadow-xl"
                    style={{ borderColor: 'rgba(0,0,0,0.08)' }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="phase-number font-serif"
                        style={{
                          fontSize: 'clamp(48px, 6vw, 72px)',
                          color: 'var(--accent-red)',
                          opacity: 0,
                          lineHeight: 1,
                        }}
                      >
                        {phase.number}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-red)]/10 to-[var(--gradient-coral)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {index === 0 && (
                          <svg className="w-6 h-6 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-6 h-6 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-6 h-6 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <h3 className="text-h3 text-black mb-4 group-hover:text-[var(--accent-red)] transition-colors duration-300">
                      {phase.title}
                    </h3>
                    <p className="text-body max-w-[360px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {phase.body}
                    </p>
                  </div>
                </div>
                
                {/* Progress indicator */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gradient-to-r from-[var(--accent-red)]/50 to-transparent" />
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-red)]/30 group-hover:bg-[var(--accent-red)] transition-colors duration-300" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
