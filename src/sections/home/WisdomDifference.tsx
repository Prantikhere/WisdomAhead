'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextShimmer from '@/components/TextShimmer'

gsap.registerPlugin(ScrollTrigger)

export default function WisdomDifference() {
  const sectionRef = useRef<HTMLElement>(null)
  const displayRef = useRef<HTMLDivElement>(null)
  const supportRef = useRef<HTMLParagraphElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)

  const isMobile =
    typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches ||
      window.innerWidth < 768)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const chars =
        displayRef.current?.querySelectorAll('.char')

      if (chars && chars.length > 0) {
        if (isMobile) {
          gsap.fromTo(
            displayRef.current,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: displayRef.current,
                start: 'top 80%',
              },
            }
          )
        } else {
          gsap.fromTo(
            chars,
            {
              opacity: 0,
              y: 18,
              rotateX: -90,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.05,
              stagger: 0.028,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: displayRef.current,
                start: 'top 82%',
              },
            }
          )
        }
      }

      gsap.fromTo(
        supportRef.current,
        {
          y: 24,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: isMobile ? 0.1 : 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: supportRef.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        dividerRef.current,
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: dividerRef.current,
            start: 'top 90%',
          },
        }
      )

      gsap.fromTo(
        bodyRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: isMobile ? 0.2 : 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bodyRef.current,
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  const renderChars = (text: string) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className={`char inline-block ${
          isMobile ? '' : 'opacity-0'
        }`}
        style={{
          transformOrigin: 'center bottom',
          willChange: 'transform, opacity',
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(145deg, #f3f0ea 0%, #efebe5 38%, #f5f2ed 72%, #f3f0ea 100%)',
        padding: 'clamp(110px, 15vw, 220px) 0',
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Luxury glow */}
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

        {/* Secondary glow */}
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
        {[...Array(34)].map((_, i) => (
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

        {/* Editorial dot texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(110,0,0,0.35) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />
      </div>

      <div
        className="relative z-10 text-center mx-auto px-6"
        style={{
          maxWidth: 920,
        }}
      >
        {/* Premium pill */}
        <div className="mb-10">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-500 hover:scale-[1.03]"
            style={{
              border:
                '1px solid rgba(120,0,0,0.14)',
              background:
                'rgba(255,255,255,0.58)',
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
              The Wisdom Difference
            </span>
          </span>
        </div>

        {/* Heading */}
        <div
          ref={displayRef}
          className="mb-10 leading-tight"
          style={{
            perspective: '1000px',
          }}
        >
          {/* Line 1 */}
          <div
            style={{
              fontFamily:
                '"Georgia", "Times New Roman", serif',
              fontSize:
                'clamp(2.8rem, 6.8vw, 5.5rem)',
              fontWeight: 700,
              color: '#140909',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            {renderChars('Board-Level')}
          </div>

          {/* Line 2 */}
          <div
            style={{
              fontFamily:
                '"Georgia", "Times New Roman", serif',
              fontSize:
                'clamp(2.8rem, 6.8vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            <TextShimmer
              className="inline"
              style={{
                fontFamily: '"Georgia", serif',
                fontSize:
                  'clamp(2.8rem, 6.8vw, 5.5rem)',
                fontWeight: 700,
                fontStyle: 'italic',
                background:
                  'linear-gradient(90deg, #220000 0%, #6f0808 45%, #a30d0d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginRight: '0.18em',
                filter:
                  'drop-shadow(0 6px 20px rgba(110,0,0,0.08))',
              }}
            >
              AI
            </TextShimmer>

            <span
              style={{
                color: '#140909',
              }}
            >
              {renderChars('Strategy')}
            </span>
          </div>
        </div>

        {/* Support line */}
        <p
          ref={supportRef}
          className="opacity-0 mb-6"
          style={{
            color: 'rgba(30,8,8,0.84)',
            fontFamily: '"Georgia", serif',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize:
              'clamp(1rem, 2.2vw, 1.35rem)',
            lineHeight: 1.4,
          }}
        >
          We don't sell software. We advise leadership.
        </p>

        {/* Animated divider */}
        <div
          ref={dividerRef}
          className="mx-auto mb-8 origin-center"
          style={{
            width: 140,
            height: 1,
            background:
              'linear-gradient(90deg, transparent, rgba(120,0,0,0.55), transparent)',
            animation:
              'dividerFlow 7s linear infinite',
          }}
        />

        {/* Body */}
        <p
          ref={bodyRef}
          className="opacity-0 mx-auto"
          style={{
            color: 'rgba(30,8,8,0.5)',
            fontSize:
              'clamp(0.84rem, 1.45vw, 0.96rem)',
            lineHeight: 1.9,
            maxWidth: 620,
          }}
        >
          Our approach is rooted in real-world media
          experience—focused on building resilient,
          autonomous, and future-ready organizations.
        </p>
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

        @keyframes dividerFlow {
          0% {
            opacity: 0.5;
            transform: scaleX(1);
          }

          50% {
            opacity: 1;
            transform: scaleX(1.08);
          }

          100% {
            opacity: 0.5;
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}