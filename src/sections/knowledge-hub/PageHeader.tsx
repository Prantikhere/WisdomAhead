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
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: 'clamp(300px, 50vh, 500px)', minHeight: '300px' }}>
      <MeshGradientRain opacity={0.25} mouseReactive={true} />
      
      {/* Enhanced Subtle floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Falling Red Dots Animation */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
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
        
        <div className="absolute top-5 sm:top-10 left-2 sm:left-5 w-8 h-8 sm:w-12 sm:h-12 border-2 border-[var(--accent-red)]/10 rounded-full float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-5 sm:bottom-10 right-2 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[var(--gradient-coral)]/10 to-transparent rounded-xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-[var(--accent-red)]/5 rounded-full blur-lg float-animation" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-main relative z-[2] text-center px-3 sm:px-4 md:px-6 w-full">
        <div ref={breadcrumbRef} className="mb-4 sm:mb-6 opacity-0">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border glass-effect" style={{
            borderColor: 'rgba(214,52,71,0.2)',
            background: 'rgba(214,52,71,0.05)'
          }}>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-[var(--accent-red)] text-xs sm:text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              Home
            </Link>
            <span style={{ color: 'var(--text-tertiary)' }} className="text-xs sm:text-sm">•</span>
            <span style={{ color: 'var(--accent-red)', fontWeight: 500 }} className="text-xs sm:text-sm">Knowledge Hub</span>
          </div>
        </div>

        <div className="relative block w-full">
          <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[var(--accent-red)]/10 to-[var(--gradient-coral)]/10 rounded-full blur-xl" />
          <SplitText
            as="h1"
            type="lines"
            className="text-display-l text-black mb-3 sm:mb-4 lg:mb-6 relative text-xl sm:text-2xl md:text-3xl lg:text-4xl block w-full"
            stagger={0.08}
            duration={0.9}
            y={40}
          >
            Knowledge Hub
          </SplitText>
        </div>

        <div className="relative block w-full">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
            <div className="w-4 h-px sm:w-6 bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent" />
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="w-4 h-px sm:w-6 bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent" />
          </div>
          <p ref={subtitleRef} className="text-h2 italic mx-auto max-w-full sm:max-w-[640px] lg:max-w-3xl opacity-0 text-base sm:text-lg lg:text-xl block px-2" style={{ color: 'var(--text-secondary)' }}>
            Strategic intelligence for media leaders navigating the sovereign AI era
          </p>
        </div>
      </div>
    </section>
  )
}
