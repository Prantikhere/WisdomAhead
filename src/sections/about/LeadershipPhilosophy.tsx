import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'

gsap.registerPlugin(ScrollTrigger)

export default function LeadershipPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const bodyRef    = useRef<HTMLParagraphElement>(null)
  const glowRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(glowRef.current,
        { opacity:0, scale:0.8 },
        {
          opacity:1, scale:1, duration:1.6, ease:'power2.out',
          scrollTrigger:{ trigger:sectionRef.current, start:'top 75%', toggleActions:'play none none none' },
        }
      )
      gsap.fromTo(bodyRef.current,
        { y:30, opacity:0 },
        {
          y:0, opacity:1, duration:0.8, delay:0.3, ease:'power3.out',
          scrollTrigger:{ trigger:bodyRef.current, start:'top 85%', toggleActions:'play none none none' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        padding:'clamp(140px, 20vw, 300px) 0',
        background:'linear-gradient(180deg, #080606 0%, #110a0a 50%, #080606 100%)',
        borderTop:'1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.022]" style={{
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize:'160px 160px',
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
        backgroundSize:'40px 40px',
      }} />

      {/* Central radial glow — GSAP animated */}
      <div ref={glowRef} className="absolute pointer-events-none opacity-0" style={{
        top:'50%', left:'50%',
        transform:'translate(-50%,-50%)',
        width:'80vw', height:'60vh', maxWidth:1000,
        background:'radial-gradient(ellipse, rgba(180,25,25,0.09) 0%, transparent 65%)',
        filter:'blur(50px)',
      }} />

      {/* Side glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position:'absolute', top:'20%', left:'20%',
          width:'25vw', height:'25vw', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(180,25,25,0.05) 0%, transparent 65%)',
          filter:'blur(40px)',
        }} />
        <div style={{
          position:'absolute', bottom:'20%', right:'20%',
          width:'30vw', height:'30vw', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(200,50,30,0.04) 0%, transparent 65%)',
          filter:'blur(40px)',
        }} />
      </div>

      <div className="container-main max-w-[800px] text-center relative z-[2]">

        {/* Label pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-10" style={{
          border:'1px solid rgba(200,40,30,0.3)',
          background:'rgba(200,40,30,0.07)',
          backdropFilter:'blur(10px)',
        }}>
          <svg className="w-4 h-4" style={{ color:'rgba(210,60,45,0.9)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span style={{ color:'rgba(210,60,45,0.9)', fontSize:'0.62rem', letterSpacing:'0.2em', fontWeight:700 }}>
            LEADERSHIP PHILOSOPHY
          </span>
        </div>

        {/* Hero statement */}
        <div className="relative mb-12">
          <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full blur-2xl"
            style={{ background:'radial-gradient(circle, rgba(200,40,30,0.10), transparent)' }} />
          <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full blur-xl"
            style={{ background:'radial-gradient(circle, rgba(200,50,30,0.07), transparent)' }} />

          <SplitText
            as="div"
            type="lines"
            className="relative"
            style={{
              fontFamily:'"Georgia","Times New Roman",serif',
              fontSize:'clamp(2rem,5.5vw,4rem)',
              fontWeight:700,
              lineHeight:1.1,
              background:'linear-gradient(135deg, #e03030 0%, #e06040 50%, rgba(255,255,255,0.88) 100%)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent',
              backgroundClip:'text',
            }}
            stagger={0.1}
            duration={1}
            y={50}
          >
            We don't sell software.
            We architect change.
          </SplitText>
        </div>

        {/* Body */}
        <div className="relative inline-block max-w-[560px]">
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full blur-xl"
            style={{ background:'radial-gradient(circle, rgba(200,40,30,0.08), transparent)' }} />
          <p ref={bodyRef} className="mx-auto opacity-0 leading-relaxed relative" style={{
            fontFamily:'"Georgia",serif',
            fontStyle:'italic',
            color:'rgba(255,255,255,0.40)',
            fontSize:'clamp(0.9rem,1.6vw,1.05rem)',
            lineHeight:1.85,
          }}>
            True transformation doesn't come from tools. It comes from the strategic clarity to know what should change, the operational wisdom to know how, and the courage to lead the transition. That's what four decades in media leadership teaches you. That's what we bring to every engagement.
          </p>
        </div>

        {/* Ornament */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px" style={{ background:'linear-gradient(to right, transparent, rgba(200,40,30,0.5))' }} />
            <svg className="w-4 h-4" style={{ color:'rgba(200,50,40,0.7)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="w-8 h-px" style={{ background:'linear-gradient(to left, transparent, rgba(200,40,30,0.5))' }} />
          </div>
        </div>
      </div>
    </section>
  )
}