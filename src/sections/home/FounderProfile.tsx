'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedCounter from '@/components/AnimatedCounter'

gsap.registerPlugin(ScrollTrigger)

const understandings = [
  'How large media organizations scale',
  'Where inefficiencies exist within legacy systems',
  'How technology can transform operational economics',
]

export default function FounderProfile() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const isMobile =
    typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches ||
      window.innerWidth < 768)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          y: 50,
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
        },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 88%',
          },
        }
      )

      if (!isMobile) {
        gsap.to(imageRef.current, {
          yPercent: -4,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      const items =
        contentRef.current?.querySelectorAll('.reveal-item')

      if (items) {
        gsap.fromTo(
          items,
          {
            y: 32,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 82%',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

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

        {/* Floating red particles */}
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 4 : 2,
              height: i % 3 === 0 ? 4 : 2,

              background:
                i % 2 === 0
                  ? 'rgba(130,0,0,0.28)'
                  : 'rgba(180,20,20,0.22)',

              left: `${(i * 4.2) % 100}%`,
              top: `${(i * 7.4) % 100}%`,

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* LEFT IMAGE */}
          <div className="lg:sticky lg:top-24">
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-[28px] group"
              style={{
                opacity: 0,
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(120,0,0,0.1)',
                boxShadow:
                  '0 16px 60px rgba(70,0,0,0.08)',
                padding: 8,
                transition:
                  'all 0.5s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              {/* Top glow line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: 1,
                  background:
                    'linear-gradient(90deg, transparent, rgba(120,0,0,0.75), transparent)',
                }}
              />

              <img
                src="/images/founder-portrait.jpg"
                alt="D. D. Purkayastha"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{
                  aspectRatio: '3/4',
                  display: 'block',
                  borderRadius: 22,
                  filter:
                    'grayscale(8%) contrast(1.03) saturate(0.96)',
                }}
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div ref={contentRef}>

            {/* Label */}
            <div
              className="reveal-item mb-6"
              style={{ opacity: 0 }}
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
                style={{
                  border: '1px solid rgba(120,0,0,0.14)',
                  background: 'rgba(255,255,255,0.6)',
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
                  Founder & Principal Advisor
                </span>
              </span>
            </div>

            {/* Heading */}
            <h2
              className="reveal-item mb-3 leading-tight"
              style={{
                opacity: 0,
                color: '#140909',
                fontFamily:
                  '"Georgia", "Times New Roman", serif',
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                fontWeight: 700,
              }}
            >
              D. D. Purkayastha
            </h2>

            {/* Subtitle */}
            <p
              className="reveal-item mb-8"
              style={{
                opacity: 0,
                color: 'rgba(30,8,8,0.42)',
                fontSize: '0.82rem',
                letterSpacing: '0.04em',
              }}
            >
              Global Media Leader · Author · Board-Level Strategist
            </p>

            {/* Counter */}
            <div
              className="reveal-item mb-10"
              style={{ opacity: 0 }}
            >
              <span
                className="block leading-none font-bold"
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: 'clamp(3rem, 6vw, 4.8rem)',
                  background:
                    'linear-gradient(90deg, #220000 0%, #6f0808 45%, #a30d0d 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation:
                    'floatCounter 4s ease-in-out infinite',
                }}
              >
                <AnimatedCounter
                  end={40}
                  suffix="+"
                  duration={2.5}
                />
              </span>

              <span
                style={{
                  display: 'block',
                  marginTop: 8,
                  color: 'rgba(30,8,8,0.38)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Years in Media Leadership
              </span>
            </div>

            {/* Body */}
            <p
              className="reveal-item mb-10"
              style={{
                opacity: 0,
                color: 'rgba(30,8,8,0.55)',
                fontSize: '0.88rem',
                lineHeight: 1.85,
                maxWidth: 560,
              }}
            >
              With over four decades of leadership in the media
              industry, D. D. Purkayastha brings deep,
              institutional knowledge at the intersection of
              media, technology, and business transformation.
              As the former Managing Director & CEO of the ABP
              Group, he led one of India's most influential
              media organizations through multiple phases of
              evolution — across print, broadcast, and digital.
              Having worked at the highest levels, he
              understands:
            </p>

            {/* Understanding blocks */}
            <div className="flex flex-col gap-4 mb-12">
              {understandings.map((item, i) => (
                <div
                  key={i}
                  className="reveal-item group flex items-start gap-5 rounded-2xl"
                  style={{
                    opacity: 0,
                    padding: '18px 20px',
                    background:
                      'rgba(255,255,255,0.68)',
                    backdropFilter: 'blur(12px)',
                    border:
                      '1px solid rgba(120,0,0,0.08)',
                    transition:
                      'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={(e) => {
                    const el =
                      e.currentTarget as HTMLDivElement

                    el.style.transform =
                      'translateY(-4px)'
                    el.style.boxShadow =
                      '0 16px 40px rgba(70,0,0,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    const el =
                      e.currentTarget as HTMLDivElement

                    el.style.transform =
                      'translateY(0px)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <span
                    className="shrink-0 font-medium transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      color: 'rgba(110,0,0,0.9)',
                      fontSize: '0.76rem',
                      letterSpacing: '0.08em',
                      minWidth: 24,
                      paddingTop: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span
                    style={{
                      color: 'rgba(30,8,8,0.62)',
                      fontSize: '0.84rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="reveal-item"
              style={{
                opacity: 0,
                borderLeft:
                  '3px solid rgba(110,0,0,0.75)',
                paddingLeft: 24,
                margin: 0,
              }}
            >
              <p
                style={{
                  color: 'rgba(30,8,8,0.82)',
                  fontFamily: '"Georgia", serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: 1.6,
                }}
              >
                "We don't just advise transformation.
                We've led it."
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      <style>{`
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