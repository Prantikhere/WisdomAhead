'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import MeshGradientRain from '@/components/MeshGradientRain'
import MagneticButton from '@/components/MagneticButton'
import { Sparkles, Zap, Brain } from 'lucide-react'

export default function Hero() {
  const labelRef   = useRef<HTMLDivElement>(null)
  const line1Ref   = useRef<HTMLDivElement>(null)
  const line2Ref   = useRef<HTMLDivElement>(null)
  const subRef     = useRef<HTMLParagraphElement>(null)
  const ctaRef     = useRef<HTMLDivElement>(null)
  const scrollRef  = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const decorRef   = useRef<HTMLDivElement>(null)
  const frameRef   = useRef<HTMLDivElement>(null)

  const isMobile = typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    tl.fromTo(frameRef.current,  { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' })
    tl.fromTo(labelRef.current,  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.8')
    tl.fromTo(line1Ref.current,  { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1,   ease: 'power3.out' }, '-=0.3')
    tl.fromTo(line2Ref.current,  { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1,   ease: 'power3.out' }, '-=0.7')
    tl.fromTo(subRef.current,    { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.6')
    tl.fromTo(ctaRef.current,    { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    tl.fromTo(decorRef.current,  { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out' }, '-=0.8')
    tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2')

    return () => { tl.kill() }
  }, [])

  useEffect(() => {
    if (isMobile) return

    const onScroll = () => {
      if (!scrollRef.current || !sectionRef.current) return
      const scrollY = window.scrollY
      scrollRef.current.style.opacity = String(Math.max(0, 1 - scrollY / 150))
      const content = sectionRef.current.querySelector('.hero-content') as HTMLElement
      if (content) content.style.transform = `translateY(${scrollY * 0.15}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] md:min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #080606 0%, #110a0a 55%, #080606 100%)' }}
    >
      {/* MeshGradientRain kept — rendered on top of dark bg */}
      <MeshGradientRain opacity={0.25} mouseReactive={true} />

      {/* ── ATMOSPHERE LAYERS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large left glow */}
        <div style={{
          position: 'absolute',
          top: '10%', left: '-10%',
          width: '55vw', height: '55vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,25,25,0.13) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        {/* Bottom-right glow */}
        <div style={{
          position: 'absolute',
          bottom: '0%', right: '-5%',
          width: '45vw', height: '45vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,50,30,0.08) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '160px 160px',
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Falling red particles */}
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: '-8px',
              width: i % 3 === 0 ? 2 : 1,
              height: i % 3 === 0 ? 2 : 1,
              background: 'rgba(200,45,35,0.5)',
              animation: `fall ${3.5 + (i * 0.37) % 3.5}s linear infinite`,
              animationDelay: `${(i * 0.41) % 5}s`,
            }}
          />
        ))}
        <style>{`
          @keyframes fall { to { transform: translateY(calc(100vh + 20px)); } }
          @keyframes gradientShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
          @keyframes scrollLine {
            0%   { transform: scaleY(0); transform-origin: top; }
            50%  { transform: scaleY(1); transform-origin: top; }
            50.1%{ transform-origin: bottom; }
            100% { transform: scaleY(0); transform-origin: bottom; }
          }
          @keyframes nodeFloat {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-6px); }
          }
          @keyframes shimmerLine {
            0%   { opacity: 0.15; }
            50%  { opacity: 0.45; }
            100% { opacity: 0.15; }
          }
        `}</style>
      </div>

      {/* ── THIN DECORATIVE FRAME ── */}
      <div
        ref={frameRef}
        className="absolute pointer-events-none opacity-0"
        style={{
          top: 20, left: 20, right: 20, bottom: 20,
          border: '1px solid rgba(255,255,255,0.04)',
          borderRadius: 2,
        }}
      />
      {/* Corner accents */}
      {[
        { top: 20, left: 20 },
        { top: 20, right: 20 },
        { bottom: 20, left: 20 },
        { bottom: 20, right: 20 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute pointer-events-none opacity-0"
          ref={i === 0 ? frameRef : undefined}
          style={{
            ...pos,
            width: 20, height: 20,
            borderTop:    i < 2 ? '1px solid rgba(200,40,30,0.4)' : undefined,
            borderBottom: i >= 2 ? '1px solid rgba(200,40,30,0.4)' : undefined,
            borderLeft:   i % 2 === 0 ? '1px solid rgba(200,40,30,0.4)' : undefined,
            borderRight:  i % 2 === 1 ? '1px solid rgba(200,40,30,0.4)' : undefined,
          }}
        />
      ))}

      {/* ── HERO CONTENT ── */}
      <div
        className="hero-content relative z-[2] w-full will-change-transform grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
        style={{ padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)' }}
      >
        {/* LEFT */}
        <div className="lg:col-span-7">

          {/* Label pill */}
          <div ref={labelRef} className="mb-6 lg:mb-10 opacity-0">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                border: '1px solid rgba(200,40,30,0.3)',
                background: 'rgba(200,40,30,0.07)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Sparkles style={{ width: 13, height: 13, color: 'rgba(210,60,45,0.9)' }} />
              <span style={{ color: 'rgba(210,60,45,0.9)', fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 600 }}>
                SOVEREIGN AI ADVISORY
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8 lg:mb-14" style={{ maxWidth: 720 }}>
            <div ref={line1Ref} className="opacity-0">
              <span
                style={{
                  display: 'block',
                  fontFamily: '"Georgia", "Times New Roman", serif',
                  fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  background: 'linear-gradient(135deg, #e03030 0%, #e06040 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Operational Excellence
              </span>
            </div>
            <div ref={line2Ref} className="opacity-0 flex flex-wrap items-baseline gap-x-3">
              <em
                style={{
                  fontFamily: '"Georgia", serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.35)',
                  lineHeight: 1.05,
                }}
              >
                Through
              </em>
              <span
                style={{
                  fontFamily: '"Georgia", serif',
                  fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: '#fff',
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
              color: 'rgba(255,255,255,0.45)',
              fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)',
              lineHeight: 1.8,
              maxWidth: 480,
            }}
          >
            We architect secure, private AI systems that transform internal operations — making media organizations faster, leaner, and more intelligent.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="opacity-0">
            <MagneticButton strength={0.5}>
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
                  padding: '14px 32px',
                  borderRadius: 3,
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
                <Zap className="relative z-10 transition-transform duration-300 group-hover:scale-110" style={{ width: 15, height: 15 }} strokeWidth={2.5} />
                <span className="relative z-10">Request a Consultation</span>
                <svg
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ width: 14, height: 14 }}
                  fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </MagneticButton>
          </div>

        </div>

        {/* ── RIGHT: Decorative visualization ── */}
        <div ref={decorRef} className="lg:col-span-5 flex items-center justify-center opacity-0 relative">
          <div className="relative w-full" style={{ height: window.innerWidth < 768 ? 260 : 520 }}>

            {/* Outer ring */}
            <div
              className="absolute"
              style={{
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: window.innerWidth < 768 ? 180 : 380,
height: window.innerWidth < 768 ? 180 : 380,
                border: '1px solid rgba(200,40,30,0.12)',
                borderRadius: '50%',
                animation: 'nodeFloat 7s ease-in-out infinite',
              }}
            />
            {/* Middle ring */}
            <div
              className="absolute"
              style={{
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 260, height: 260,
                border: '1px solid rgba(200,40,30,0.18)',
                borderRadius: '50%',
                animation: 'nodeFloat 5s ease-in-out infinite',
                animationDelay: '1s',
              }}
            />
            {/* Inner fill */}
            <div
              className="absolute"
              style={{
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 140, height: 140,
                background: 'radial-gradient(circle, rgba(200,40,30,0.18) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(12px)',
                animation: 'nodeFloat 4s ease-in-out infinite',
                animationDelay: '0.5s',
              }}
            />

            {/* Rotating diamond */}
            <div
              className="absolute"
              style={{
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%) rotate(45deg)',
                width: 180, height: 180,
                border: '1px solid rgba(220,60,40,0.2)',
                animation: 'nodeFloat 6s ease-in-out infinite',
                animationDelay: '2s',
              }}
            />

            {/* Neural network SVG */}
            <div
              className="absolute"
              style={{
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 320, height: 320,
              }}
            >
              <svg viewBox="0 0 320 320" className="w-full h-full">
                <defs>
                  <linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(220,50,35,0.9)" />
                    <stop offset="100%" stopColor="rgba(220,85,55,0.5)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Connection lines */}
                {[
                  [80, 80, 160, 160], [240, 80, 160, 160],
                  [80, 240, 160, 160], [240, 240, 160, 160],
                  [80, 80, 240, 80],  [80, 240, 240, 240],
                  [80, 80, 80, 240],  [240, 80, 240, 240],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="url(#ng)"
                    strokeWidth="0.8"
                    style={{ animation: 'shimmerLine 2.5s ease-in-out infinite', animationDelay: `${i * 0.28}s` }}
                  />
                ))}

                {/* Outer nodes */}
                {[[80,80],[240,80],[80,240],[240,240]].map(([cx,cy], i) => (
                  <circle
                    key={i} cx={cx} cy={cy} r="4"
                    fill="url(#ng)" filter="url(#glow)"
                    style={{ animation: `nodeFloat ${4 + i * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}
                  />
                ))}

                {/* Centre node */}
                <circle cx="160" cy="160" r="7" fill="rgba(210,45,30,0.95)" filter="url(#glow)"
                  style={{ animation: 'nodeFloat 3.5s ease-in-out infinite' }}
                />
                <circle cx="160" cy="160" r="14" fill="none" stroke="rgba(210,45,30,0.2)" strokeWidth="1"
                  style={{ animation: 'nodeFloat 3.5s ease-in-out infinite' }}
                />
              </svg>
            </div>

            {/* Data stream bars */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  bottom: 48, left: 48 + i * 14,
                  width: 2,
                  height: [56, 40, 28][i],
                  background: `linear-gradient(to top, rgba(200,${40 + i * 20},30,0.6), transparent)`,
                  animation: `nodeFloat ${3 + i * 0.7}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${18 + i * 11}%`,
                  top:  `${28 + (i % 3) * 18}%`,
                  width: 3, height: 3,
                  background: 'rgba(200,45,35,0.5)',
                  animation: `nodeFloat ${3.5 + i * 0.45}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}

          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 opacity-0"
      >
        <div className="flex items-center gap-2">
          <Brain style={{ width: 12, height: 12, color: 'rgba(200,50,40,0.7)' }} />
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.6rem', letterSpacing: '0.22em', fontWeight: 600, textTransform: 'uppercase' }}>
            Scroll to Explore
          </span>
        </div>
        <div className="relative flex flex-col items-center" style={{ height: 44 }}>
          <div
            className="w-px"
            style={{
              height: 36,
              background: 'linear-gradient(to bottom, rgba(200,45,35,0.7), transparent)',
              animation: 'scrollLine 2s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-0 w-1.5 h-1.5 rounded-full"
            style={{ background: 'rgba(200,45,35,0.8)' }}
          />
        </div>
      </div>

    </section>
  )
}