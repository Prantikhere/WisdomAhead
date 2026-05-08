'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Target, Shield, TrendingUp, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  {
    index: '01',
    title: 'Strategic Business Process Optimization',
    body: 'We map every operational layer of your media organization — from editorial production to distribution logistics — identifying friction points where manual processes drain margin and slow decision-making. Our recommendations are grounded in four decades of C-suite media leadership, not theoretical frameworks.',
  },
  {
    index: '02',
    title: 'Intelligent Workflow Orchestration',
    body: 'Media enterprises run on complex, interdependent workflows. We design AI-native orchestration systems that coordinate content production, cross-platform adaptation, and resource allocation — reducing time-to-market by 40-60% while preserving editorial quality and creative control.',
  },
  {
    index: '03',
    title: 'Secure Corporate Intelligence',
    body: 'Your archives, subscriber data, and competitive research represent decades of proprietary value. We architect private intelligence systems that transform this data into real-time strategic insights — all while ensuring zero exposure to public AI platforms and complete regulatory compliance.',
  },
  {
    index: '04',
    title: 'Operational Cost Transformation',
    body: 'True cost transformation in media requires more than automation — it requires reimagining how human capital is deployed. We help shift teams from repetitive execution to strategic oversight, using AI-led systems that augment rather than replace institutional expertise.',
  },
]

const icons = [Zap, Target, Shield, TrendingUp]

export default function CoreCapabilities() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      )

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.querySelectorAll('.cap-card'),
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.13,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 88%',
            },
          }
        )
      }

      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 92%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(145deg, #f3f0ea 0%, #efebe5 38%, #f5f2ed 72%, #f3f0ea 100%)',
        padding: 'clamp(64px, 9vw, 130px) 0',
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
  {[...Array(30)].map((_, i) => (
    <div
      key={i}
      className="absolute rounded-full"
      style={{
        width: i % 3 === 0 ? 4 : 2,
        height: i % 3 === 0 ? 4 : 2,

        background:
          i % 2 === 0
            ? 'rgba(130,0,0,0.32)'
            : 'rgba(180,20,20,0.24)',

        left: `${(i * 3.8) % 100}%`,
        top: `${(i * 7.2) % 100}%`,

        boxShadow:
          '0 0 12px rgba(120,0,0,0.14)',

        animation: `particleFloat ${
          6 + (i % 5)
        }s ease-in-out infinite`,

        animationDelay: `${i * 0.3}s`,
      }}
    />
  ))}

  {/* Editorial dot texture */}
  <div
    className="absolute inset-0 opacity-[0.02]"
    style={{
      backgroundImage:
        'radial-gradient(circle, rgba(110,0,0,0.35) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
    }}
  />

  {/* Grain texture */}
  <div
    className="absolute inset-0 opacity-[0.015]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: '180px 180px',
    }}
  />
</div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
<div
  ref={headingRef}
  className="text-center mb-14 lg:mb-20"
  style={{ opacity: 0 }}
>
  {/* Pill */}
  <div className="mb-8">
    <span
      className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
      style={{
        border: '1px solid rgba(120,0,0,0.15)',
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background:
            'linear-gradient(135deg, #5f0505 0%, #9b1111 100%)',
          display: 'inline-block',
        }}
      />

      <span
        style={{
          color: 'rgba(100,0,0,0.82)',
          fontSize: '0.68rem',
          letterSpacing: '0.22em',
          fontWeight: 700,
          textTransform: 'uppercase',
        }}
      >
        Core Capabilities
      </span>
    </span>
  </div>

  {/* Main heading */}
  <h2
    style={{
      fontFamily: '"Georgia","Times New Roman",serif',
      lineHeight: 0.95,
      marginBottom: '1.8rem',
    }}
  >
    <span
      style={{
        display: 'block',
        fontSize: 'clamp(2.8rem, 7vw, 5.8rem)',
        fontStyle: 'italic',
        fontWeight: 700,
        background:
          'linear-gradient(90deg, #220000 0%, #6f0808 45%, #a30d0d 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      Four Pillars
    </span>

    <span
      style={{
        display: 'block',
        fontSize: 'clamp(2.8rem, 7vw, 5.8rem)',
        color: '#140909',
        fontWeight: 700,
      }}
    >
      of Transformation
    </span>
  </h2>

  {/* Subtitle */}
  <p
    style={{
      color: 'rgba(30,8,8,0.52)',
      fontSize: 'clamp(0.83rem, 1.5vw, 0.97rem)',
      maxWidth: 620,
      margin: '0 auto',
      lineHeight: 1.8,
    }}
  >
    Our comprehensive approach combines strategic insight with
    technical excellence to deliver measurable results for media
    enterprises.
  </p>
</div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {capabilities.map((cap, i) => {
            const Icon = icons[i]

            return (
              <div
                key={cap.index}
                className="cap-card group relative flex flex-col rounded-2xl overflow-hidden"
                style={{
                  opacity: 0,
                  padding: 'clamp(24px, 3vw, 40px)',
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(120,0,0,0.1)',
                  transition:
                    'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background =
                    'rgba(255,255,255,0.98)'
                  el.style.transform =
                    'translateY(-8px)'
                  el.style.boxShadow =
                    '0 22px 55px rgba(80,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background =
                    'rgba(255,255,255,0.72)'
                  el.style.transform = 'translateY(0px)'
                  el.style.boxShadow = 'none'
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

                {/* Number + icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    style={{
                      fontFamily: '"Georgia", serif',
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                      fontWeight: 700,
                      background:
                        'linear-gradient(135deg, #2a0000, #8a1010)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {cap.index}
                  </span>

                  <Icon
                    className="floatingIcon transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                    style={{
                      width: 18,
                      height: 18,
                      color: 'rgba(90,0,0,0.7)',
                    }}
                    strokeWidth={1.8}
                  />
                </div>

                <h3
                  className="mb-4 leading-snug font-bold transition-colors duration-300 group-hover:text-[rgba(120,0,0,1)]"
                  style={{
                    color: '#140909',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                    fontFamily: '"Georgia", serif',
                  }}
                >
                  {cap.title}
                </h3>

                <p
                  style={{
                    color: 'rgba(30,8,8,0.45)',
                    fontSize: '0.8rem',
                    lineHeight: 1.75,
                    flexGrow: 1,
                  }}
                >
                  {cap.body}
                </p>

                {/* Bottom */}
                <div className="mt-8">
                  <div
                    className="mb-4"
                    style={{
                      height: 1,
                      background:
                        'linear-gradient(90deg, transparent, rgba(120,0,0,0.55), rgba(120,0,0,0.08), transparent)',
                      backgroundSize: '200% 100%',
                      animation: 'dividerFlow 7s linear infinite',
                    }}
                  />

                  <div
                    className="inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                    style={{
                      color: 'rgba(30,8,8,0.45)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}
                  >
                    <span className="group-hover:text-[rgba(120,0,0,1)] transition-colors duration-300">
                      DETAILS
                    </span>

                    <ArrowRight
                      className="transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        width: 12,
                        height: 12,
                      }}
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="text-center mt-16 lg:mt-20"
          style={{ opacity: 0 }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-3 font-semibold relative overflow-hidden"
            style={{
              background:
                'linear-gradient(90deg, #2a0000 0%, #6f0808 45%, #320000 100%)',
              color: '#fff',
              padding: '15px 36px',
              borderRadius: 999,
              fontSize: '0.75rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              animation: 'ctaPulse 4s ease-in-out infinite',
            }}
          >
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
              }}
            />

            <span className="relative z-10">
              Explore Our Solutions
            </span>

            <Zap
              className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:scale-110"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes ambientFloat {
          0% {
            transform: translate(0px, 0px);
          }
          100% {
            transform: translate(-40px, 30px);
          }
        }

        @keyframes ambientFloatReverse {
          0% {
            transform: translate(0px, 0px);
          }
          100% {
            transform: translate(40px, -25px);
          }
        }

        @keyframes dividerFlow {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes ctaPulse {
          0% {
            box-shadow: 0 10px 30px rgba(60,0,0,0.16);
          }
          50% {
            box-shadow: 0 18px 50px rgba(90,0,0,0.26);
          }
          100% {
            box-shadow: 0 10px 30px rgba(60,0,0,0.16);
          }
        }

        .floatingIcon {
          animation: iconFloat 4s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
          100% {
            transform: translateY(0px);
          }
        }

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