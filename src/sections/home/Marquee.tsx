'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const marqueeText = 'SOVEREIGN AI — MEDIA TRANSFORMATION — OPERATIONAL EXCELLENCE — PRIVATE INTELLIGENCE — BOARD-LEVEL STRATEGY — '

export default function Marquee() {
  const track1Ref  = useRef<HTMLDivElement>(null)
  const track2Ref  = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const isMobile = typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)

  useEffect(() => {
    if (!track1Ref.current || !track2Ref.current || !sectionRef.current) return

    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', toggleActions: 'play none none none' },
      }
    )

    if (isMobile) {
      return () => {
        ScrollTrigger.getAll().forEach(t => { if (t.trigger === sectionRef.current) t.kill() })
      }
    }

    gsap.to(track1Ref.current, { xPercent: -50, ease: 'none', duration: 30, repeat: -1 })
    gsap.to(track2Ref.current, { xPercent: 50,  ease: 'none', duration: 25, repeat: -1 })

    return () => {
      ScrollTrigger.getAll().forEach(t => { if (t.trigger === sectionRef.current) t.kill() })
    }
  }, [isMobile])

  const renderTrack = (accent: boolean = false) => (
    <>
      <span
        className="font-serif whitespace-nowrap select-none"
        style={{
          fontSize: 'clamp(40px, 7vw, 88px)',
          fontWeight: 700,
          color: accent ? 'rgba(200,45,35,0.85)' : 'rgba(200,195,190,0.32)',
          letterSpacing: '0.04em',
          fontFamily: '"Georgia", "Times New Roman", serif',
          fontStyle: accent ? 'italic' : 'normal',
        }}
      >
        {marqueeText}
      </span>
      <span
        className="font-serif whitespace-nowrap select-none"
        style={{
          fontSize: 'clamp(40px, 7vw, 88px)',
          fontWeight: 700,
          color: accent ? 'rgba(200,45,35,0.85)' : 'rgba(200,195,190,0.32)',
          letterSpacing: '0.04em',
          fontFamily: '"Georgia", "Times New Roman", serif',
          fontStyle: accent ? 'italic' : 'normal',
        }}
      >
        {marqueeText}
      </span>
    </>
  )

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden opacity-0 relative"
      style={{
        background: 'linear-gradient(180deg, #0a0808 0%, #110c0c 50%, #0a0808 100%)',
        padding: 'clamp(32px, 5vw, 64px) 0',
        borderTop:    '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(150,20,20,0.07) 0%, transparent 65%)',
        }} />
      </div>

      {/* Track 1 — scrolls left, ghost white */}
      <div
        ref={track1Ref}
        className="flex whitespace-nowrap mb-3 relative z-10"
        style={{
          width: 'max-content',
          animation: isMobile ? 'marqueeLeft 30s linear infinite' : undefined,
        }}
      >
        {renderTrack(false)}
      </div>

      {/* Track 2 — scrolls right, red accent */}
      <div
        ref={track2Ref}
        className="flex whitespace-nowrap relative z-10"
        style={{
          width: 'max-content',
          transform: 'translateX(-50%)',
          animation: isMobile ? 'marqueeRight 25s linear infinite' : undefined,
        }}
      >
        {renderTrack(true)}
      </div>

      {isMobile && (
        <style>{`
          @keyframes marqueeLeft {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeRight {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      )}
    </section>
  )
}