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
  const sectionRef  = useRef<HTMLElement>(null)
  const imageRef    = useRef<HTMLDivElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)

  const isMobile = typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      /* Image reveal */
      gsap.fromTo(imageRef.current,
        { y: 60, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        {
          y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)',
          duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 90%', toggleActions: 'play none none none' },
        }
      )

      /* Subtle parallax on image — desktop only */
      if (!isMobile) {
        gsap.to(imageRef.current, {
          yPercent: -5, ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom', end: 'bottom top', scrub: true,
          },
        })
      }

      /* Content items stagger */
      const items = contentRef.current?.querySelectorAll('.reveal-item')
      if (items) {
        gsap.fromTo(items,
          { y: 36, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: contentRef.current, start: 'top 80%', toggleActions: 'play none none none' },
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
        background: 'linear-gradient(160deg, #0d0a0a 0%, #150d0d 55%, #0d0a0a 100%)',
        padding: 'clamp(80px, 10vw, 160px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 55% 60% at 0% 50%, rgba(160,25,25,0.12) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 40% at 100% 30%, rgba(140,20,20,0.07) 0%, transparent 60%)',
        }} />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '160px 160px',
          }}
        />
      </div>

      {/* Thin border frame (decorative) */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 24, left: 24, right: 24, bottom: 24,
          border: '1px solid rgba(255,255,255,0.04)',
          borderRadius: 2,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Image ── */}
          <div className="lg:sticky lg:top-24">
            <div
              ref={imageRef}
              className="overflow-hidden"
              style={{
                opacity: 0,
                /* thin decorative border around image */
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 6,
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <img
                src="/images/founder-portrait.jpg"
                alt="D. D. Purkayastha"
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                style={{
                  aspectRatio: '3/4',
                  display: 'block',
                  filter: 'grayscale(30%) contrast(1.05)',
                }}
              />
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div ref={contentRef}>

            {/* Label */}
            <span
              className="reveal-item block mb-4"
              style={{
                opacity: 0,
                color: 'rgba(200,60,50,0.85)',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              FOUNDER &amp; PRINCIPAL ADVISOR
            </span>

            {/* Name */}
            <h2
              className="reveal-item mb-2 leading-tight"
              style={{
                opacity: 0,
                color: '#fff',
                fontFamily: '"Georgia", "Times New Roman", serif',
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
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
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.82rem',
                letterSpacing: '0.04em',
              }}
            >
              Global Media Leader &nbsp;·&nbsp; Author &nbsp;·&nbsp; Board-Level Strategist
            </p>

            {/* Counter */}
            <div className="reveal-item mb-8" style={{ opacity: 0 }}>
              <span
                className="block leading-none font-bold"
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: 'clamp(2.8rem, 6vw, 4rem)',
                  background: 'linear-gradient(135deg, #e03030 0%, #e06040 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <AnimatedCounter end={40} suffix="+" duration={2.5} />
              </span>
              <span
                style={{
                  display: 'block',
                  marginTop: 6,
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                Years in Media Leadership
              </span>
            </div>

            {/* Body */}
            <p
              className="reveal-item mb-8"
              style={{
                opacity: 0,
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.83rem',
                lineHeight: 1.8,
                maxWidth: 520,
              }}
            >
              With over four decades of leadership in the media industry, D. D. Purkayastha brings deep,
              institutional knowledge at the intersection of media, technology, and business transformation.
              As the former Managing Director &amp; CEO of the ABP Group, he led one of India's most influential
              media organizations through multiple phases of evolution — across print, broadcast, and digital.
              Having worked at the highest levels, he understands:
            </p>

            {/* Numbered list */}
            <div className="flex flex-col gap-3 mb-10">
              {understandings.map((item, i) => (
                <div
                  key={i}
                  className="reveal-item group flex items-start gap-5"
                  style={{ opacity: 0 }}
                >
                  <span
                    className="shrink-0 font-medium transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      color: 'rgba(200,60,50,0.8)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.06em',
                      minWidth: 24,
                      paddingTop: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', lineHeight: 1.6 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Blockquote */}
            <blockquote
              className="reveal-item"
              style={{
                opacity: 0,
                borderLeft: '3px solid rgba(200,40,40,0.7)',
                paddingLeft: 24,
                margin: 0,
              }}
            >
              <p
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: '"Georgia", serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: 1.5,
                }}
              >
                "We don't just advise transformation. We've led it."
              </p>
            </blockquote>

          </div>
        </div>
      </div>
    </section>
  )
}