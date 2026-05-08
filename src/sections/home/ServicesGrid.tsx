'use client'

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
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const cardsRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )

      const cards = cardsRef.current?.querySelectorAll('.service-card')
      if (cards) {
        gsap.fromTo(cards,
          { y: 52, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(160deg, #0a0808 0%, #120c0c 50%, #0a0808 100%)',
        padding: 'clamp(80px, 10vw, 160px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(160,25,25,0.1) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 50% at 0% 100%, rgba(140,20,20,0.07) 0%, transparent 60%)',
        }} />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />
      </div>

      {/* Horizontal mid-divider (separates top 2 from bottom 2) */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: '50%',
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.05) 80%, transparent)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── HEADING ── */}
        <div ref={headingRef} className="text-center mb-16 lg:mb-24" style={{ opacity: 0 }}>
          <span
            className="block mb-4"
            style={{
              color: 'rgba(200,60,50,0.8)',
              fontSize: '0.65rem',
              letterSpacing: '0.24em',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            SPECIALIZED SERVICES
          </span>
          <h2
            style={{
              color: '#fff',
              fontFamily: '"Georgia", "Times New Roman", serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              maxWidth: 620,
              margin: '0 auto',
              lineHeight: 1.2,
            }}
          >
            Advisory Services Built for Media Complexity
          </h2>
        </div>

        {/* ── CARDS GRID ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group"
              style={{
                opacity: 0,
                padding: 'clamp(36px, 4vw, 56px)',
                borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                transition: 'background 0.35s ease',
                background: 'transparent',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(180,30,30,0.04)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'transparent'
              }}
            >
              {/* Top rule — animates wider on hover */}
              <div className="mb-8 overflow-hidden">
                <div
                  className="h-px transition-all duration-700 group-hover:w-16"
                  style={{
                    background: 'rgba(200,40,40,0.6)',
                    width: 40,
                  }}
                />
              </div>

              {/* Title */}
              <SplitText
                as="h3"
                type="lines"
                stagger={0.06}
                duration={0.8}
                y={36}
                className="mb-3 leading-tight font-bold"
                style={{
                  color: '#fff',
                  fontFamily: '"Georgia", serif',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                }}
              >
                {service.title}
              </SplitText>

              {/* Subtitle */}
              <p
                className="mb-6"
                style={{
                  color: 'rgba(200,60,50,0.8)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                {service.subtitle}
              </p>

              {/* Description */}
              <p
                className="mb-8"
                style={{
                  color: 'rgba(255,255,255,0.42)',
                  fontSize: '0.82rem',
                  lineHeight: 1.8,
                  maxWidth: 480,
                }}
              >
                {service.description}
              </p>

              {/* Details — 2-column grid */}
              <div
                className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10"
              >
                {service.details.map((detail, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span
                      className="shrink-0 mt-1.5"
                      style={{
                        width: 4, height: 4,
                        borderRadius: '50%',
                        background: 'rgba(200,50,40,0.7)',
                        display: 'inline-block',
                      }}
                    />
                    <span
                      style={{
                        color: 'rgba(255,255,255,0.38)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        lineHeight: 1.5,
                        fontWeight: 500,
                      }}
                    >
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <div
                className="inline-flex items-center gap-2 transition-all duration-400 group-hover:gap-3"
                style={{
                  color: 'rgba(200,55,45,0.85)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                <span className="transition-colors duration-300 group-hover:text-[rgba(220,70,50,1)]">
                  REQUEST BRIEFING
                </span>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  className="transition-transform duration-400 group-hover:translate-x-1"
                >
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