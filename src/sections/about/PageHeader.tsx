import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router'
import MeshGradientRain from '@/components/MeshGradientRain'
import SplitText from '@/components/SplitText'

export default function PageHeader() {
  const breadcrumbRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(breadcrumbRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power3.out' })
    tl.fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.2')

    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '60vh', minHeight: '450px' }}>
      <MeshGradientRain opacity={0.25} mouseReactive={true} />
      
      {/* Subtle floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Falling Red Dots Animation */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-[var(--accent-red)] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                animation: `fall ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes fall {
            to {
              transform: translateY(calc(100vh + 20px));
            }
          }
        `}</style>
        
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 sm:w-16 h-12 sm:w-16 border-2 border-[var(--accent-red)]/10 rounded-full float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-8 sm:w-12 h-8 sm:w-12 bg-gradient-to-br from-[var(--gradient-coral)]/10 to-transparent rounded-xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-6 sm:w-8 h-6 sm:w-8 bg-[var(--accent-red)]/5 rounded-full blur-lg float-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-main relative z-[2] text-center">
        <div ref={breadcrumbRef} className="mb-8 opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border glass-effect" style={{
            borderColor: 'rgba(214,52,71,0.2)',
            background: 'rgba(214,52,71,0.05)'
          }}>
            <svg className="w-4 h-4 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-[var(--accent-red)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              Home
            </Link>
            <span style={{ color: 'var(--text-tertiary)' }}>•</span>
            <span style={{ color: 'var(--accent-red)', fontWeight: 500 }}>About</span>
          </div>
        </div>

        <div className="relative inline-block">
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-[var(--accent-red)]/10 to-[var(--gradient-coral)]/10 rounded-full blur-2xl" />
          <SplitText
            as="h1"
            type="lines"
            className="text-display-l text-black mb-6 relative"
            stagger={0.08}
            duration={0.9}
            y={40}
          >
            About Wisdomahead
          </SplitText>
        </div>

        <div className="relative inline-block">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent" />
            <svg className="w-5 h-5 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent" />
          </div>
          <p ref={subtitleRef} className="text-h2 italic mx-auto max-w-[600px] opacity-0" style={{ color: 'var(--text-secondary)' }}>
            Where media legacy meets sovereign intelligence
          </p>
        </div>
      </div>
    </section>
  )
}
