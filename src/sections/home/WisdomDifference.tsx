'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextShimmer from '@/components/TextShimmer'

gsap.registerPlugin(ScrollTrigger)

export default function WisdomDifference() {
  const sectionRef = useRef<HTMLElement>(null)
  const displayRef = useRef<HTMLDivElement>(null)
  const supportRef = useRef<HTMLParagraphElement>(null)
  const bodyRef    = useRef<HTMLParagraphElement>(null)

  const isMobile = typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const chars = displayRef.current?.querySelectorAll('.char')
      if (chars && chars.length > 0) {
        if (isMobile) {
          gsap.fromTo(displayRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: displayRef.current, start: 'top 80%', toggleActions: 'play none none none' },
            }
          )
        } else {
          gsap.fromTo(chars,
            { opacity: 0, y: 20 },
            {
              opacity: 1, y: 0, duration: 0.04, stagger: 0.035, ease: 'power2.out',
              scrollTrigger: { trigger: displayRef.current, start: 'top 80%', toggleActions: 'play none none none' },
            }
          )
        }
      }

      gsap.fromTo(supportRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, delay: isMobile ? 0.1 : 0.4, ease: 'power3.out',
          scrollTrigger: { trigger: supportRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )

      gsap.fromTo(bodyRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, delay: isMobile ? 0.2 : 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: bodyRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  const renderChars = (text: string) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className={`char inline-block ${isMobile ? '' : 'opacity-0'}`}
        style={{ transformOrigin: 'center bottom' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0a0808 0%, #130d0d 50%, #0a0808 100%)',
        padding: 'clamp(100px, 16vw, 220px) 0',
      }}
    >
      {/* Atmosphere — centered glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(150,20,20,0.1) 0%, transparent 65%)',
        }} />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '160px 160px',
          }}
        />
      </div>

      <div
        className="relative z-10 text-center mx-auto px-6"
        style={{ maxWidth: 780 }}
      >
        {/* Label */}
        <span
          className="block mb-8"
          style={{
            color: 'rgba(200,60,50,0.75)',
            fontSize: '0.62rem',
            letterSpacing: '0.26em',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          THE WISDOM DIFFERENCE
        </span>

        {/* Display heading — "Board-Level AI Strategy" on two lines */}
        <div
          ref={displayRef}
          className="mb-10 leading-tight"
          style={{ perspective: '1000px' }}
        >
          {/* Line 1: Board-Level */}
          <div
            style={{
              fontFamily: '"Georgia", "Times New Roman", serif',
              fontSize: 'clamp(2.4rem, 6.5vw, 5rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
            }}
          >
            {renderChars('Board-Level')}
          </div>

          {/* Line 2: AI Strategy — AI in red italic */}
          <div
            style={{
              fontFamily: '"Georgia", "Times New Roman", serif',
              fontSize: 'clamp(2.4rem, 6.5vw, 5rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
            }}
          >
            <TextShimmer
              className="inline"
              style={{
                fontFamily: '"Georgia", serif',
                fontSize: 'clamp(2.4rem, 6.5vw, 5rem)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: 'rgba(210,45,35,0.95)',
                lineHeight: 1.1,
                marginRight: '0.2em',
              }}
            >
              AI
            </TextShimmer>
            <span
              style={{
                fontFamily: '"Georgia", serif',
                color: '#fff',
              }}
            >
              {renderChars('Strategy')}
            </span>
          </div>
        </div>

        {/* Support line */}
        <p
          ref={supportRef}
          className="opacity-0 mb-5"
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontFamily: '"Georgia", serif',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
            lineHeight: 1.4,
          }}
        >
          We don't sell software. We advise leadership.
        </p>

        {/* Body */}
        <p
          ref={bodyRef}
          className="opacity-0 mx-auto"
          style={{
            color: 'rgba(255,255,255,0.38)',
            fontSize: 'clamp(0.8rem, 1.4vw, 0.9rem)',
            lineHeight: 1.8,
            maxWidth: 500,
          }}
        >
          Our approach is rooted in real-world media experience—focused on building resilient, autonomous, and
          future-ready organizations.
        </p>
      </div>
    </section>
  )
}