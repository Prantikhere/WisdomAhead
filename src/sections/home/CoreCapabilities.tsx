import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TiltCard from '@/components/TiltCard'
import { Zap, Target, Shield, TrendingUp, ArrowRight } from 'lucide-react'



gsap.registerPlugin(ScrollTrigger)



const capabilities = [

  {

    index: '01',

    title: 'Strategic Business Process Optimization',

    body: 'We map every operational layer of your media organization — from editorial production to distribution logistics — identifying friction points where manual processes drain margin and slow decision-making. Our recommendations are grounded in four decades of C-suite media leadership, not theoretical frameworks.',

  },

  {

    index: '02',

    title: 'Intelligent Workflow Orchestration',

    body: 'Media enterprises run on complex, interdependent workflows. We design AI-native orchestration systems that coordinate content production, cross-platform adaptation, and resource allocation — reducing time-to-market by 40-60% while preserving editorial quality and creative control.',

  },

  {

    index: '03',

    title: 'Secure Corporate Intelligence',

    body: 'Your archives, subscriber data, and competitive research represent decades of proprietary value. We architect private intelligence systems that transform this data into real-time strategic insights — all while ensuring zero exposure to public AI platforms and complete regulatory compliance.',

  },

  {

    index: '04',

    title: 'Operational Cost Transformation',

    body: 'True cost transformation in media requires more than automation — it requires reimagining how human capital is deployed. We help shift teams from repetitive execution to strategic oversight, using AI-led systems that augment rather than replace institutional expertise.',

  },

]



export default function CoreCapabilities() {

  const sectionRef = useRef<HTMLElement>(null)

  const headingRef = useRef<HTMLDivElement>(null)

  const cardsRef = useRef<HTMLDivElement>(null)



  useEffect(() => {

    if (!sectionRef.current) return



    const ctx = gsap.context(() => {

      gsap.fromTo(headingRef.current,

        { y: 40, opacity: 0 },

        {

          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',

          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },

        }

      )



      const cards = cardsRef.current?.querySelectorAll('.cap-card')

      if (cards) {

        gsap.fromTo(cards,

          { y: 80, opacity: 0, rotateX: -15 },

          {

            y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',

            scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', toggleActions: 'play none none none' },

          }

        )

      }

    }, sectionRef)



    return () => ctx.revert()

  }, [])



  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative bg-white overflow-hidden"
      style={{ padding: 'clamp(60px, 8vw, 140px) 0' }}
    >
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-[var(--accent-red)]/8 to-[var(--gradient-coral)]/4 rounded-full blur-3xl float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-80 sm:w-96 lg:w-[500px] h-80 sm:h-96 lg:w-[500px] bg-gradient-to-tl from-[var(--gradient-coral)]/6 to-[var(--accent-red)]/3 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-[var(--gradient-gold)]/4 to-transparent rounded-full blur-2xl float-animation" style={{ animationDelay: '4s' }} />
      </div>



      <div className="container-main relative z-[2] px-3 sm:px-4 md:px-6">
        <div ref={headingRef} className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border glass-effect mb-6 sm:mb-8" style={{ 
            color: 'var(--accent-red)', 
            borderColor: 'rgba(214,52,71,0.2)',
            background: 'rgba(214,52,71,0.05)',
            backdropFilter: 'blur(10px)'
          }}>
            <Target className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent-red)]" />
            <span className="text-label font-medium tracking-[0.1em] text-xs sm:text-sm">
              CORE CAPABILITIES
            </span>
          </div>
          
          <h2 className="text-h1 relative max-w-full sm:max-w-4xl lg:max-w-5xl mx-auto mb-4 sm:mb-6">
            <span className="gradient-text font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">Four Pillars</span>
            <br className="hidden sm:block" />
            <span className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">of Transformation</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Our comprehensive approach combines strategic insight with technical excellence to deliver measurable results for media enterprises.
          </p>
        </div>



        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" style={{ perspective: '1000px' }}>
          {capabilities.map((cap, i) => {
            const icons = [Zap, Target, Shield, TrendingUp]
            const Icon = icons[i]
            return (
              <TiltCard
                key={cap.index}
                tiltAmount={8}
                className="cap-card opacity-0"
              >
                <div
                  className="p-6 sm:p-8 lg:p-10 transition-all duration-500 h-full group relative overflow-hidden rounded-xl sm:rounded-2xl hover-lift"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.98))',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 4px sm:0 6px lg:0 8px 32px rgba(0,0,0,0.12)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--accent-red)]/3 to-[var(--gradient-coral)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:w-32 bg-gradient-to-bl from-[var(--accent-red)]/15 to-transparent rounded-full blur-xl sm:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent-red)]/20 to-[var(--gradient-coral)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent-red)]" strokeWidth={2} />
                        </div>
                        <span className="font-serif text-xl sm:text-2xl gradient-text font-bold">
                          {cap.index}
                        </span>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[var(--accent-red)]/20 to-[var(--gradient-coral)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[var(--accent-red)] rounded-full" />
                      </div>
                    </div>

                    <h3 className="text-h3 text-black mb-3 sm:mb-5 group-hover:gradient-text transition-colors duration-500 font-bold leading-tight text-base sm:text-lg lg:text-xl">
                      {cap.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ color: 'var(--text-secondary)' }}>
                      {cap.body}
                    </p>

                    <div className="mt-auto pt-3 sm:pt-4">
                      <div className="flex items-center justify-between">
                        <div
                          className="h-0.5 transition-all duration-500 group-hover:w-full w-12 sm:w-16"
                          style={{ background: 'linear-gradient(90deg, var(--accent-red), var(--gradient-coral))' }}
                        />
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[var(--accent-red)]/30 flex items-center justify-center group-hover:border-[var(--accent-red)] group-hover:bg-[var(--accent-red)]/10 transition-all duration-300">
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent-red)] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            )
          })}
        </div>



        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 py-3 sm:py-4 lg:py-5 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, var(--accent-red), var(--gradient-coral))',
              backgroundSize: '200% 200%',
              fontSize: '0.9rem sm:text-1rem lg:text-1.1rem'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-full" />
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
            <span className="relative z-10">Explore Our Solutions</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </a>
        </div>

        {/* Enhanced Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-20 lg:w-24 h-16 sm:w-20 lg:w-24 border-2 border-[var(--accent-red)]/15 rounded-full float-animation" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-16 sm:w-20 h-16 sm:w-20 bg-gradient-to-br from-[var(--gradient-coral)]/15 to-transparent rounded-xl sm:rounded-2xl float-animation" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-8 sm:w-10 lg:w-12 h-8 sm:w-10 lg:w-12 bg-[var(--accent-red)]/8 rounded-full blur-xl sm:blur-2xl float-animation" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 left-1/4 w-6 sm:w-8 h-6 sm:w-8 bg-gradient-to-r from-[var(--gradient-gold)]/10 to-transparent rounded-full float-animation" style={{ animationDelay: '3s' }} />
        </div>

      </div>

    </section>

  )

}

