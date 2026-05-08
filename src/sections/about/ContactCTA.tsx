import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router'
import SplitText from '@/components/SplitText'
import MagneticButton from '@/components/MagneticButton'
import { Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const btnRef     = useRef<HTMLDivElement>(null)
  const glowRef    = useRef<HTMLDivElement>(null)
  const navigate   = useNavigate()

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(glowRef.current,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
      gsap.fromTo(btnRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, delay: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/#contact')
    setTimeout(() => {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(160deg, #080606 0%, #110a0a 55%, #080606 100%)',
        padding: 'clamp(100px, 12vw, 200px) 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '160px 160px',
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />

      {/* Radial glow behind content */}
      <div ref={glowRef} className="absolute pointer-events-none opacity-0" style={{
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70vw', height: '50vh', maxWidth: 900,
        background: 'radial-gradient(ellipse, rgba(180,25,25,0.10) 0%, transparent 65%)',
        filter: 'blur(40px)',
      }} />

      {/* Corner accents */}
      {([
        { top: 24, left: 24 },
        { top: 24, right: 24 },
        { bottom: 24, left: 24 },
        { bottom: 24, right: 24 },
      ] as React.CSSProperties[]).map((pos, i) => (
        <div key={i} className="absolute pointer-events-none" style={{
          ...pos, width: 18, height: 18,
          borderTop:    i < 2  ? '1px solid rgba(200,40,30,0.3)' : undefined,
          borderBottom: i >= 2 ? '1px solid rgba(200,40,30,0.3)' : undefined,
          borderLeft:   i % 2 === 0 ? '1px solid rgba(200,40,30,0.3)' : undefined,
          borderRight:  i % 2 === 1 ? '1px solid rgba(200,40,30,0.3)' : undefined,
        }} />
      ))}

      <div className="container-main max-w-[700px] text-center relative z-[2]">

        {/* Label pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{
          border: '1px solid rgba(200,40,30,0.3)',
          background: 'rgba(200,40,30,0.07)',
          backdropFilter: 'blur(10px)',
        }}>
          <Zap style={{ width: 12, height: 12, color: 'rgba(210,60,45,0.9)' }} />
          <span style={{ color: 'rgba(210,60,45,0.9)', fontSize: '0.62rem', letterSpacing: '0.2em', fontWeight: 700 }}>
            LET'S TALK
          </span>
        </div>

        {/* Heading */}
        <SplitText
          as="h2"
          type="lines"
          className="mb-5"
          stagger={0.08}
          duration={0.9}
          y={40}
          style={{
            fontFamily: '"Georgia","Times New Roman",serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #e03030 0%, #e06040 60%, rgba(255,255,255,0.85) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Begin the Conversation
        </SplitText>

        {/* Divider ornament */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div style={{ width: 28, height: 1, background: 'linear-gradient(to right, transparent, rgba(200,40,30,0.5))' }} />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(200,50,40,0.7)" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <div style={{ width: 28, height: 1, background: 'linear-gradient(to left, transparent, rgba(200,40,30,0.5))' }} />
        </div>

        {/* Subtext */}
        <SplitText
          as="p"
          type="lines"
          className="max-w-[520px] mx-auto mb-12"
          stagger={0.06}
          duration={0.7}
          y={30}
          delay={0.2}
          style={{
            fontFamily: '"Georgia",serif',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.38)',
            fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
            lineHeight: 1.8,
          }}
        >
          We partner with a select group of media executives who are ready to transform their organizations. If that's you, we'd welcome the conversation.
        </SplitText>

        {/* CTA button */}
        <div ref={btnRef} className="opacity-0">
          <MagneticButton strength={0.4}>
            <a
              href="/#contact"
              onClick={handleClick}
              className="group inline-flex items-center gap-3 font-semibold relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #cc2828, #d94a2a)',
                color: '#fff',
                padding: '14px 36px',
                borderRadius: 3,
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 10px 36px rgba(200,40,40,0.4)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Shine sweep */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)', pointerEvents: 'none' }}
              />
              <Zap className="relative z-10 transition-transform duration-300 group-hover:scale-110" style={{ width: 14, height: 14 }} strokeWidth={2.5} />
              <span className="relative z-10">Request a Consultation</span>
              <svg
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                style={{ width: 13, height: 13 }}
                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </MagneticButton>
        </div>

      </div>
    </section>
  )
}