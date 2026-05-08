'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import MeshGradientRain from '@/components/MeshGradientRain'
import MagneticButton from '@/components/MagneticButton'
import { Sparkles, Zap, Brain } from 'lucide-react'

export default function Hero() {
  const labelRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)

  const isMobile =
    typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches ||
      window.innerWidth < 768)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.35 })

    tl.fromTo(
      frameRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
      }
    )

    tl.fromTo(
      labelRef.current,
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
      },
      '-=0.8'
    )

    tl.fromTo(
      line1Ref.current,
      {
        y: 70,
        opacity: 0,
        rotateX: -20,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power4.out',
      },
      '-=0.35'
    )

    tl.fromTo(
      line2Ref.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      },
      '-=0.75'
    )

    tl.fromTo(
      subRef.current,
      {
        y: 28,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.65'
    )

    tl.fromTo(
      ctaRef.current,
      {
        y: 18,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
      },
      '-=0.5'
    )

    tl.fromTo(
      decorRef.current,
      {
        scale: 0.9,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
      },
      '-=1'
    )

    tl.fromTo(
      scrollRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
      },
      '-=0.25'
    )

    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    if (isMobile) return

    const onScroll = () => {
      if (!scrollRef.current || !sectionRef.current)
        return

      const scrollY = window.scrollY

      scrollRef.current.style.opacity = String(
        Math.max(0, 1 - scrollY / 150)
      )

      const content =
        sectionRef.current.querySelector(
          '.hero-content'
        ) as HTMLElement

      if (content) {
        content.style.transform = `translateY(${
          scrollY * 0.12
        }px)`
      }
    }

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      )
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] md:min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(145deg, #f3f0ea 0%, #efebe5 38%, #f5f2ed 72%, #f3f0ea 100%)',
      }}
    >
      {/* Mesh */}
      <MeshGradientRain
        opacity={0.12}
        mouseReactive={true}
      />

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Main cinematic glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: '-18%',
            left: '-10%',
            width: '55vw',
            height: '55vw',
            background:
              'radial-gradient(circle, rgba(120,0,0,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation:
              'orbFloat 18s ease-in-out infinite alternate',
          }}
        />

        {/* Secondary glow */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: '-12%',
            right: '-6%',
            width: '42vw',
            height: '42vw',
            background:
              'radial-gradient(circle, rgba(180,20,20,0.05) 0%, transparent 70%)',
            filter: 'blur(70px)',
            animation:
              'orbFloatReverse 22s ease-in-out infinite alternate',
          }}
        />

        {/* Vertical beam */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2"
          style={{
            width: 1,
            height: '100%',
            background:
              'linear-gradient(to bottom, transparent, rgba(120,0,0,0.08), transparent)',
          }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '170px 170px',
          }}
        />

        {/* Editorial dots */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(120,0,0,0.42) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Floating luxury particles */}
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 5 : 3,
              height: i % 3 === 0 ? 5 : 3,

              background:
                'linear-gradient(135deg, rgba(120,0,0,0.95), rgba(180,20,20,0.7))',

              left: `${8 + ((i * 5.2) % 82)}%`,
              top: `${10 + ((i * 4.5) % 78)}%`,

              opacity: 0.22,

              boxShadow:
                '0 0 14px rgba(120,0,0,0.18)',

              animation: `floatingDots ${
                7 + (i % 5)
              }s ease-in-out infinite alternate`,

              animationDelay: `${i * 0.28}s`,
            }}
          />
        ))}
      </div>

      {/* FRAME */}
      <div
        ref={frameRef}
        className="absolute pointer-events-none opacity-0"
        style={{
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
          border:
            '1px solid rgba(120,0,0,0.06)',
          borderRadius: 2,
        }}
      />

      {/* CORNERS */}
      {[
        { top: 20, left: 20 },
        { top: 20, right: 20 },
        { bottom: 20, left: 20 },
        { bottom: 20, right: 20 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            ...pos,
            width: 22,
            height: 22,

            borderTop:
              i < 2
                ? '1px solid rgba(120,0,0,0.22)'
                : undefined,

            borderBottom:
              i >= 2
                ? '1px solid rgba(120,0,0,0.22)'
                : undefined,

            borderLeft:
              i % 2 === 0
                ? '1px solid rgba(120,0,0,0.22)'
                : undefined,

            borderRight:
              i % 2 === 1
                ? '1px solid rgba(120,0,0,0.22)'
                : undefined,
          }}
        />
      ))}

      {/* CONTENT */}
      <div
        className="hero-content relative z-[2] w-full will-change-transform grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        style={{
          padding:
            'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        }}
      >
        {/* LEFT */}
        <div className="lg:col-span-7">

          {/* Label */}
          <div
            ref={labelRef}
            className="mb-6 lg:mb-10 opacity-0"
          >
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-500 hover:scale-[1.03]"
              style={{
                border:
                  '1px solid rgba(120,0,0,0.14)',
                background:
                  'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(10px)',
                boxShadow:
                  '0 4px 20px rgba(120,0,0,0.03)',
              }}
            >
              <Sparkles
                style={{
                  width: 13,
                  height: 13,
                  color: '#7a0707',
                }}
              />

              <span
                style={{
                  color: '#7a0707',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  fontWeight: 700,
                }}
              >
                SOVEREIGN AI ADVISORY
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            className="mb-8 lg:mb-14"
            style={{
              maxWidth: 760,
            }}
          >
            <div
              ref={line1Ref}
              className="opacity-0"
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: '"Georgia", serif',
                  fontSize:
                    'clamp(2.7rem, 6.8vw, 5.6rem)',
                  fontWeight: 700,
                  lineHeight: 0.92,
                  letterSpacing: '-0.05em',

                  backgroundImage:
                    'linear-gradient(135deg, #2a0000 0%, #7a0707 48%, #b51616 100%)',

                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor:
                    'transparent',

                  filter:
                    'drop-shadow(0 10px 30px rgba(120,0,0,0.10))',
                }}
              >
                Operational Excellence
              </span>
            </div>

            <div
              ref={line2Ref}
              className="opacity-0 flex flex-wrap items-baseline gap-x-3"
            >
              <em
                style={{
                  fontFamily: '"Georgia", serif',
                  fontStyle: 'italic',
                  fontSize:
                    'clamp(2.7rem, 6.8vw, 5.6rem)',
                  fontWeight: 400,
                  color:
                    'rgba(26,8,8,0.28)',
                  lineHeight: 1.05,
                }}
              >
                Through
              </em>

              <span
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize:
                    'clamp(2.7rem, 6.8vw, 5.6rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: '#140909',
                }}
              >
                Sovereign AI
              </span>
            </div>
          </div>

          {/* Subtext */}
          <p
            ref={subRef}
            className="opacity-0 mb-10 lg:mb-14"
            style={{
              color:
                'rgba(26,8,8,0.55)',
              fontSize:
                'clamp(0.86rem, 1.6vw, 1.04rem)',
              lineHeight: 1.9,
              maxWidth: 500,
            }}
          >
            We architect secure, private AI
            systems that transform internal
            operations — making media
            organizations faster, leaner, and
            more intelligent.
          </p>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="opacity-0"
          >
            <MagneticButton strength={0.5}>
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

                  padding: '15px 34px',

                  borderRadius: 999,

                  fontSize: '0.75rem',

                  letterSpacing: '0.16em',

                  textTransform: 'uppercase',

                  textDecoration: 'none',

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
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)',
                  }}
                />

                <Zap
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  strokeWidth={2.5}
                />

                <span className="relative z-10">
                  Request a Consultation
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
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                  />

                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          ref={decorRef}
          className="lg:col-span-5 flex items-center justify-center opacity-0 relative"
        >
          <div
            className="relative w-full"
            style={{
              height:
                typeof window !== 'undefined' &&
                window.innerWidth < 768
                  ? 280
                  : 540,
            }}
          >

            {/* Outer ring */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',

                transform:
                  'translate(-50%, -50%)',

                width:
                  typeof window !==
                    'undefined' &&
                  window.innerWidth < 768
                    ? 190
                    : 390,

                height:
                  typeof window !==
                    'undefined' &&
                  window.innerWidth < 768
                    ? 190
                    : 390,

                border:
                  '1px solid rgba(120,0,0,0.12)',

                borderRadius: '50%',

                animation:
                  'nodeFloat 7s ease-in-out infinite',
              }}
            />

            {/* Middle ring */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',

                transform:
                  'translate(-50%, -50%)',

                width: 270,
                height: 270,

                border:
                  '1px solid rgba(120,0,0,0.16)',

                borderRadius: '50%',

                animation:
                  'nodeFloat 5s ease-in-out infinite',

                animationDelay: '1s',
              }}
            />

            {/* Inner glow */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',

                transform:
                  'translate(-50%, -50%)',

                width: 150,
                height: 150,

                background:
                  'radial-gradient(circle, rgba(120,0,0,0.08) 0%, transparent 70%)',

                borderRadius: '50%',

                filter: 'blur(16px)',

                animation:
                  'pulseCore 5s ease-in-out infinite',
              }}
            />

            {/* Diamond */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',

                transform:
                  'translate(-50%, -50%) rotate(45deg)',

                width: 190,
                height: 190,

                border:
                  '1px solid rgba(120,0,0,0.14)',

                animation:
                  'slowRotate 18s linear infinite',
              }}
            />

            {/* SVG Network */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',

                transform:
                  'translate(-50%, -50%)',

                width: 330,
                height: 330,
              }}
            >
              <svg
                viewBox="0 0 320 320"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient
                    id="ng"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#7a0707"
                    />

                    <stop
                      offset="100%"
                      stopColor="#c11a1a"
                    />
                  </linearGradient>

                  <filter id="glow">
                    <feGaussianBlur
                      stdDeviation="2.5"
                      result="coloredBlur"
                    />

                    <feMerge>
                      <feMergeNode in="coloredBlur" />

                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Lines */}
                {[
                  [80, 80, 160, 160],
                  [240, 80, 160, 160],
                  [80, 240, 160, 160],
                  [240, 240, 160, 160],
                  [80, 80, 240, 80],
                  [80, 240, 240, 240],
                  [80, 80, 80, 240],
                  [240, 80, 240, 240],
                ].map(
                  (
                    [x1, y1, x2, y2],
                    i
                  ) => (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#ng)"
                      strokeWidth="0.8"
                      strokeOpacity="0.4"
                      style={{
                        animation: `shimmerLine 2.5s ease-in-out infinite`,
                        animationDelay: `${i * 0.28}s`,
                      }}
                    />
                  )
                )}

                {/* Nodes */}
                {[
                  [80, 80],
                  [240, 80],
                  [80, 240],
                  [240, 240],
                ].map(([cx, cy], i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="url(#ng)"
                    filter="url(#glow)"
                    style={{
                      animation: `nodeFloat ${
                        4 + i * 0.4
                      }s ease-in-out infinite`,
                    }}
                  />
                ))}

                {/* Core */}
                <circle
                  cx="160"
                  cy="160"
                  r="7"
                  fill="#7a0707"
                  filter="url(#glow)"
                  style={{
                    animation:
                      'pulseCore 3s ease-in-out infinite',
                  }}
                />

                <circle
                  cx="160"
                  cy="160"
                  r="16"
                  fill="none"
                  stroke="rgba(120,0,0,0.18)"
                  strokeWidth="1"
                  style={{
                    animation:
                      'pulseRing 3s ease-in-out infinite',
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 opacity-0"
      >
        <div className="flex items-center gap-2">
          <Brain
            style={{
              width: 12,
              height: 12,
              color:
                'rgba(120,0,0,0.45)',
            }}
          />

          <span
            style={{
              color:
                'rgba(26,8,8,0.32)',

              fontSize: '0.6rem',

              letterSpacing: '0.22em',

              fontWeight: 700,

              textTransform: 'uppercase',
            }}
          >
            Scroll to Explore
          </span>
        </div>

        <div
          className="relative flex flex-col items-center"
          style={{
            height: 44,
          }}
        >
          <div
            className="w-px"
            style={{
              height: 36,

              background:
                'linear-gradient(to bottom, rgba(120,0,0,0.45), transparent)',

              animation:
                'scrollLine 2s ease-in-out infinite',
            }}
          />

          <div
            className="absolute bottom-0 w-1.5 h-1.5 rounded-full"
            style={{
              background:
                'rgba(120,0,0,0.6)',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes floatingDots {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.15;
          }

          50% {
            opacity: 0.35;
          }

          100% {
            transform: translateY(-18px) translateX(10px);
            opacity: 0.12;
          }
        }

        @keyframes nodeFloat {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes shimmerLine {
          0% {
            opacity: 0.15;
          }

          50% {
            opacity: 0.45;
          }

          100% {
            opacity: 0.15;
          }
        }

        @keyframes scrollLine {
          0% {
            transform: scaleY(0);
            transform-origin: top;
          }

          50% {
            transform: scaleY(1);
            transform-origin: top;
          }

          50.1% {
            transform-origin: bottom;
          }

          100% {
            transform: scaleY(0);
            transform-origin: bottom;
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

        @keyframes pulseCore {
          0%,100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.08);
            opacity: 1;
          }
        }

        @keyframes pulseRing {
          0% {
            opacity: 0.2;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.45;
            transform: scale(1.08);
          }

          100% {
            opacity: 0.2;
            transform: scale(0.9);
          }
        }

        @keyframes slowRotate {
          from {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(405deg);
          }
        }
      `}</style>
    </section>
  )
}