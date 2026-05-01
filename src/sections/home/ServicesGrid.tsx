import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Predictive Intelligence',
    subtitle: 'AI-Powered Forecasting',
    description: 'Anticipate raw material pricing fluctuations, subscriber churn patterns, and advertising demand cycles before they impact your P&L. Our sovereign forecasting models ingest proprietary operational data — not third-party aggregates — to generate predictions with board-level confidence.',
    details: [
      'Newsprint & raw material cost forecasting',
      'Subscriber retention risk scoring',
      'Ad inventory yield optimization',
      'Regional content demand prediction',
    ],
  },
  {
    title: 'Governance & Risk',
    subtitle: 'Sovereign AI Governance',
    description: 'Media organizations operate under intense regulatory and reputational scrutiny. We architect AI governance frameworks that ensure every automated decision is explainable, compliant, and aligned with your editorial values — while maintaining full data sovereignty.',
    details: [
      'AI ethics & editorial compliance frameworks',
      'Data residency & sovereignty audits',
      'Automated decision audit trails',
      'Regulatory readiness assessments',
    ],
  },
  {
    title: 'Workflow Orchestration',
    subtitle: 'Intelligent Operations',
    description: 'Transform fragmented, manual processes into seamless, AI-coordinated workflows. From content production pipelines to distribution logistics, we redesign how work flows through your organization — reducing cycle times and freeing creative talent for higher-value work.',
    details: [
      'Editorial production pipeline automation',
      'Cross-platform content adaptation',
      'Real-time resource allocation',
      'Vendor & freelancer coordination',
    ],
  },
  {
    title: 'Corporate Intelligence',
    subtitle: 'Private Knowledge Systems',
    description: 'Your organization possesses decades of proprietary institutional knowledge trapped in disconnected systems. We build private intelligence layers that unify this data — making it queryable, analyzable, and actionable without ever exposing it to external AI platforms.',
    details: [
      'Unified enterprise knowledge graphs',
      'Historical archive intelligence',
      'Competitive signal detection',
      'Executive decision support systems',
    ],
  },
]

export default function ServicesGrid() {
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

      const cards = cardsRef.current?.querySelectorAll('.service-card')
      if (cards) {
        gsap.fromTo(cards,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
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
      className="bg-white"
      style={{ padding: 'clamp(120px, 14vw, 240px) 0' }}
    >
      <div className="container-main">
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <span className="text-label block mb-5" style={{ color: 'var(--accent-red)' }}>
            SPECIALIZED SERVICES
          </span>
          <h2 className="text-h1 text-black max-w-[700px] mx-auto">
            Advisory Services Built for Media Complexity
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {services.map((service, i) => (
            <div key={i} className="service-card group opacity-0">
              <div className="mb-8 overflow-hidden">
                <div
                  className="h-0.5 transition-all duration-700 group-hover:w-24"
                  style={{ background: 'var(--accent-red)', width: '48px' }}
                />
              </div>

              <SplitText as="h3" type="lines" className="text-h1 text-black mb-3" stagger={0.06} duration={0.8} y={40}>
                {service.title}
              </SplitText>

              <p className="text-h3 mb-8" style={{ color: 'var(--text-secondary)' }}>
                {service.subtitle}
              </p>

              <p className="text-body-l max-w-[520px] mb-8" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {service.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full" style={{ background: 'var(--accent-red)' }} />
                    <span className="text-body text-black">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-label transition-all duration-500 group-hover:gap-4" style={{ color: 'var(--accent-red)' }}>
                <span>Request Briefing</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
