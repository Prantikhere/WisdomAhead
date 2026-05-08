import { useEffect, useRef } from 'react'
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

  const ornamentRef =
    useRef<HTMLDivElement>(null)

  const decorRef =
    useRef<HTMLDivElement>(null)

  const scrollRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.3,
    })

    tl.fromTo(
      breadcrumbRef.current,
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
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
      '-=0.3'
    )

    tl.fromTo(
      subtitleRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
      },
      '-=0.6'
    )

    tl.fromTo(
      ornamentRef.current,
      {
        scaleX: 0,
        opacity: 0,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'expo.out',
      },
      '-=0.5'
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
      '-=0.2'
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height:
          'clamp(520px, 72vh, 760px)',

        minHeight: '560px',

        background:
          'linear-gradient(145deg, #f4f1eb 0%, #f2ede7 38%, #f7f4ef 72%, #f3f0ea 100%)',
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

        @keyframes slowRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
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
      `}</style>

      {/* Mesh */}
      <MeshGradientRain
        opacity={0.045}
        mouseReactive={true}
      />

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Large ambient glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: '-12%',
            left: '-8%',

            width: '52vw',
            height: '52vw',

            background:
              'radial-gradient(circle, rgba(120,0,0,0.05) 0%, transparent 70%)',

            filter: 'blur(80px)',

            animation:
              'orbFloat 18s ease-in-out infinite alternate',
          }}
        />

        {/* Secondary glow */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: '-16%',
            right: '-10%',

            width: '42vw',
            height: '42vw',

            background:
              'radial-gradient(circle, rgba(180,20,20,0.05) 0%, transparent 70%)',

            filter: 'blur(70px)',

            animation:
              'orbFloatReverse 20s ease-in-out infinite alternate',
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(120,0,0,0.42) 1px, transparent 1px)',

            backgroundSize:
              '38px 38px',
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
                  ? 'rgba(130,0,0,0.28)'
                  : 'rgba(180,20,20,0.18)',

              left: `${(i * 4.2) % 100}%`,
              top: `${(i * 7.2) % 100}%`,

              boxShadow:
                '0 0 12px rgba(120,0,0,0.08)',

              animation: `particleFloat ${
                6 + (i % 5)
              }s ease-in-out infinite`,

              animationDelay: `${i * 0.22}s`,
            }}
          />
        ))}
      </div>

      {/* Frame */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 18,
          left: 18,
          right: 18,
          bottom: 18,

          border:
            '1px solid rgba(120,0,0,0.06)',
        }}
      />

      {/* Corner accents */}
      {([
        {
          top: 18,
          left: 18,
        },
        {
          top: 18,
          right: 18,
        },
        {
          bottom: 18,
          left: 18,
        },
        {
          bottom: 18,
          right: 18,
        },
      ] as React.CSSProperties[]).map(
        (pos, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              ...pos,

              width: 26,
              height: 26,

              borderTop:
                i < 2
                  ? '1px solid rgba(120,0,0,0.18)'
                  : undefined,

              borderBottom:
                i >= 2
                  ? '1px solid rgba(120,0,0,0.18)'
                  : undefined,

              borderLeft:
                i % 2 === 0
                  ? '1px solid rgba(120,0,0,0.18)'
                  : undefined,

              borderRight:
                i % 2 === 1
                  ? '1px solid rgba(120,0,0,0.18)'
                  : undefined,
            }}
          />
        )
      )}

      {/* Decorative geometry */}
      <div
        ref={decorRef}
        className="absolute inset-0 pointer-events-none opacity-0"
      >
        <div
          className="absolute"
          style={{
            top: '42%',
            right: '13%',

            width: 260,
            height: 260,

            border:
              '1px solid rgba(120,0,0,0.08)',

            borderRadius: '50%',

            animation:
              'slowRotate 24s linear infinite',
          }}
        />

        <div
          className="absolute"
          style={{
            top: '50%',
            right: '12%',

            width: 160,
            height: 160,

            border:
              '1px solid rgba(120,0,0,0.10)',

            borderRadius: '50%',
          }}
        />

        <div
          className="absolute"
          style={{
            top: '50%',
            right: '22%',

            width: 160,
            height: 1,

            background:
              'linear-gradient(to right, rgba(120,0,0,0.18), transparent)',

            animation:
              'shimmerLine 5s ease-in-out infinite',
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            top: '50%',
            right: '13%',

            width: 18,
            height: 18,

            background:
              'linear-gradient(135deg, #6f0808, #b51616)',

            boxShadow:
              '0 0 24px rgba(120,0,0,0.22)',

            animation:
              'pulseDot 2.8s ease-in-out infinite',
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="container-main relative z-[2] text-center px-4">

        {/* Premium pill */}
        <div
          ref={breadcrumbRef}
          className="mb-10 opacity-0"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full transition-all duration-500 hover:scale-[1.03]"
            style={{
              border:
                '1px solid rgba(120,0,0,0.12)',

              background:
                'rgba(255,255,255,0.62)',

              backdropFilter:
                'blur(10px)',

              boxShadow:
                '0 4px 18px rgba(120,0,0,0.04)',
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

                fontSize:
                  '0.7rem',

                letterSpacing:
                  '0.22em',

                fontWeight: 700,

                textTransform:
                  'uppercase',
              }}
            >
              KNOWLEDGE HUB
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="relative mb-10">
          <SplitText
            as="h1"
            type="lines"
            className="relative"
            style={{
              fontFamily:
                '"Georgia","Times New Roman",serif',

              fontSize:
                'clamp(3rem,7vw,6.2rem)',

              fontWeight: 700,

              lineHeight: 1.12,
              paddingBottom: '0.08em',

              color: '#140909',

              letterSpacing:
                '-0.05em',

              textShadow:
                '0 8px 24px rgba(120,0,0,0.06)',
            }}
            stagger={0.09}
            duration={1.1}
            y={36}
          >
            Knowledge Hub
          </SplitText>
        </div>

        {/* Ornament */}
        <div
          ref={ornamentRef}
          className="flex items-center justify-center gap-5 mb-8 opacity-0"
        >
          <div
            className="h-px w-16"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(120,0,0,0.35))',
            }}
          />

          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor:
                '#b51616',
            }}
          />

          <div
            className="h-px w-16"
            style={{
              background:
                'linear-gradient(to left, transparent, rgba(120,0,0,0.35))',
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mx-auto opacity-0"
          style={{
            fontFamily:
              '"Georgia", serif',

            fontStyle: 'italic',

            color:
              'rgba(26,8,8,0.52)',

            lineHeight: 1.8,

            maxWidth: '760px',

            fontSize:
              'clamp(1.05rem,2vw,1.5rem)',
          }}
        >
          Strategic intelligence for media leaders navigating the{' '}
          <span
            style={{
              background:
                'linear-gradient(90deg, #6f0808, #b51616)',

              WebkitBackgroundClip:
                'text',

              WebkitTextFillColor:
                'transparent',

              backgroundClip: 'text',

              fontStyle:
                'italic',

              fontWeight: 700,
            }}
          >
            sovereign AI era
          </span>
        </p>
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
                'rgba(120,0,0,0.42)',
            }}
          />

          <span
            style={{
              color:
                'rgba(26,8,8,0.28)',

              fontSize: '0.62rem',

              letterSpacing:
                '0.24em',

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
            height: 42,
          }}
        >
          <div
            className="w-px"
            style={{
              height: 34,

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
                'rgba(120,0,0,0.62)',
            }}
          />
        </div>
      </div>
    </section>
  )
}