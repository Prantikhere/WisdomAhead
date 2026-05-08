import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TiltCard from '@/components/TiltCard'

gsap.registerPlugin(ScrollTrigger)

const phases = [
  {
    number: '01',
    title: 'Comprehensive Discovery',
    body:
      'We immerse ourselves in your organization — mapping workflows, identifying data silos, and understanding the operational DNA that makes your media enterprise unique. This phase surfaces hidden inefficiencies.',

    icon: (
      <svg
        className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },

  {
    number: '02',
    title: 'Sovereign AI Architecture',
    body:
      'We design private, secure AI systems tailored to your operational reality. Every framework is built with compliance, control, and competitive advantage as first principles — never as afterthoughts.',

    icon: (
      <svg
        className="w-5 h-5 transition-transform duration-500 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },

  {
    number: '03',
    title: 'Guided Implementation',
    body:
      "We don't hand over a blueprint and disappear. Our advisors work alongside your leadership through implementation, ensuring the transformation sticks and your teams evolve into strategic operators.",

    icon: (
      <svg
        className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
]

export default function Methodology() {
  const sectionRef =
    useRef<HTMLElement>(null)

  const headingRef =
    useRef<HTMLDivElement>(null)

  const cardsRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      const cards =
        cardsRef.current?.querySelectorAll(
          '.phase-card'
        )

      if (cards) {
        gsap.fromTo(
          cards,
          {
            y: 55,
            opacity: 0,
            rotateY: -6,
          },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.2,
            stagger: 0.16,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 84%',
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
        padding:
          'clamp(100px, 12vw, 180px) 0',

        background:
          'linear-gradient(145deg, #f3f0ea 0%, #efebe5 38%, #f5f2ed 72%, #f3f0ea 100%)',
      }}
    >
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Luxury glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: '-15%',
            left: '-8%',

            width: '48vw',
            height: '48vw',

            background:
              'radial-gradient(circle, rgba(120,0,0,0.05) 0%, transparent 70%)',

            filter: 'blur(70px)',

            animation:
              'orbFloat 18s ease-in-out infinite alternate',
          }}
        />

        {/* Secondary glow */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: '-12%',
            right: '-10%',

            width: '38vw',
            height: '38vw',

            background:
              'radial-gradient(circle, rgba(180,20,20,0.04) 0%, transparent 70%)',

            filter: 'blur(70px)',

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

        {/* Editorial dots */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(120,0,0,0.42) 1px, transparent 1px)',

            backgroundSize:
              '34px 34px',
          }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,

            backgroundSize:
              '180px 180px',
          }}
        />

        {/* Top divider */}
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(120,0,0,0.12), transparent)',
          }}
        />
      </div>

      <div className="container-main relative z-[2]">

        {/* HEADING */}
        <div
          ref={headingRef}
          className="flex flex-col items-center text-center mb-24 opacity-0"
        >
          {/* Premium pill */}
          <div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8 transition-all duration-500 hover:scale-[1.03]"
            style={{
              border:
                '1px solid rgba(120,0,0,0.14)',

              background:
                'rgba(255,255,255,0.72)',

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

                borderRadius:
                  '50%',

                background:
                  'linear-gradient(135deg, #4d0202 0%, #8f1111 100%)',

                animation:
                  'pulseDot 2.8s ease-in-out infinite',
              }}
            />

            <span
              style={{
                color:
                  'rgba(90,0,0,0.82)',

                fontSize:
                  '0.68rem',

                letterSpacing:
                  '0.22em',

                fontWeight: 700,

                textTransform:
                  'uppercase',
              }}
            >
              Our Methodology
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily:
                '"Georgia", serif',

              fontSize:
                'clamp(2.2rem, 5vw, 4rem)',

              fontWeight: 700,

              color: '#1a0a0a',

              maxWidth:
                '760px',

              lineHeight: 1.06,

              letterSpacing:
                '-0.03em',
            }}
          >
            A Structured Path to{' '}
            <span
              style={{
                background:
                  'linear-gradient(90deg, #2a0000 0%, #7a0707 48%, #b51616 100%)',

                WebkitBackgroundClip:
                  'text',

                WebkitTextFillColor:
                  'transparent',

                backgroundClip:
                  'text',
              }}
            >
              Transformation
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8"
        >
          {phases.map((phase, i) => (
            <TiltCard
              key={phase.number}
              tiltAmount={5}
            >
              <div className="phase-card opacity-0 group flex flex-col h-full">
                <div
                  className="relative flex-1 p-10 rounded-[34px] transition-all duration-700 ease-out overflow-hidden"
                  style={{
                    background:
                      'rgba(255,255,255,0.72)',

                    border:
                      '1px solid rgba(120,0,0,0.08)',

                    backdropFilter:
                      'blur(14px)',

                    boxShadow:
                      '0 10px 40px rgba(70,0,0,0.05)',
                  }}
                  onMouseEnter={(e) => {
                    const el =
                      e.currentTarget as HTMLDivElement

                    el.style.transform =
                      'translateY(-8px)'

                    el.style.borderColor =
                      'rgba(120,0,0,0.18)'

                    el.style.boxShadow =
                      '0 25px 70px rgba(70,0,0,0.10)'
                  }}
                  onMouseLeave={(e) => {
                    const el =
                      e.currentTarget as HTMLDivElement

                    el.style.transform =
                      'translateY(0px)'

                    el.style.borderColor =
                      'rgba(120,0,0,0.08)'

                    el.style.boxShadow =
                      '0 10px 40px rgba(70,0,0,0.05)'
                  }}
                >
                  {/* Hover glow line */}
                  <div
                    className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(120,0,0,0.85), transparent)',
                    }}
                  />

                  {/* Ambient glow */}
                  <div
                    className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(120,0,0,0.08), transparent 70%)',

                      filter:
                        'blur(30px)',
                    }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-14 relative z-10">

                    {/* Number */}
                    <div
                      style={{
                        fontFamily:
                          '"Georgia", serif',

                        fontSize:
                          '4rem',

                        fontWeight: 700,

                        color:
  'rgba(45,0,0,0.42)',

                        lineHeight:
                          0.78,

                        transition:
                          'all 0.5s ease',

                        animation:
                          'floatNumber 6s ease-in-out infinite',

                        animationDelay: `${i * 0.8}s`,
                      }}
                      className="group-hover:text-[rgba(45,0,0,0.65)]"
                    >
                      {phase.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(120,0,0,0.08), rgba(180,20,20,0.04))',

                        border:
                          '1px solid rgba(120,0,0,0.12)',

                        color:
                          '#7a0707',

                        boxShadow:
                          '0 6px 18px rgba(120,0,0,0.05)',
                      }}
                    >
                      {phase.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-5 relative z-10"
                    style={{
                      fontFamily:
                        '"Georgia", serif',

                      fontSize:
                        '1.45rem',

                      fontWeight: 700,

                      color:
                        '#1a0a0a',

                      lineHeight:
                        1.25,
                    }}
                  >
                    {phase.title}
                  </h3>

                  {/* Body */}
                  <p
                    className="relative z-10"
                    style={{
                      color:
                        'rgba(30,8,8,0.52)',

                      fontSize:
                        '0.95rem',

                      lineHeight:
                        1.85,
                    }}
                  >
                    {phase.body}
                  </p>

                  {/* Bottom animated line */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                    style={{
                      background:
                        'linear-gradient(90deg, #2a0000 0%, #7a0707 48%, #b51616 100%)',

                      opacity: 0.7,
                    }}
                  />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      <style>{`
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

        @keyframes floatNumber {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  )
}