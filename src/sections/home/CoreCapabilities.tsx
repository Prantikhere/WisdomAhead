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
  const cardsRef   = useRef<HTMLDivElement>(null)
  const ctaRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      /* Heading fade up */
      gsap.fromTo(headingRef.current,
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )

      /* Cards stagger up */
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.querySelectorAll('.cap-card'),
          { y: 48, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.85, stagger: 0.13, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
      }

      /* CTA fade */
      gsap.fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 92%', toggleActions: 'play none none none' },
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
        background: 'linear-gradient(160deg, #0a0808 0%, #140d0d 50%, #0a0808 100%)',
        padding: 'clamp(64px, 9vw, 130px) 0',
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(160,25,25,0.12) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 40% at 0% 60%, rgba(160,25,25,0.07) 0%, transparent 60%)',
        }} />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── HEADING BLOCK ── */}
        <div ref={headingRef} className="text-center mb-14 lg:mb-20" style={{ opacity: 0 }}>

          {/* Label pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full"
            style={{
              border: '1px solid rgba(200,40,40,0.35)',
              background: 'rgba(200,40,40,0.08)',
            }}
          >
            <span style={{ color: 'rgba(220,70,50,0.9)', fontSize: '0.68rem', letterSpacing: '0.2em', fontWeight: 600 }}>
              ✦ CORE CAPABILITIES
            </span>
          </div>

          {/* Title */}
          <h2
            className="leading-tight mb-5"
            style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
          >
            <span
              className="block italic"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                background: 'linear-gradient(135deg, #e03030 0%, #e06040 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
              }}
            >
              Four Pillars
            </span>
            <span
              className="block"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                color: '#fff',
                fontWeight: 700,
              }}
            >
              of Transformation
            </span>
          </h2>

          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(0.83rem, 1.5vw, 0.97rem)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Our comprehensive approach combines strategic insight with technical excellence to deliver measurable results for media enterprises.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          {capabilities.map((cap, i) => {
            const Icon = icons[i]
            return (
              <div
                key={cap.index}
                className="cap-card group relative flex flex-col"
                style={{
                  opacity: 0,
                  padding: 'clamp(24px, 3vw, 40px)',
                  borderRight: i < capabilities.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  background: 'rgba(255,255,255,0.015)',
                  cursor: 'default',
                  transition: 'background 0.35s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(180,30,30,0.06)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.015)'
                }}
              >
                {/* Top: number + icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    style={{
                      fontFamily: '"Georgia", serif',
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #e03030, #e06040)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1,
                    }}
                  >
                    {cap.index}
                  </span>
                  <Icon
                    className="transition-all duration-300 group-hover:scale-110 group-hover:text-[rgba(220,70,50,1)]"
                    style={{ width: 18, height: 18, color: 'rgba(200,50,40,0.7)', flexShrink: 0 }}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-4 leading-snug font-bold"
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                    fontFamily: '"Georgia", serif',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {cap.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    color: 'rgba(255,255,255,0.42)',
                    fontSize: '0.8rem',
                    lineHeight: 1.75,
                    flexGrow: 1,
                  }}
                >
                  {cap.body}
                </p>

                {/* Bottom divider + details link */}
                <div className="mt-8">
                  <div
                    className="mb-4"
                    style={{
                      height: 1,
                      background: 'linear-gradient(to right, rgba(200,40,40,0.5), rgba(200,40,40,0.08))',
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                  <div
                    className="inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                    style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.68rem', letterSpacing: '0.14em', fontWeight: 600, textTransform: 'uppercase' }}
                  >
                    <span className="group-hover:text-[rgba(220,70,50,0.9)] transition-colors duration-300">DETAILS</span>
                    <ArrowRight
                      className="group-hover:text-[rgba(220,70,50,0.9)] transition-all duration-300 group-hover:translate-x-1"
                      style={{ width: 12, height: 12 }}
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div ref={ctaRef} className="text-center mt-16 lg:mt-20" style={{ opacity: 0 }}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-3 font-semibold relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #cc2828, #d94a2a)',
              color: '#fff',
              padding: '15px 36px',
              borderRadius: 4,
              fontSize: '0.75rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 36px rgba(200,40,40,0.4)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
            }}
          >
            {/* Shine sweep */}
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)', pointerEvents: 'none' }}
            />
            <span className="relative z-10">Explore Our Solutions</span>
            <Zap className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  )
}