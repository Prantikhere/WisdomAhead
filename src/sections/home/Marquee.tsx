import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const marqueeText = 'SOVEREIGN AI \u2014 MEDIA TRANSFORMATION \u2014 OPERATIONAL EXCELLENCE \u2014 PRIVATE INTELLIGENCE \u2014 BOARD-LEVEL STRATEGY \u2014 '

export default function Marquee() {
  const track1Ref = useRef<HTMLDivElement>(null)
  const track2Ref = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!track1Ref.current || !track2Ref.current || !sectionRef.current) return

    // Infinite scroll for track 1 (left)
    gsap.to(track1Ref.current, {
      xPercent: -50,
      ease: 'none',
      duration: 30,
      repeat: -1,
    })

    // Infinite scroll for track 2 (right)
    gsap.to(track2Ref.current, {
      xPercent: 50,
      ease: 'none',
      duration: 25,
      repeat: -1,
    })

    // Entrance
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', toggleActions: 'play none none none' },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill()
      })
    }
  }, [])

  const renderTrack = (reverse: boolean = false) => (
    <>
      <span className={`font-serif text-[clamp(48px,8vw,100px)] font-normal whitespace-nowrap select-none ${reverse ? 'opacity-100' : 'opacity-30'}`} style={{ color: reverse ? 'var(--accent-red)' : 'var(--text-tertiary)' }}>
        {marqueeText}
      </span>
      <span className={`font-serif text-[clamp(48px,8vw,100px)] font-normal whitespace-nowrap select-none ${reverse ? 'opacity-100' : 'opacity-30'}`} style={{ color: reverse ? 'var(--accent-red)' : 'var(--text-tertiary)' }}>
        {marqueeText}
      </span>
    </>
  )

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden py-16 opacity-0"
      style={{ borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
    >
      {/* Track 1 - scrolling left */}
      <div ref={track1Ref} className="flex whitespace-nowrap mb-4" style={{ width: 'max-content' }}>
        {renderTrack()}
      </div>

      {/* Track 2 - scrolling right (reversed via CSS) */}
      <div ref={track2Ref} className="flex whitespace-nowrap" style={{ width: 'max-content', transform: 'translateX(-50%)' }}>
        {renderTrack(true)}
      </div>
    </section>
  )
}
