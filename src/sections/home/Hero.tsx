import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import MeshGradientRain from '@/components/MeshGradientRain'
import MagneticButton from '@/components/MagneticButton'

export default function Hero() {
  const labelRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    tl.fromTo(labelRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
    tl.fromTo(line1Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.3')
    tl.fromTo(line2Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.7')
    tl.fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.6')
    tl.fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.2')

    return () => { tl.kill() }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!scrollRef.current || !sectionRef.current) return
      const scrollY = window.scrollY
      scrollRef.current.style.opacity = String(Math.max(0, 1 - scrollY / 150))
      // Parallax the text upward
      const content = sectionRef.current.querySelector('.hero-content') as HTMLElement
      if (content) {
        content.style.transform = `translateY(${scrollY * 0.15}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <MeshGradientRain opacity={0.45} mouseReactive={true} />

      <div className="hero-content container-main relative z-[2] w-full pt-24 pb-20 will-change-transform">
        <div ref={labelRef} className="mb-6 opacity-0">
          <span className="text-label inline-block px-3 py-1.5 border" style={{ color: 'var(--accent-red)', borderColor: 'rgba(200,50,50,0.25)', letterSpacing: '0.15em' }}>
            SOVEREIGN AI ADVISORY
          </span>
        </div>

        <div className="max-w-[900px]">
          <div ref={line1Ref} className="text-display-xl text-black opacity-0" style={{ textShadow: '0 0 80px rgba(255,255,255,0.8)' }}>
            Operational Excellence
          </div>
          <div ref={line2Ref} className="text-display-xl opacity-0" style={{ textShadow: '0 0 80px rgba(255,255,255,0.8)' }}>
            <em className="not-italic" style={{ color: 'var(--text-tertiary)', fontStyle: 'italic' }}>Through</em>{' '}
            <span style={{ color: 'var(--accent-red)' }}>Sovereign AI</span>
          </div>
        </div>

        <p
          ref={subRef}
          className="text-body-l mt-10 max-w-[540px] opacity-0"
          style={{ color: 'var(--text-secondary)' }}
        >
          We architect secure, private AI systems that transform internal operations—making media organizations faster, leaner, and more intelligent.
        </p>

        <div ref={ctaRef} className="mt-12 opacity-0">
          <MagneticButton strength={0.5}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-cta inline-block px-12 py-5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'var(--accent-red)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-red-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-red)')}
            >
              Request a Consultation
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-3 opacity-0"
      >
        <span className="text-label" style={{ color: 'var(--text-tertiary)', fontSize: '10px' }}>SCROLL</span>
        <div
          className="w-px bg-[var(--accent-red)]"
          style={{ height: '48px', animation: 'scrollLine 2s ease-in-out infinite' }}
        />
        <style>{`
          @keyframes scrollLine {
            0% { transform: scaleY(0); transform-origin: top; }
            50% { transform: scaleY(1); transform-origin: top; }
            50.1% { transform-origin: bottom; }
            100% { transform: scaleY(0); transform-origin: bottom; }
          }
        `}</style>
      </div>
    </section>
  )
}
