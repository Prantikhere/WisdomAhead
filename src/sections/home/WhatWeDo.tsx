'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'
import {
  Rocket,
  Shield,
  Target,
  Database,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Rocket,
    text: 'Eliminate Inefficiencies',
    description:
      'Reduce operational waste by 40-60%',
  },
  {
    icon: Shield,
    text: 'Complete Data Sovereignty',
    description:
      '100% private, secure AI systems',
  },
  {
    icon: Database,
    text: 'Unlock Proprietary Data',
    description:
      'Decades of insights unlocked',
  },
  {
    icon: Target,
    text: 'Board-Level Insights',
    description:
      'Strategic decision intelligence',
  },
]

export default function WhatWeDo() {
  const sectionRef =
    useRef<HTMLElement>(null)

  const labelRef =
    useRef<HTMLDivElement>(null)

  const featuresRef =
    useRef<HTMLDivElement>(null)

  const bottomRef =
    useRef<HTMLDivElement>(null)

  const dividerRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        labelRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      )

      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current.querySelectorAll(
            '.feat-col'
          ),
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 82%',
            },
          }
        )
      }

      gsap.fromTo(
        dividerRef.current,
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.3,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: dividerRef.current,
            start: 'top 88%',
          },
        }
      )

      if (bottomRef.current) {
        gsap.fromTo(
          bottomRef.current.querySelectorAll(
            '.stat-block, .cta-btn'
          ),
          {
            y: 24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: 'back.out(1.3)',
            scrollTrigger: {
              trigger: bottomRef.current,
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
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(145deg, #f3f0ea 0%, #efebe5 38%, #f5f2ed 72%, #f3f0ea 100%)',

        padding:
          'clamp(80px, 10vw, 140px) 0',
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

        {/* Floating cinematic orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: '42vw',
            height: '42vw',
            top: '-18vw',
            right: '-10vw',

            background:
              'radial-gradient(circle, rgba(120,0,0,0.06), transparent 70%)',

            filter: 'blur(70px)',

            animation:
              'orbFloat 18s ease-in-out infinite alternate',
          }}
        />

        {/* Secondary orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: '28vw',
            height: '28vw',
            bottom: '-10vw',
            left: '-8vw',

            background:
              'radial-gradient(circle, rgba(120,0,0,0.04), transparent 70%)',

            filter: 'blur(60px)',

            animation:
              'orbFloatReverse 20s ease-in-out infinite alternate',
          }}
        />

        {/* Floating particles */}
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width:
                i % 3 === 0 ? 4 : 2,

              height:
                i % 3 === 0 ? 4 : 2,

              background:
                i % 2 === 0
                  ? 'rgba(130,0,0,0.30)'
                  : 'rgba(180,20,20,0.22)',

              left: `${(i * 4.1) % 100}%`,
              top: `${(i * 7.2) % 100}%`,

              boxShadow:
                '0 0 12px rgba(120,0,0,0.12)',

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

            backgroundSize:
              '32px 32px',
          }}
        />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,

            backgroundSize:
              '180px 180px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* LABEL */}
        <div
          ref={labelRef}
          className="mb-10"
          style={{
            opacity: 0,
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-500 hover:scale-[1.03]"
            style={{
              border:
                '1px solid rgba(120,0,0,0.14)',

              background:
                'rgba(255,255,255,0.6)',

              backdropFilter:
                'blur(10px)',

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
                color:
                  'rgba(90,0,0,0.82)',

                fontSize: '0.68rem',

                letterSpacing:
                  '0.22em',

                fontWeight: 700,

                textTransform:
                  'uppercase',
              }}
            >
              What We Do
            </span>
          </div>
        </div>

        {/* HEADING */}
        <SplitText
          as="h2"
          type="lines"
          stagger={0.09}
          duration={1}
          y={44}
          className="font-bold leading-[1.02] mb-6"
          style={{
            fontSize:
              'clamp(2.3rem, 5.5vw, 4.4rem)',

            maxWidth: '760px',

            fontFamily:
              '"Georgia", "Times New Roman", serif',

            color: '#140909',
          }}
        >
          Operational Intelligence for Media Enterprise
        </SplitText>

        {/* Subtitle */}
        <p
          className="mb-16 leading-relaxed"
          style={{
            color:
              'rgba(30,8,8,0.52)',

            fontSize:
              'clamp(0.86rem, 1.5vw, 1rem)',

            maxWidth: '600px',

            lineHeight: 1.9,
          }}
        >
          We architect sovereign AI systems
          that redesign how media
          organizations operate —
          eliminating inefficiencies trapped
          in legacy workflows, unlocking
          decades of proprietary data, and
          enabling board-level
          decision-making with complete data
          sovereignty.
        </p>

        {/* FEATURES */}
        <div
          ref={featuresRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="feat-col group flex flex-col gap-5 rounded-[28px] relative overflow-hidden"
              style={{
                opacity: 0,

                padding:
                  '28px 24px',

                background:
                  'rgba(255,255,255,0.72)',

                backdropFilter:
                  'blur(14px)',

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
              {/* Hover glow */}
              <div
                className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(120,0,0,0.85), transparent)',
                }}
              />

              {/* Icon */}
              <div
                className="flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  width: 50,
                  height: 50,

                  borderRadius: 16,

                  background:
                    'linear-gradient(135deg, rgba(120,0,0,0.08), rgba(180,20,20,0.05))',

                  border:
                    '1px solid rgba(120,0,0,0.14)',

                  flexShrink: 0,
                }}
              >
                <feature.icon
                  style={{
                    width: 18,
                    height: 18,
                    color: '#7a0707',
                  }}
                  strokeWidth={2.2}
                />
              </div>

              <div>
                <h4
                  className="font-semibold leading-snug mb-2"
                  style={{
                    color: '#140909',

                    fontSize: '0.92rem',

                    fontFamily:
                      '"Georgia", serif',
                  }}
                >
                  {feature.text}
                </h4>

                <p
                  style={{
                    color:
                      'rgba(30,8,8,0.48)',

                    fontSize: '0.78rem',

                    lineHeight: 1.65,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div
          ref={dividerRef}
          className="mb-14 origin-left"
          style={{
            height: 1,

            background:
              'linear-gradient(to right, rgba(120,0,0,0.35), rgba(180,20,20,0.10) 50%, transparent)',

            transformOrigin:
              'left center',
          }}
        />

        {/* BOTTOM */}
        <div
          ref={bottomRef}
          className="flex flex-wrap items-center gap-x-14 gap-y-8"
        >
          {/* Stat 1 */}
          <div
            className="stat-block flex flex-col"
            style={{
              opacity: 0,
              minWidth: '180px',
            }}
          >
            <span
              className="font-bold leading-none"
              style={{
                fontSize:
                  'clamp(3rem, 7vw, 5rem)',

                background:
                  'linear-gradient(90deg, #2a0000 0%, #6f0808 45%, #320000 100%)',

                WebkitBackgroundClip:
                  'text',

                WebkitTextFillColor:
                  'transparent',

                backgroundClip: 'text',

                fontFamily:
                  '"Georgia", serif',

                letterSpacing:
                  '-0.04em',

                animation:
                  'floatCounter 4s ease-in-out infinite',
              }}
            >
              40–60%
            </span>

            <span
              style={{
                marginTop: '10px',

                color:
                  'rgba(30,8,8,0.45)',

                fontSize: '0.72rem',

                letterSpacing:
                  '0.18em',

                textTransform:
                  'uppercase',

                lineHeight: 1.6,
              }}
            >
              Operational Efficiency
              Gained
            </span>
          </div>

          {/* Stat 2 */}
          <div
            className="stat-block flex flex-col"
            style={{
              opacity: 0,
              minWidth: '180px',
            }}
          >
            <span
              className="font-bold leading-none"
              style={{
                fontSize:
                  'clamp(3rem, 7vw, 5rem)',

                background:
                  'linear-gradient(90deg, #2a0000 0%, #6f0808 45%, #320000 100%)',

                WebkitBackgroundClip:
                  'text',

                WebkitTextFillColor:
                  'transparent',

                backgroundClip: 'text',

                fontFamily:
                  '"Georgia", serif',

                letterSpacing:
                  '-0.04em',

                animation:
                  'floatCounter 4s ease-in-out infinite',
                animationDelay: '1s',
              }}
            >
              100%
            </span>

            <span
              style={{
                marginTop: '10px',

                color:
                  'rgba(30,8,8,0.45)',

                fontSize: '0.72rem',

                letterSpacing:
                  '0.18em',

                textTransform:
                  'uppercase',

                lineHeight: 1.6,
              }}
            >
              Data Sovereignty
              Maintained
            </span>
          </div>

          {/* CTA */}
          <div
            className="cta-btn ml-auto"
            style={{
              opacity: 0,
            }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()

                document
                  .getElementById('contact')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }}
              className="group inline-flex items-center gap-3 font-semibold relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(90deg, #2a0000 0%, #6f0808 45%, #320000 100%)',

                color: '#fff',

                padding:
                  '15px 34px',

                borderRadius: 999,

                fontSize: '0.75rem',

                letterSpacing:
                  '0.14em',

                textTransform:
                  'uppercase',

                textDecoration:
                  'none',

                boxShadow:
                  '0 10px 32px rgba(90,0,0,0.18)',

                transition:
                  'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el =
                  e.currentTarget as HTMLAnchorElement

                el.style.transform =
                  'translateY(-2px)'

                el.style.boxShadow =
                  '0 18px 42px rgba(90,0,0,0.32)'
              }}
              onMouseLeave={(e) => {
                const el =
                  e.currentTarget as HTMLAnchorElement

                el.style.transform =
                  'translateY(0px)'

                el.style.boxShadow =
                  '0 10px 32px rgba(90,0,0,0.18)'
              }}
            >
              {/* Shine */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)',

                  pointerEvents:
                    'none',
                }}
              />

              <Rocket
                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
                strokeWidth={2.5}
              />

              <span className="relative z-10">
                Start Your
                Transformation
              </span>

              <svg
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                style={{
                  width: 14,
                  height: 14,
                }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
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

        @keyframes orbFloat {
          0% {
            transform: translate(0px,0px);
          }

          100% {
            transform: translate(-40px,30px);
          }
        }

        @keyframes orbFloatReverse {
          0% {
            transform: translate(0px,0px);
          }

          100% {
            transform: translate(40px,-25px);
          }
        }

        @keyframes floatCounter {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-4px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  )
}