import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TiltCard from '@/components/TiltCard'

gsap.registerPlugin(ScrollTrigger)

const phases = [
  {
    number: '01',
    title: 'Comprehensive Discovery',
    body: 'We immerse ourselves in your organization — mapping workflows, identifying data silos, and understanding the operational DNA that makes your media enterprise unique. This phase surfaces the hidden inefficiencies that constrain growth.',
    icon: (
      <svg className="w-5 h-5" style={{ color:'rgba(210,60,45,0.9)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Sovereign AI Architecture',
    body: 'We design private, secure AI systems tailored to your operational reality. Every framework is built with compliance, control, and competitive advantage as first principles — never as afterthoughts.',
    icon: (
      <svg className="w-5 h-5" style={{ color:'rgba(210,60,45,0.9)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Guided Implementation',
    body: "We don't hand over a blueprint and disappear. Our advisors work alongside your leadership through implementation, ensuring the transformation sticks and your teams evolve from executors to strategic operators.",
    icon: (
      <svg className="w-5 h-5" style={{ color:'rgba(210,60,45,0.9)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function Methodology() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y:40, opacity:0 },
        {
          y:0, opacity:1, duration:0.8, ease:'power3.out',
          scrollTrigger:{ trigger:sectionRef.current, start:'top 80%', toggleActions:'play none none none' },
        }
      )
      const cards = cardsRef.current?.querySelectorAll('.phase-card')
      if (cards) {
        gsap.fromTo(cards,
          { y:80, opacity:0, rotateX:-10 },
          {
            y:0, opacity:1, rotateX:0, duration:0.9, stagger:0.2, ease:'power3.out',
            scrollTrigger:{ trigger:cardsRef.current, start:'top 85%', toggleActions:'play none none none' },
          }
        )
      }
      const numbers = cardsRef.current?.querySelectorAll('.phase-number')
      if (numbers) {
        gsap.fromTo(numbers,
          { opacity:0, scale:0.5 },
          {
            opacity:0.25, scale:1, duration:0.6, stagger:0.2, ease:'power3.out', delay:0.1,
            scrollTrigger:{ trigger:cardsRef.current, start:'top 85%', toggleActions:'play none none none' },
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
      style={{
        padding:'clamp(120px, 14vw, 240px) 0',
        background:'linear-gradient(180deg, #0a0707 0%, #080606 50%, #0a0707 100%)',
        borderTop:'1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position:'absolute', top:'20%', left:'15%',
          width:'30vw', height:'30vw', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(180,25,25,0.06) 0%, transparent 65%)',
          filter:'blur(50px)',
        }} />
        <div style={{
          position:'absolute', bottom:'20%', right:'15%',
          width:'35vw', height:'35vw', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(200,50,30,0.05) 0%, transparent 65%)',
          filter:'blur(50px)',
        }} />
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.022]" style={{
          backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize:'160px 160px',
        }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize:'40px 40px',
        }} />
      </div>

      <div className="container-main relative z-[2]">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6" style={{
            border:'1px solid rgba(200,40,30,0.3)',
            background:'rgba(200,40,30,0.07)',
            backdropFilter:'blur(10px)',
          }}>
            <svg className="w-4 h-4" style={{ color:'rgba(210,60,45,0.9)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span style={{ color:'rgba(210,60,45,0.9)', fontSize:'0.62rem', letterSpacing:'0.2em', fontWeight:700 }}>
              OUR METHODOLOGY
            </span>
          </div>

          <div className="relative inline-block">
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full blur-xl"
              style={{ background:'radial-gradient(circle, rgba(200,40,30,0.12), transparent)' }} />
            <h2 style={{
              fontFamily:'"Georgia","Times New Roman",serif',
              fontSize:'clamp(1.7rem,3.5vw,2.6rem)',
              fontWeight:700,
              color:'rgba(255,255,255,0.9)',
              lineHeight:1.15,
              position:'relative',
            }}>
              A Structured Path to Transformation
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8" style={{ perspective:'1000px' }}>
          {phases.map((phase) => (
            <TiltCard key={phase.number} tiltAmount={5}>
              <div className="phase-card opacity-0 group">
                <div className="relative mb-6">
                  {/* Glow behind card */}
                  <div className="absolute -top-2 -left-2 w-full h-full rounded-sm blur-xl transition-all duration-500 group-hover:blur-2xl" style={{
                    background:'radial-gradient(circle at top left, rgba(200,40,30,0.08), transparent 70%)',
                  }} />

                  {/* Card face */}
                  <div
                    className="relative p-6 transition-all duration-400"
                    style={{
                      background:'rgba(255,255,255,0.02)',
                      border:'1px solid rgba(255,255,255,0.07)',
                      backdropFilter:'blur(8px)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.borderColor = 'rgba(200,40,30,0.28)'
                      el.style.background  = 'linear-gradient(135deg, rgba(200,40,30,0.06) 0%, rgba(17,10,10,0.95) 100%)'
                      el.style.boxShadow   = '0 16px 48px rgba(0,0,0,0.35)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.borderColor = 'rgba(255,255,255,0.07)'
                      el.style.background  = 'rgba(255,255,255,0.02)'
                      el.style.boxShadow   = 'none'
                    }}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="phase-number"
                        style={{
                          fontFamily:'"Georgia",serif',
                          fontSize:'clamp(48px,6vw,72px)',
                          color:'rgba(200,45,35,0.9)',
                          opacity:0,
                          lineHeight:1,
                        }}
                      >
                        {phase.number}
                      </span>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{
                        background:'rgba(200,40,30,0.1)',
                        border:'1px solid rgba(200,40,30,0.2)',
                      }}>
                        {phase.icon}
                      </div>
                    </div>

                    <h3
                      className="mb-4 transition-colors duration-300 group-hover:text-[rgba(220,80,60,0.95)]"
                      style={{
                        fontFamily:'"Georgia","Times New Roman",serif',
                        fontSize:'clamp(1rem,1.6vw,1.2rem)',
                        fontWeight:700,
                        color:'rgba(255,255,255,0.88)',
                        lineHeight:1.3,
                      }}
                    >
                      {phase.title}
                    </h3>

                    <p className="leading-relaxed" style={{
                      color:'rgba(255,255,255,0.38)',
                      fontSize:'clamp(0.8rem,1.2vw,0.9rem)',
                      lineHeight:1.75,
                    }}>
                      {phase.body}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px" style={{
                    background:'linear-gradient(to right, rgba(200,40,30,0.4), transparent)',
                  }} />
                  <div className="w-2 h-2 rounded-full transition-colors duration-300 group-hover:bg-[rgba(200,45,35,0.9)]" style={{
                    background:'rgba(200,40,30,0.25)',
                  }} />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}