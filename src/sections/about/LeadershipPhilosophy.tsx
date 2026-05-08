import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'

gsap.registerPlugin(ScrollTrigger)

export default function LeadershipPhilosophy() {
  const sectionRef =
    useRef<HTMLElement>(null)

  const bodyRef =
    useRef<HTMLParagraphElement>(null)

  const glowRef =
    useRef<HTMLDivElement>(null)

  const iconRef =
    useRef<HTMLDivElement>(null)

  const dividerRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Breathing glow
      gsap.fromTo(
        glowRef.current,
        {
          opacity: 0,
          scale: 0.82,
        },
        {
          opacity: 1,
          scale: 1.08,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger:
              sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      // Body text reveal
      gsap.fromTo(
        bodyRef.current,
        {
          y: 32,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          delay: 0.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger:
              bodyRef.current,
            start: 'top 88%',
          },
        }
      )

      // Floating ornament
      gsap.to(iconRef.current, {
        y: -12,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Divider animation
      gsap.fromTo(
        dividerRef.current,
        {
          scaleY: 0,
          opacity: 0,
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger:
              dividerRef.current,
            start: 'top 90%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        padding:
          'clamp(140px, 18vw, 280px) 0',

        background:
          'linear-gradient(145deg, #f3f0ea 0%, #efebe5 38%, #f5f2ed 72%, #f3f0ea 100%)',
      }}
    >
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Main cinematic glow */}
        <div
          ref={glowRef}
          className="absolute rounded-full"
          style={{
            top: '45%',
            left: '50%',

            transform:
              'translate(-50%, -50%)',

            width: '60vw',
            height: '40vh',

            background:
              'radial-gradient(circle, rgba(120,0,0,0.07) 0%, transparent 70%)',

            filter: 'blur(90px)',
          }}
        />

        {/* Secondary luxury glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: '-18%',
            right: '-10%',

            width: '40vw',
            height: '40vw',

            background:
              'radial-gradient(circle, rgba(180,20,20,0.04) 0%, transparent 70%)',

            filter: 'blur(70px)',

            animation:
              'orbFloat 18s ease-in-out infinite alternate',
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

        {/* Editorial texture */}
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
      </div>

      <div className="container-main max-w-[980px] text-center relative z-[10]">

        {/* PREMIUM PILL */}
        <div
          className="group inline-flex items-center gap-3 px-6 py-2.5 rounded-full mb-14 transition-all duration-500 hover:scale-[1.03]"
          style={{
            border:
              '1px solid rgba(120,0,0,0.14)',

            background:
              'rgba(255,255,255,0.65)',

            backdropFilter:
              'blur(14px)',

            boxShadow:
              '0 10px 40px rgba(120,0,0,0.05)',
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
                '#1a0a0a',

              fontSize:
                '0.7rem',

              letterSpacing:
                '0.28em',

              fontWeight: 800,

              textTransform:
                'uppercase',
            }}
          >
            Leadership Philosophy
          </span>
        </div>

        {/* HEADINGS */}
        <div className="mb-16 relative">

          {/* Ambient accent */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(120,0,0,0.05), transparent 70%)',

              filter: 'blur(40px)',
            }}
          />

          <SplitText
            as="h2"
            type="words"
            stagger={0.03}
            style={{
              fontFamily:
                '"Georgia", serif',

              fontSize:
                'clamp(2.6rem, 6.5vw, 5rem)',

              fontWeight: 700,

              lineHeight: 1.05,

              color: '#1a0a0a',

              letterSpacing:
                '-0.04em',
            }}
          >
            We don&apos;t sell software.
          </SplitText>

          <SplitText
            as="h2"
            type="words"
            stagger={0.03}
            y={30}
            duration={1.2}
            style={{
              fontFamily:
                '"Georgia", serif',

              fontSize:
                'clamp(2.6rem, 6.5vw, 5rem)',

              fontWeight: 700,

              lineHeight: 1.05,

              background:
                'linear-gradient(90deg, #2a0000 0%, #7a0707 48%, #b51616 100%)',

              WebkitBackgroundClip:
                'text',

              WebkitTextFillColor:
                'transparent',

              backgroundClip:
                'text',

              letterSpacing:
                '-0.04em',

              filter:
                'drop-shadow(0 8px 24px rgba(120,0,0,0.08))',
            }}
          >
            We architect change.
          </SplitText>
        </div>

        {/* DIVIDER */}
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center gap-4">
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
        </div>

        {/* BODY */}
        <div className="relative inline-block max-w-[720px]">
          <p
            ref={bodyRef}
            className="opacity-0 italic leading-relaxed"
            style={{
              fontFamily:
                '"Georgia", serif',

              color:
                'rgba(26,8,8,0.58)',

              fontSize:
                'clamp(1.08rem, 2vw, 1.4rem)',

              lineHeight: 1.9,
            }}
          >
            "True transformation
            doesn&apos;t come from tools.
            It comes from the{' '}
            <span
              style={{
                color:
                  '#7a0707',

                fontStyle:
                  'normal',

                fontWeight:
                  700,
              }}
            >
              strategic clarity
            </span>{' '}
            to know what should
            change, the operational
            wisdom to know how, and
            the courage to lead the
            transition."
          </p>
        </div>

        {/* FOOTER ORNAMENT */}
        <div className="flex flex-col items-center mt-28">
          <div
            ref={iconRef}
            className="p-4"
          >
            <svg
              className="w-9 h-9"
              style={{
                color:
                  'rgba(120,0,0,0.42)',
              }}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21l-8.25-18.75L12 15.75l8.25-13.5L12 21z"
              />
            </svg>
          </div>

          <div
            ref={dividerRef}
            className="origin-top"
          >
            <div
              className="h-24 w-px mt-4"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(120,0,0,0.35), transparent)',
              }}
            />
          </div>
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
      `}</style>
    </section>
  )
}