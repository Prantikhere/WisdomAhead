import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'

gsap.registerPlugin(ScrollTrigger)

export default function FirmStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 70,
          scale: 0.96,
          clipPath: 'inset(0 100% 0 0)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 82%',
          },
        }
      )

      // Floating parallax
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

      // Content reveal
      const items =
        contentRef.current?.querySelectorAll(
          '.reveal-item'
        )

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
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
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
          'clamp(100px, 12vw, 200px) 0',

        background:
          'linear-gradient(145deg, #f3f0ea 0%, #efebe5 38%, #f5f2ed 72%, #f3f0ea 100%)',
      }}
    >
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Main cinematic glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: '-16%',
            right: '-8%',

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
            left: '-10%',

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
        {[...Array(30)].map((_, i) => (
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

        {/* Editorial dots */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(120,0,0,0.42) 1px, transparent 1px)',

            backgroundSize:
              '36px 36px',
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
      </div>

      <div className="container-main relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* CONTENT */}
          <div
            ref={contentRef}
            className="space-y-8"
          >
            {/* Premium pill */}
            <div className="reveal-item opacity-0">
              <div
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full transition-all duration-500 hover:scale-[1.03]"
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

                    borderRadius:
                      '50%',

                    background:
                      'linear-gradient(135deg, #4d0202 0%, #8f1111 100%)',

                    display:
                      'inline-block',

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
                  Our Story
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full blur-2xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(120,0,0,0.08), transparent)',
                }}
              />

              <SplitText
                as="h2"
                type="lines"
                className="relative max-w-[580px]"
                style={{
                  fontFamily:
                    '"Georgia","Times New Roman",serif',

                  fontSize:
                    'clamp(2rem, 4vw, 3.4rem)',

                  fontWeight: 700,

                  lineHeight: 1.08,

                  letterSpacing:
                    '-0.03em',

                  color:
                    '#1a0a0a',
                }}
                stagger={0.08}
                duration={1}
                y={36}
              >
                Built on the Frontlines of Media Transformation
              </SplitText>
            </div>

            {/* Body */}
            <div className="space-y-6">
              {[
                "Wisdomahead was founded on a singular observation: the world's most influential media organizations were struggling not with content, but with the systems behind it. Decades of institutional knowledge sat trapped in legacy workflows.",

                'AI promised transformation, but public, cloud-dependent solutions posed unacceptable risks to proprietary data and competitive advantage. We set out to change that, combining four decades of C-suite media leadership with deep expertise in sovereign AI architecture.',

                "We don't implement off-the-shelf software. We design intelligent operational systems that are private, secure, and purpose-built for the unique demands of media enterprises who understand that operational excellence is the foundation of editorial excellence.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="reveal-item opacity-0 max-w-[560px]"
                  style={{
                    color:
                      'rgba(30,8,8,0.54)',

                    fontSize:
                      '0.95rem',

                    lineHeight:
                      1.9,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                {
                  value: '40+',
                  label:
                    'Years Media Leadership',
                },

                {
                  value: '100%',
                  label:
                    'Data Sovereignty',
                },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="reveal-item opacity-0 group rounded-[28px] relative overflow-hidden"
                  style={{
                    padding:
                      '30px 24px',

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
                      'translateY(-6px)'

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

                  <div
                    style={{
                      fontFamily:
                        '"Georgia",serif',

                      fontSize:
                        'clamp(1.9rem, 4vw, 2.6rem)',

                      fontWeight: 700,

                      background:
                        'linear-gradient(135deg, #2a0000 0%, #7a0707 48%, #b51616 100%)',

                      WebkitBackgroundClip:
                        'text',

                      WebkitTextFillColor:
                        'transparent',

                      backgroundClip:
                        'text',

                      marginBottom:
                        '0.5rem',

                      animation:
                        'floatCounter 4s ease-in-out infinite',

                      animationDelay: `${i}s`,
                    }}
                  >
                    {stat.value}
                  </div>

                  <div
                    style={{
                      color:
                        'rgba(30,8,8,0.42)',

                      fontSize:
                        '0.72rem',

                      letterSpacing:
                        '0.18em',

                      fontWeight: 700,

                      textTransform:
                        'uppercase',

                      lineHeight: 1.6,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div
            ref={imageRef}
            className="opacity-0 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="relative">

              {/* Floating frame */}
              <div
                className="absolute -top-7 -right-7 w-28 h-28 rounded-[30px]"
                style={{
                  border:
                    '1px solid rgba(120,0,0,0.12)',

                  animation:
                    'nodeFloat 7s ease-in-out infinite',
                }}
              />

              {/* Secondary glow */}
              <div
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-[28px]"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(120,0,0,0.06), transparent)',

                  animation:
                    'nodeFloatReverse 6s ease-in-out infinite',
                }}
              />

              {/* Image wrapper */}
              <div
                className="overflow-hidden rounded-[34px] group relative"
                style={{
                  boxShadow:
                    '0 35px 100px rgba(70,0,0,0.08)',

                  border:
                    '1px solid rgba(120,0,0,0.08)',
                }}
              >
                {/* Glow line */}
                <div
                  className="absolute top-0 left-0 w-full h-px z-10"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(120,0,0,0.75), transparent)',
                  }}
                />

                <img
                  src="/images/media-operations.jpg"
                  alt="Modern media operations center"
                  className="w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  style={{
                    aspectRatio:
                      '3/4',

                    filter:
                      'contrast(1.03) saturate(0.96)',
                  }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(243,240,234,0.14) 0%, transparent 55%)',
                  }}
                />
              </div>
            </div>
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

        @keyframes nodeFloat {
          0%,100% {
            transform: translateY(0px) rotate(12deg);
          }

          50% {
            transform: translateY(-10px) rotate(15deg);
          }
        }

        @keyframes nodeFloatReverse {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
  )
}