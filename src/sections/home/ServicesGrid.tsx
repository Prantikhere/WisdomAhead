import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const col1Ref = useRef<HTMLDivElement>(null)
  const col2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(col1Ref.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: col1Ref.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )

      gsap.fromTo(col2Ref.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, delay: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: col2Ref.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ padding: 'clamp(120px, 14vw, 240px) 0' }}
    >
      <div className="container-main">
        <div className="text-center mb-20">
          <span className="text-label" style={{ color: 'var(--accent-red)' }}>SPECIALIZED SERVICES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Column 1 */}
          <div ref={col1Ref} className="group opacity-0">
            <div className="mb-8 overflow-hidden">
              <div
                className="h-0.5 transition-all duration-700 group-hover:w-24"
                style={{ background: 'var(--accent-red)', width: '48px' }}
              />
            </div>
            <SplitText as="h3" type="lines" className="text-h1 text-black mb-3" stagger={0.06} duration={0.8} y={40}>
              Predictive Intelligence
            </SplitText>
            <p className="text-h3 mb-8" style={{ color: 'var(--text-secondary)' }}>AI-Powered Forecasting</p>
            <p className="text-body-l max-w-[520px]" style={{ color: 'var(--text-secondary)' }}>
              Predict raw material pricing, demand cycles, and operational trends with precision—enabling proactive decision-making across the value chain.
            </p>
            <div className="mt-8 flex items-center gap-2 text-label transition-all duration-500 group-hover:gap-4" style={{ color: 'var(--accent-red)' }}>
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="group opacity-0">
            <div className="mb-8 overflow-hidden">
              <div
                className="h-0.5 transition-all duration-700 group-hover:w-24"
                style={{ background: 'var(--accent-red)', width: '48px' }}
              />
            </div>
            <SplitText as="h3" type="lines" className="text-h1 text-black mb-3" stagger={0.06} duration={0.8} y={40}>
              Governance & Risk
            </SplitText>
            <p className="text-h3 mb-8" style={{ color: 'var(--text-secondary)' }}>Sovereign AI Governance</p>
            <p className="text-body-l max-w-[520px]" style={{ color: 'var(--text-secondary)' }}>
              We ensure your AI systems are compliant, secure, and fully controlled—mitigating legal, ethical, and reputational risks.
            </p>
            <div className="mt-8 flex items-center gap-2 text-label transition-all duration-500 group-hover:gap-4" style={{ color: 'var(--accent-red)' }}>
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
