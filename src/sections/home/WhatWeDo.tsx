import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'
import { Rocket, Shield, Target, Database, TrendingUp, Cpu } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { icon: Rocket,   text: 'Eliminate Inefficiencies',  description: 'Reduce operational waste by 40-60%' },
  { icon: Shield,   text: 'Complete Data Sovereignty',  description: '100% private, secure AI systems'    },
  { icon: Database, text: 'Unlock Proprietary Data',    description: 'Decades of insights unlocked'       },
  { icon: Target,   text: 'Board-Level Insights',       description: 'Strategic decision intelligence'    },
]

export default function WhatWeDo() {
  const sectionRef  = useRef<HTMLElement>(null)
  const bgRef       = useRef<HTMLDivElement>(null)
  const lineRef     = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      /* background flood */
      gsap.fromTo(bgRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      )

      /* decorative line draw */
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )

      /* feature rows stagger in from left */
      if (featuresRef.current) {
        const rows = featuresRef.current.querySelectorAll('.feature-row')
        gsap.fromTo(rows,
          { x: -32, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      /* stat cards pop in */
      if (statsRef.current) {
        gsap.fromTo(statsRef.current.querySelectorAll('.stat-card'),
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ padding: 'clamp(60px, 8vw, 120px) 0' }}
    >
      {/* Enhanced Animated background */}
      <div
        ref={bgRef}
        className="absolute inset-0 origin-bottom"
        style={{
          background: 'linear-gradient(135deg, #0a0f1a 0%, #1a2332 45%, #0f1824 100%)',
          transform: 'scaleY(0)',
        }}
      />

      {/* Enhanced Colour atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(214,52,71,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_80%_80%,rgba(232,112,90,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_100%,rgba(214,52,71,0.05),transparent)]" />
      </div>

      {/* Enhanced Floating orbs + dot grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full float-animation"
          style={{
            top: '8%', left: '4%',
            width: '200px', height: '200px',
            background: 'radial-gradient(circle, rgba(214,52,71,0.08) 0%, transparent 70%)',
            animationDelay: '0s',
          }}
        />
        <div
          className="absolute rounded-full float-animation"
          style={{
            bottom: '8%', right: '2%',
            width: '280px', height: '280px',
            background: 'radial-gradient(circle, rgba(232,112,90,0.06) 0%, transparent 70%)',
            animationDelay: '1.5s',
          }}
        />
        <div
          className="absolute rounded-full float-animation"
          style={{
            top: '50%', left: '10%',
            width: '160px', height: '160px',
            background: 'radial-gradient(circle, rgba(214,52,71,0.04) 0%, transparent 70%)',
            animationDelay: '3s',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-main relative z-[2] px-3 sm:px-4 md:px-6">
        {/* Enhanced TOP LABEL + HEADING */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border glass-effect mb-4 sm:mb-6" style={{
            borderColor: 'rgba(214,52,71,0.3)',
            background: 'rgba(214,52,71,0.08)',
            backdropFilter: 'blur(10px)'
          }}>
            <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent-red)]" />
            <span
              className="text-label font-medium"
              style={{
                color: 'var(--accent-red)',
                letterSpacing: '0.14em',
                fontSize: '0.7rem sm:text-sm',
              }}
            >
              WHAT WE DO
            </span>
          </div>

          <SplitText
            as="h2"
            type="lines"
            stagger={0.09}
            duration={1}
            y={44}
            className="text-h1 leading-tight text-white mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl"
            style={{ maxWidth: '100%' }}
          >
            Operational Intelligence for Media Enterprise
          </SplitText>
          
          <p className="text-base sm:text-lg leading-relaxed max-w-full sm:max-w-2xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Transform your media organization with AI systems that eliminate inefficiencies and unlock decades of proprietary data.
          </p>
        </div>

        {/* Enhanced Decorative line */}
        <div
          ref={lineRef}
          className="origin-left mb-8 sm:mb-12"
          style={{
            height: 2,
            background: 'linear-gradient(to right, var(--accent-red), rgba(232,112,90,0.6), transparent)',
            transformOrigin: 'left center',
            width: '80px sm:w-100px md:w-120px',
            borderRadius: '1px'
          }}
        />

        {/* Enhanced MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0 items-start">
          {/* LEFT: Enhanced Feature list */}
          <div ref={featuresRef} className="pr-0 lg:pr-8 md:pr-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-row group flex items-start gap-3 sm:gap-4 py-3 sm:py-4 lg:py-5 cursor-pointer transition-all duration-300 hover:bg-white/5 rounded-lg px-2 sm:px-4 -mx-2 sm:-mx-4"
                style={{
                  borderBottom: index < features.length - 1
                    ? '1px solid rgba(255,255,255,0.08)'
                    : 'none',
                  opacity: 0,
                }}
              >
                {/* Enhanced Icon bubble */}
                <div
                  className="flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    width: '40px sm:w-48px',
                    height: '40px sm:w-48px',
                    borderRadius: '10px sm:rounded-12px',
                    background: 'rgba(214,52,71,0.15)',
                    border: '1px solid rgba(214,52,71,0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <feature.icon
                    className="text-white"
                    style={{ width: '18px sm:w-20px', height: '18px sm:w-20px' }}
                    strokeWidth={2}
                  />
                </div>

                {/* Enhanced Text */}
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base leading-snug mb-1 sm:mb-2 group-hover:text-[var(--accent-red)] transition-colors duration-300">
                    {feature.text}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {feature.description}
                  </p>
                </div>

                {/* Enhanced Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[var(--accent-red)]/20 flex items-center justify-center">
                    <svg
                      style={{ width: '14px sm:w-16px', height: '14px sm:w-16px', color: 'var(--accent-red)' }}
                      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Vertical divider */}
          <div
            className="hidden lg:block mx-8 md:mx-12"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent)',
              alignSelf: 'stretch',
              width: '2px'
            }}
          />

          {/* RIGHT: Enhanced Copy + Stats + CTA */}
          <div className="pl-0 lg:pl-4 md:pl-8 mt-6 lg:mt-8 space-y-6 lg:space-y-8">
            <SplitText
              as="p"
              type="lines"
              stagger={0.07}
              duration={0.85}
              y={24}
              delay={0.3}
              className="text-body leading-[1.75] text-base sm:text-lg"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              We architect sovereign AI systems that redesign how media organizations operate — eliminating inefficiencies trapped in legacy workflows, unlocking decades of proprietary data, and enabling board-level decision-making with complete data sovereignty.
            </SplitText>

            {/* Enhanced Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: '40–60%', label: 'Operational Efficiency Gained', icon: TrendingUp },
                { value: '100%',   label: 'Data Sovereignty Maintained', icon: Shield },
              ].map((s, i) => (
                <div
                  key={i}
                  className="stat-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    opacity: 0,
                  }}
                >
                  <div className="flex items-center justify-center mb-2 sm:mb-3">
                    <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-red)]" />
                  </div>
                  <div
                    className="font-bold gradient-text leading-none mb-1 sm:mb-2"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm leading-snug font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--accent-red), var(--gradient-coral))',
                fontSize: '0.9rem sm:text-1rem',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-full" />
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              <span className="relative z-10">Start Your Transformation</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )

}