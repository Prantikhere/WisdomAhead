import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextShimmer from '@/components/TextShimmer'

gsap.registerPlugin(ScrollTrigger)

export default function WisdomDifference() {
  const sectionRef = useRef<HTMLElement>(null)
  const displayRef = useRef<HTMLDivElement>(null)
  const supportRef = useRef<HTMLParagraphElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)

  const isMobile = typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const chars = displayRef.current?.querySelectorAll('.char')
      if (chars && chars.length > 0) {
        if (isMobile) {
          // On mobile: simple fade-in instead of char-by-char for performance
          gsap.fromTo(displayRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: displayRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          )
        } else {
          // Desktop: character-by-character animation
          gsap.fromTo(chars,
            { opacity: 0, y: 20 },
            {
              opacity: 1, y: 0,
              duration: 0.04,
              stagger: 0.035,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: displayRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
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

  const renderChars = (text: string, isAccent: boolean = false) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className={`char inline-block ${isMobile ? '' : 'opacity-0'}`}
        style={{
          color: isAccent ? 'var(--accent-red)' : undefined,
          transformOrigin: 'center bottom',
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#fafafa', padding: 'clamp(140px, 20vw, 300px) 0' }}
    >
      <div className="container-main max-w-[900px] text-center relative z-[2]">
        <span className="text-label block mb-10" style={{ color: 'var(--accent-red)' }}>
          THE WISDOM DIFFERENCE
        </span>

        <div ref={displayRef} className="text-display-l text-black mb-10" style={{ perspective: '1000px' }}>
          <div>{renderChars('Board-Level')}</div>
          <div>
            <TextShimmer className="text-display-l" style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              AI
            </TextShimmer>
          </div>
          <div>{renderChars('Strategy')}</div>
        </div>

        <p ref={supportRef} className="text-h2 text-black mb-6 opacity-0">
          We don't sell software. We advise leadership.
        </p>

        <p ref={bodyRef} className="text-body-l max-w-[560px] mx-auto opacity-0" style={{ color: 'var(--text-secondary)' }}>
          Our approach is rooted in real-world media experience—focused on building resilient, autonomous, and future-ready organizations.
        </p>
      </div>
    </section>
  )
}
