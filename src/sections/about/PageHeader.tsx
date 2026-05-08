'use client'

import React, {
  useEffect,
  useRef,
} from 'react'

import gsap from 'gsap'

import MeshGradientRain from '@/components/MeshGradientRain'
import SplitText from '@/components/SplitText'

import {
  Sparkles,
  Brain,
} from 'lucide-react'

export default function PageHeader() {
  const breadcrumbRef =
    useRef<HTMLDivElement>(null)

  const subtitleRef =
    useRef<HTMLParagraphElement>(null)

  const scrollRef =
    useRef<HTMLDivElement>(null)

  const decorRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.35,
    })

    tl.fromTo(
      breadcrumbRef.current,
      {
        opacity: 0,
        y: 18,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      }
    )

    tl.fromTo(
      decorRef.current,
      {
        opacity: 0,
        scale: 0.94,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: 'power3.out',
      },
      '-=0.5'
    )

    tl.fromTo(
      subtitleRef.current,
      {
        y: 18,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: 'power2.out',
      },
      '-=0.8'
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

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height: '72vh',

        minHeight: '560px',

        background:
          'linear-gradient(145deg, #f3f0ea 0%, #efebe5 38%, #f5f2ed 72%, #f3f0ea 100%)',
      }}
    >
      <style>{`
        @keyframes particleFloat {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-14px);
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

        @keyframes shimmerLine {
          0% {
            opacity: 0.25;
          }

          50% {
            opacity: 0.7;
          }

          100% {
            opacity: 0.25;
          }
        }

        @keyframes slowRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>

      {/* Mesh */}
      <MeshGradientRain
        opacity={0.12}
        mouseReactive={true}
      />

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Main luxury glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: '-18%',
            left: '-10%',

            width: '55vw',
            height: '55vw',

            background:
              'radial-gradient(circle, rgba(120,0,0,0.06) 0%, transparent 70%)',

            filter: 'blur(70px)',

            animation:
              'orbFloat 18s ease-in-out infinite alternate',
          }}
        />

        {/* Secondary glow */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: '-14%',
            right: '-8%',

            width: '42vw',
            height: '42vw',

            background:
              'radial-gradient(circle, rgba(180,20,20,0.05) 0%, transparent 70%)',

            filter: 'blur(70px)',

            animation:
              'orbFloatReverse 20s ease-in-out infinite alternate',
          }}
        />

        {/* Editorial grid */}
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
              '170px 170px',
          }}
        />

        {/* Floating particles */}
        {[...Array(26)].map((_, i) => (
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

              left: `${(i * 4.2) % 100}%`,
              top: `${(i * 7.1) % 100}%`,

              boxShadow:
                '0 0 12px rgba(120,0,0,0.12)',

              animation: `particleFloat ${
                6 + (i % 5)
              }s ease-in-out infinite`,

              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      {/* Thin frame */}
      <div
        className="absolute pointer-events-none"
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

      {/* Corner accents */}
      {([
        {
          top: 20,
          left: 20,
        },
        {
          top: 20,
          right: 20,
        },
        {
          bottom: 20,
          left: 20,
        },
        {
          bottom: 20,
          right: 20,
        },
      ] as React.CSSProperties[]).map(
        (pos, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              ...pos,

              width: 24,
              height: 24,

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
        )
      )}

      {/* Decorative visual */}
      <div
        ref={decorRef}
        className="absolute inset-0 pointer-events-none opacity-0"
      >
        {/* Outer rotating ring */}
        <div
          className="absolute"
          style={{
            top: '50%',
            right: '14%',

            transform:
              'translateY(-50%)',

            width: 240,
            height: 240,

            border:
              '1px solid rgba(120,0,0,0.10)',

            borderRadius: '50%',

            animation:
              'slowRotate 22s linear infinite',
          }}
        />

        {/* Middle ring */}
        <div
          className="absolute"
          style={{
            top: '50%',
            right: '14%',

            transform:
              'translateY(-50%)',

            width: 150,
            height: 150,

            border:
              '1px solid rgba(120,0,0,0.16)',

            borderRadius: '50%',
          }}
        />

        {/* Core */}
        <div
          className="absolute rounded-full"
          style={{
            top: '50%',
            right: '14%',

            transform:
              'translate(50%, -50%)',

            width: 14,
            height: 14,

            background:
              'linear-gradient(135deg, #6f0808, #b51616)',

            boxShadow:
              '0 0 22px rgba(120,0,0,0.28)',

            animation:
              'pulseDot 2.8s ease-in-out infinite',
          }}
        />

        {/* Connector line */}
        <div
          className="absolute"
          style={{
            top: '50%',
            right: '14%',

            width: 180,
            height: 1,

            transform:
              'translateY(-50%)',

            background:
              'linear-gradient(to right, rgba(120,0,0,0.18), transparent)',

            animation:
              'shimmerLine 5s ease-in-out infinite',
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="container-main relative z-[2] text-center px-6">

        {/* Premium pill */}
        <div
          ref={breadcrumbRef}
          className="mb-10 opacity-0"
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
            <Sparkles
              style={{
                width: 13,
                height: 13,
                color: '#7a0707',
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
              About Wisdomahead
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="relative inline-block mb-8">
          <SplitText
  as="h1"
  type="lines"
  className="relative"
  style={{
    fontFamily:
      '"Georgia","Times New Roman",serif',

    fontSize:
      'clamp(2.8rem,7vw,5.6rem)',

    fontWeight: 700,

    lineHeight: 1.02,

    letterSpacing:
      '-0.04em',

    color: '#1a0a0a',

    textShadow:
      '0 4px 14px rgba(120,0,0,0.08)',
  }}
            stagger={0.09}
            duration={1.15}
            y={34}
          >
            About Wisdomahead
          </SplitText>
        </div>

        {/* Divider */}
        <div className="relative flex flex-col items-center mt-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="w-14 h-px"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgba(120,0,0,0.42))',
              }}
            />

            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor:
                  'rgba(120,0,0,0.6)',
              }}
            />

            <div
              className="w-14 h-px"
              style={{
                background:
                  'linear-gradient(to left, transparent, rgba(120,0,0,0.42))',
              }}
            />
          </div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="opacity-0 mx-auto max-w-[680px]"
            style={{
              fontFamily:
                '"Georgia",serif',

              fontStyle: 'italic',

              color:
                'rgba(30,8,8,0.56)',

              fontSize:
                'clamp(1rem, 2vw, 1.28rem)',

              lineHeight: 1.9,
            }}
          >
            The convergence of media
            tradition and{' '}
            <span
              style={{
                background:
                  'linear-gradient(90deg, #6f0808, #b51616)',

                WebkitBackgroundClip:
                  'text',

                WebkitTextFillColor:
                  'transparent',

                backgroundClip: 'text',

                fontWeight: 700,
              }}
            >
              sovereign AI systems
            </span>
          </p>
        </div>
      </div>

      {/* Scroll cue */}
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

              letterSpacing:
                '0.22em',

              fontWeight: 700,

              textTransform:
                'uppercase',
            }}
          >
            Explore
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
    </section>
  )
}