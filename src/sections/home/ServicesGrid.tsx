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
    description:
      'Anticipate raw material pricing fluctuations, subscriber churn patterns, and advertising demand cycles before they impact your P&L. Our sovereign forecasting models ingest proprietary operational data — not third-party aggregates — to generate predictions with board-level confidence.',
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
    description:
      'Media organizations operate under intense regulatory and reputational scrutiny. We architect AI governance frameworks that ensure every automated decision is explainable, compliant, and aligned with your editorial values — while maintaining full data sovereignty.',
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
    description:
      'Transform fragmented, manual processes into seamless, AI-coordinated workflows. From content production pipelines to distribution logistics, we redesign how work flows through your organization — reducing cycle times and freeing creative talent for higher-value work.',
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
    description:
      'Your organization possesses decades of proprietary institutional knowledge trapped in disconnected systems. We build private intelligence layers that unify this data — making it queryable, analyzable, and actionable without ever exposing it to external AI platforms.',
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
      gsap.fromTo(
        headingRef.current,
        {
          y: 32,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      )

      const cards =
        cardsRef.current?.querySelectorAll('.service-card')

      if (cards) {
        gsap.fromTo(
          cards,
          {
            y: 52,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 88%',
            },
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
        background:
          'linear-gradient(145deg, #f3f0ea 0%, #efebe5 38%, #f5f2ed 72%, #f3f0ea 100%)',
        padding: 'clamp(80px, 10vw, 160px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Soft luxury glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 18%, rgba(120,0,0,0.035), transparent 58%)',
          }}
        />

        {/* Floating particles */}
        {[...Array(32)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 4 : 2,
              height: i % 3 === 0 ? 4 : 2,

              background:
                i % 2 === 0
                  ? 'rgba(130,0,0,0.30)'
                  : 'rgba(180,20,20,0.22)',

              left: `${(i * 3.7) % 100}%`,
              top: `${(i * 6.8) % 100}%`,

              boxShadow:
                '0 0 10px rgba(120,0,0,0.12)',

              animation: `particleFloat ${
                6 + (i % 5)
              }s ease-in-out infinite`,

              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}

        {/* Editorial texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(110,0,0,0.35) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* HEADING */}
        <div
          ref={headingRef}
          className="text-center mb-16 lg:mb-24"
          style={{ opacity: 0 }}
        >
          {/* Pill */}
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
              style={{
                border: '1px solid rgba(120,0,0,0.14)',
                background: 'rgba(255,255,255,0.58)',
                backdropFilter: 'blur(10px)',
                boxShadow:
                  '0 4px 20px rgba(120,0,0,0.03)',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #4d0202 0%, #8f1111 100%)',
                  display: 'inline-block',
                  animation:
                    'pulseDot 2.8s ease-in-out infinite',
                }}
              />

              <span
                style={{
                  color: 'rgba(90,0,0,0.82)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.22em',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                Specialized Services
              </span>
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily:
                '"Georgia", "Times New Roman", serif',
              lineHeight: 1,
              marginBottom: '1.8rem',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                fontStyle: 'italic',
                fontWeight: 700,
                background:
                  'linear-gradient(90deg, #220000 0%, #6f0808 45%, #a30d0d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Advisory Services
            </span>

            <span
              style={{
                display: 'block',
                fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                color: '#140909',
                fontWeight: 700,
              }}
            >
              for Media Complexity
            </span>
          </h2>

          <p
            style={{
              color: 'rgba(30,8,8,0.52)',
              fontSize: 'clamp(0.83rem, 1.5vw, 0.97rem)',
              maxWidth: 620,
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            Strategic AI transformation services designed for
            modern media enterprises navigating operational,
            editorial, and intelligence complexity.
          </p>
        </div>

        {/* GRID */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group relative overflow-hidden rounded-[30px]"
              style={{
                opacity: 0,
                padding: 'clamp(36px, 4vw, 56px)',
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(14px)',
                border:
                  '1px solid rgba(120,0,0,0.08)',
                boxShadow:
                  '0 10px 40px rgba(70,0,0,0.05)',
                transition:
                  'all 0.45s cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={(e) => {
                const el =
                  e.currentTarget as HTMLDivElement

                el.style.transform =
                  'translateY(-8px)'
                el.style.boxShadow =
                  '0 22px 60px rgba(70,0,0,0.10)'
                el.style.borderColor =
                  'rgba(120,0,0,0.18)'
              }}
              onMouseLeave={(e) => {
                const el =
                  e.currentTarget as HTMLDivElement

                el.style.transform =
                  'translateY(0px)'
                el.style.boxShadow =
                  '0 10px 40px rgba(70,0,0,0.05)'
                el.style.borderColor =
                  'rgba(120,0,0,0.08)'
              }}
            >
              {/* Hover glow line */}
              <div
                className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(120,0,0,0.9), transparent)',
                }}
              />

              {/* Accent line */}
              <div className="mb-8 overflow-hidden">
                <div
                  className="h-px transition-all duration-700 group-hover:w-24"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(120,0,0,0.75), rgba(170,20,20,0.45))',
                    width: 52,
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
                  color: '#140909',
                  fontFamily: '"Georgia", serif',
                  fontSize:
                    'clamp(1.5rem, 2.5vw, 2rem)',
                }}
              >
                {service.title}
              </SplitText>

              {/* Subtitle */}
              <p
                className="mb-6"
                style={{
                  color: 'rgba(100,0,0,0.78)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.18em',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                {service.subtitle}
              </p>

              {/* Description */}
              <p
                className="mb-8"
                style={{
                  color: 'rgba(30,8,8,0.55)',
                  fontSize: '0.84rem',
                  lineHeight: 1.85,
                  maxWidth: 500,
                }}
              >
                {service.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10">
                {service.details.map((detail, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="shrink-0 mt-1.5"
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background:
                          'rgba(120,0,0,0.75)',
                        display: 'inline-block',
                      }}
                    />

                    <span
                      style={{
                        color: 'rgba(30,8,8,0.5)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        lineHeight: 1.5,
                        fontWeight: 600,
                      }}
                    >
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                className="inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                style={{
                  color: 'rgba(90,0,0,0.92)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.18em',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                <span className="transition-colors duration-300 group-hover:text-[rgba(120,0,0,1)]">
                  Request Briefing
                </span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                  />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulseDot {
          0% {
            opacity: 0.7;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.4);
          }

          100% {
            opacity: 0.7;
            transform: scale(1);
          }
        }

        @keyframes particleFloat {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  )
}