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
          opacity: 1, scale: 1, duration: 2, ease: 'power2.out',
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
        // Deep Reddish Black Ombre Background
        background: 'linear-gradient(95deg, #0a0a0a 0%, #0d0d0d 45%, #2a0505 100%)',
        padding: 'clamp(100px, 12vw, 200px) 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.03)',
      }}
    >
      {/* Texture: Subtle Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '160px 160px',
      }} />

      {/* Texture: Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Atmospheric Right-Side Glow (Matching the image style) */}
      <div ref={glowRef} className="absolute pointer-events-none opacity-0" style={{
        top: '0', right: '-10%',
        width: '60vw', height: '100%',
        background: 'radial-gradient(circle at center, rgba(160,20,20,0.08) 0%, transparent 75%)',
        filter: 'blur(60px)',
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
          borderTop:    i < 2  ? '1px solid rgba(200,40,30,0.25)' : undefined,
          borderBottom: i >= 2 ? '1px solid rgba(200,40,30,0.25)' : undefined,
          borderLeft:   i % 2 === 0 ? '1px solid rgba(200,40,30,0.25)' : undefined,
          borderRight:  i % 2 === 1 ? '1px solid rgba(200,40,30,0.25)' : undefined,
        }} />
      ))}

      <div className="container-main max-w-[700px] text-center relative z-[2]">

        {/* Label pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{
          border: '1px solid rgba(200,40,30,0.2)',
          background: 'rgba(200,40,30,0.05)',
          backdropFilter: 'blur(10px)',
        }}>
          <Zap style={{ width: 12, height: 12, color: 'rgba(210,60,45,0.85)' }} />
          <span style={{ color: 'rgba(210,60,45,0.85)', fontSize: '0.62rem', letterSpacing: '0.2em', fontWeight: 700 }}>
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
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #cc3333 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Begin the Conversation
        </SplitText>

        {/* Divider ornament */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div style={{ width: 28, height: 1, background: 'linear-gradient(to right, transparent, rgba(200,40,30,0.4))' }} />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(200,50,40,0.6)" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <div style={{ width: 28, height: 1, background: 'linear-gradient(to left, transparent, rgba(200,40,30,0.4))' }} />
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
            color: 'rgba(255,255,255,0.45)',
            fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
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
                background: 'linear-gradient(135deg, #b31d1d, #d13d1d)',
                color: '#fff',
                padding: '18px 46px',
                borderRadius: '999px',
                fontSize: '0.75rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = '0 12px 40px rgba(180,20,20,0.45)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Shine sweep */}
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out"
                style={{ 
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', 
                  pointerEvents: 'none' 
                }}
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