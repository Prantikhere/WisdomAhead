'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'
import { Rocket, Shield, Target, Database, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { icon: Rocket,   text: 'Eliminate Inefficiencies',  description: 'Reduce operational waste by 40-60%' },
  { icon: Shield,   text: 'Complete Data Sovereignty',  description: '100% private, secure AI systems'    },
  { icon: Database, text: 'Unlock Proprietary Data',    description: 'Decades of insights unlocked'       },
  { icon: Target,   text: 'Board-Level Insights',       description: 'Strategic decision intelligence'    },
]

export default function WhatWeDo() {
  const sectionRef   = useRef<HTMLElement>(null)
  const labelRef     = useRef<HTMLDivElement>(null)
  const featuresRef  = useRef<HTMLDivElement>(null)
  const bottomRef    = useRef<HTMLDivElement>(null)
  const dividerRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      /* Label pulse in */
      gsap.fromTo(labelRef.current,
        { opacity: 0, x: -12 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )

      /* Feature icon columns stagger */
      if (featuresRef.current) {
        gsap.fromTo(featuresRef.current.querySelectorAll('.feat-col'),
          { y: 28, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.75, stagger: 0.13, ease: 'power3.out',
            scrollTrigger: { trigger: featuresRef.current, start: 'top 82%', toggleActions: 'play none none none' },
          }
        )
      }

      /* Divider line draw */
      gsap.fromTo(dividerRef.current,
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.2, ease: 'power3.inOut',
          scrollTrigger: { trigger: dividerRef.current, start: 'top 88%', toggleActions: 'play none none none' },
        }
      )

      /* Bottom row pop in */
      if (bottomRef.current) {
        gsap.fromTo(bottomRef.current.querySelectorAll('.stat-block, .cta-btn'),
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.75, stagger: 0.15, ease: 'back.out(1.3)',
            scrollTrigger: { trigger: bottomRef.current, start: 'top 88%', toggleActions: 'play none none none' },
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
        background: 'linear-gradient(160deg, #0d0a0a 0%, #1a0c0c 40%, #0d0a0a 100%)',
        padding: 'clamp(64px, 9vw, 120px) 0',
      }}
    >
      {/* Atmosphere overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left red glow */}
        <div
          className="absolute"
          style={{
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(ellipse 60% 55% at 20% 50%, rgba(180,30,30,0.18) 0%, transparent 65%)',
          }}
        />
        {/* Subtle top vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 90% 40% at 50% 0%, rgba(200,40,40,0.07) 0%, transparent 70%)',
          }}
        />
        {/* Noise grain */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '160px 160px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── TOP LABEL ── */}
        <div ref={labelRef} className="flex items-center gap-2 mb-8" style={{ opacity: 0 }}>
          <span style={{ color: 'rgba(220,60,60,0.9)', fontSize: '0.72rem', letterSpacing: '0.18em', fontWeight: 600 }}>
            ✦ WHAT WE DO
          </span>
        </div>

        {/* ── HEADING + SUBTITLE ── */}
        <SplitText
          as="h2"
          type="lines"
          stagger={0.09}
          duration={1}
          y={44}
          className="font-bold text-white leading-[1.08] mb-5"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            maxWidth: '680px',
            fontFamily: '"Georgia", "Times New Roman", serif',
          }}
        >
          Operational Intelligence for Media Enterprise
        </SplitText>

        <p
          className="mb-12 leading-relaxed"
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            maxWidth: '580px',
          }}
        >
          TWe architect sovereign AI systems that redesign how media organizations operate — eliminating inefficiencies trapped in legacy workflows, unlocking decades of proprietary data, and enabling board-level decision-making with complete data sovereignty.
        </p>

        {/* ── FEATURES ROW (4 columns, icon-above-text) ── */}
        <div
          ref={featuresRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 mb-12"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="feat-col group flex flex-col gap-3"
              style={{ opacity: 0 }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  width: 36, height: 36,
                  borderRadius: 8,
                  background: 'rgba(200,40,40,0.15)',
                  border: '1px solid rgba(200,40,40,0.25)',
                }}
              >
                <feature.icon
                  style={{ width: 16, height: 16, color: 'rgba(220,80,60,0.95)' }}
                  strokeWidth={2}
                />
              </div>
              {/* Text */}
              <div>
                <h4
                  className="font-semibold leading-snug mb-1 transition-colors duration-300 group-hover:text-[rgba(220,80,60,1)]"
                  style={{ color: 'rgba(220,80,60,0.9)', fontSize: '0.82rem' }}
                >
                  {feature.text}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', lineHeight: 1.5 }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── FULL-WIDTH DIVIDER ── */}
        <div
          ref={dividerRef}
          className="mb-10 origin-left"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(180,40,40,0.4), rgba(255,255,255,0.08) 50%, transparent)',
            transformOrigin: 'left center',
          }}
        />

        {/* ── BOTTOM ROW: Stats + CTA ── */}
        <div
          ref={bottomRef}
          className="flex flex-wrap items-center gap-x-16 gap-y-6"
        >
          {/* Stat 1 */}
          <div className="stat-block flex items-baseline gap-2" style={{ opacity: 0 }}>
            <span
              className="font-bold leading-none"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                background: 'linear-gradient(135deg, #e83a3a 0%, #e8714a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: '"Georgia", serif',
              }}
            >
              40–60%
            </span>
            <TrendingUp
              style={{ width: 20, height: 20, color: 'rgba(220,80,60,0.8)', flexShrink: 0 }}
              strokeWidth={2.5}
            />
            <span
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                maxWidth: 120,
                lineHeight: 1.3,
              }}
            >
              OPERATIONAL EFFICIENCY GAINED
            </span>
          </div>

          {/* Stat 2 */}
          <div className="stat-block flex items-baseline gap-2" style={{ opacity: 0 }}>
            <span
              className="font-bold leading-none"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                background: 'linear-gradient(135deg, #e83a3a 0%, #e8714a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: '"Georgia", serif',
              }}
            >
              100%
            </span>
            <Shield
              style={{ width: 18, height: 18, color: 'rgba(220,80,60,0.8)', flexShrink: 0 }}
              strokeWidth={2.5}
            />
            <span
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                maxWidth: 120,
                lineHeight: 1.3,
              }}
            >
              DATA SOVEREIGNTY MAINTAINED
            </span>
          </div>

          {/* CTA */}
          <div className="cta-btn ml-auto" style={{ opacity: 0 }}>
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
                padding: '14px 28px',
                borderRadius: 4,
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(200,40,40,0.35)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
              }}
            >
              {/* Shine sweep */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  pointerEvents: 'none',
                }}
              />
              <span className="relative z-10">START YOUR TRANSFORMATION</span>
              <svg
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                style={{ width: 16, height: 16 }}
                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}