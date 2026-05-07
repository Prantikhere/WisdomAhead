import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import MeshGradientRain from '@/components/MeshGradientRain'
import MagneticButton from '@/components/MagneticButton'
import { Sparkles, Zap, Brain } from 'lucide-react'



export default function Hero() {

  const labelRef = useRef<HTMLDivElement>(null)

  const line1Ref = useRef<HTMLDivElement>(null)

  const line2Ref = useRef<HTMLDivElement>(null)

  const subRef = useRef<HTMLParagraphElement>(null)

  const ctaRef = useRef<HTMLDivElement>(null)

  const scrollRef = useRef<HTMLDivElement>(null)

  const sectionRef = useRef<HTMLElement>(null)

  const decorRef = useRef<HTMLDivElement>(null)



  const isMobile = typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)



  useEffect(() => {

    const tl = gsap.timeline({ delay: 0.5 })



    tl.fromTo(labelRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })

    tl.fromTo(line1Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.3')

    tl.fromTo(line2Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.7')

    tl.fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.6')

    tl.fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')

    tl.fromTo(decorRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }, '-=0.8')

    tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.2')



    return () => { tl.kill() }

  }, [])



  useEffect(() => {

    if (isMobile) return



    const onScroll = () => {

      if (!scrollRef.current || !sectionRef.current) return

      const scrollY = window.scrollY

      scrollRef.current.style.opacity = String(Math.max(0, 1 - scrollY / 150))

      const content = sectionRef.current.querySelector('.hero-content') as HTMLElement

      if (content) {

        content.style.transform = `translateY(${scrollY * 0.15}px)`

      }

    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)

  }, [isMobile])



  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] md:min-h-screen flex items-center overflow-hidden">
      <MeshGradientRain opacity={0.45} mouseReactive={true} />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-[var(--accent-red)]/10 to-[var(--gradient-coral)]/5 rounded-full blur-2xl sm:blur-3xl float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-tl from-[var(--gradient-coral)]/8 to-[var(--accent-red)]/5 rounded-full blur-2xl sm:blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-24 sm:w-48 md:w-80 h-24 sm:h-48 md:h-80 bg-gradient-to-r from-[var(--gradient-gold)]/5 to-transparent rounded-full blur-xl sm:blur-2xl float-animation" style={{ animationDelay: '4s' }} />
        
        {/* Enhanced Falling Red Dots Animation */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
      </div>



      <div className="hero-content container-main relative z-[2] w-full pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 will-change-transform grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center px-3 sm:px-4 md:px-6">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <div ref={labelRef} className="mb-4 sm:mb-6 lg:mb-8 opacity-0">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border glass-effect" style={{
              borderColor: 'rgba(214,52,71,0.2)',
              background: 'rgba(214,52,71,0.05)',
              backdropFilter: 'blur(10px)'
            }}>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent-red)]" />
              <span className="text-label font-medium text-xs sm:text-sm" style={{ color: 'var(--accent-red)', letterSpacing: '0.15em' }}>
                SOVEREIGN AI ADVISORY
              </span>
            </div>
          </div>



          <div className="max-w-full sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px]">
            <div className="flex flex-wrap items-baseline gap-1 sm:gap-2 lg:gap-3">
              <div ref={line1Ref} className="text-display-xl text-black opacity-0 relative" style={{ textShadow: '0 0 80px rgba(255,255,255,0.8)' }}>
                <span className="gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Operational Excellence</span>
                <div className="absolute inset-0 blur-xl opacity-30">
                  <span className="gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Operational Excellence</span>
                </div>
              </div>
              <div ref={line2Ref} className="text-display-xl opacity-0 relative inline-flex items-baseline gap-0.5 sm:gap-1 lg:gap-2 pb-2" style={{ textShadow: '0 0 80px rgba(255,255,255,0.8)', lineHeight: '1.1' }}>
                <em className="not-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" style={{ color: 'var(--text-tertiary)', fontStyle: 'italic' }}>Through</em>
                <span className="gradient-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Sovereign AI</span>
                <div className="absolute inset-0 blur-xl opacity-30">
                  <em className="not-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" style={{ color: 'var(--text-tertiary)', fontStyle: 'italic' }}>Through</em>
                  <span className="gradient-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Sovereign AI</span>
                </div>
              </div>
            </div>
          </div>



          <p
            ref={subRef}
            className="text-body-l mt-8 sm:mt-10 lg:mt-16 max-w-full sm:max-w-[500px] md:max-w-[540px] opacity-0 text-sm sm:text-base lg:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            We architect secure, private AI systems that transform internal operations—making media organizations faster, leaner, and more intelligent.
          </p>



          <div ref={ctaRef} className="mt-8 sm:mt-12 lg:mt-16 opacity-0">
            <MagneticButton strength={0.5}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-white text-[14px] sm:text-[16px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl relative overflow-hidden rounded-lg"
                style={{ 
                  background: 'linear-gradient(135deg, var(--accent-red), var(--gradient-coral))',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 3s ease-in-out infinite'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10">Request a Consultation</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </MagneticButton>
          </div>

        </div>



        {/* Right Side Decorative Elements */}
        <div ref={decorRef} className="lg:col-span-5 hidden lg:block relative">
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Enhanced Floating Geometric Shapes */}
            <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border-2 border-[var(--accent-red)]/20 rounded-full float-animation" style={{ animationDelay: '0s' }} />
            <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 border border-[var(--gradient-coral)]/30 rotate-45 float-animation" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-5 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-[var(--accent-red)]/10 to-[var(--gradient-coral)]/10 rounded-2xl sm:rounded-3xl float-animation" style={{ animationDelay: '2s' }} />
            
            {/* Enhanced Neural Network Visualization */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
              <svg viewBox="0 0 320 320" className="w-full h-full opacity-70">
                <defs>
                  <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="var(--gradient-coral)" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Enhanced Neural Network Nodes */}
                <circle cx="80" cy="80" r="4" fill="url(#nodeGradient)" className="pulse-glow" filter="url(#glow)" />
                <circle cx="240" cy="80" r="4" fill="url(#nodeGradient)" className="pulse-glow" style={{ animationDelay: '0.5s' }} filter="url(#glow)" />
                <circle cx="160" cy="160" r="6" fill="var(--accent-red)" className="pulse-glow" style={{ animationDelay: '1s' }} filter="url(#glow)" />
                <circle cx="80" cy="240" r="4" fill="url(#nodeGradient)" className="pulse-glow" style={{ animationDelay: '1.5s' }} filter="url(#glow)" />
                <circle cx="240" cy="240" r="4" fill="url(#nodeGradient)" className="pulse-glow" style={{ animationDelay: '2s' }} filter="url(#glow)" />
                
                {/* Animated Connections */}
                <line x1="80" y1="80" x2="160" y2="160" stroke="url(#nodeGradient)" strokeWidth="1" opacity="0.3" className="shimmer" />
                <line x1="240" y1="80" x2="160" y2="160" stroke="url(#nodeGradient)" strokeWidth="1" opacity="0.3" className="shimmer" style={{ animationDelay: '0.3s' }} />
                <line x1="80" y1="240" x2="160" y2="160" stroke="url(#nodeGradient)" strokeWidth="1" opacity="0.3" className="shimmer" style={{ animationDelay: '0.6s' }} />
                <line x1="240" y1="240" x2="160" y2="160" stroke="url(#nodeGradient)" strokeWidth="1" opacity="0.3" className="shimmer" style={{ animationDelay: '0.9s' }} />
                <line x1="80" y1="80" x2="240" y2="80" stroke="url(#nodeGradient)" strokeWidth="0.5" opacity="0.2" />
                <line x1="80" y1="240" x2="240" y2="240" stroke="url(#nodeGradient)" strokeWidth="0.5" opacity="0.2" />
              </svg>
            </div>
            
            {/* Enhanced Data Streams */}
            <div className="absolute bottom-10 left-10 w-2 h-20 bg-gradient-to-b from-[var(--accent-red)] to-transparent opacity-40 float-animation" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-10 left-16 w-2 h-16 bg-gradient-to-b from-[var(--gradient-coral)] to-transparent opacity-30 float-animation" style={{ animationDelay: '1.5s' }} />
            <div className="absolute bottom-10 left-22 w-1 h-12 bg-gradient-to-b from-[var(--accent-red)] to-transparent opacity-25 float-animation" style={{ animationDelay: '2s' }} />
            
            {/* Enhanced Glowing Orbs */}
            <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-[var(--accent-red)]/20 rounded-full blur-xl pulse-glow" />
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-[var(--gradient-coral)]/15 rounded-full blur-lg pulse-glow" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-[var(--accent-red)]/10 rounded-full blur-md pulse-glow" style={{ animationDelay: '2s' }} />

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[var(--accent-red)]/40 rounded-full float-animation"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${30 + (i % 2) * 20}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>

      </div>



      {/* Enhanced Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 sm:gap-3 opacity-0"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent-red)]" />
          <span className="text-label font-medium text-[10px] sm:text-[11px]" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}>SCROLL TO EXPLORE</span>
        </div>
        <div className="relative">
          <div
            className="w-0.5 bg-gradient-to-b from-[var(--accent-red)] to-transparent"
            style={{ height: '32px sm:h-48px', animation: 'scrollLine 2s ease-in-out infinite' }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--accent-red)] rounded-full animate-pulse" />
        </div>
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

