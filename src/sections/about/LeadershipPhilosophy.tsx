import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'

gsap.registerPlugin(ScrollTrigger)

export default function LeadershipPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(bodyRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out',
          scrollTrigger: { trigger: bodyRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden"
      style={{ padding: 'clamp(140px, 20vw, 300px) 0' }}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/3 w-28 h-28 bg-gradient-to-br from-[var(--accent-red)]/8 to-transparent rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 right-1/3 w-36 h-36 bg-gradient-to-tl from-[var(--gradient-coral)]/8 to-transparent rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[var(--accent-red)]/4 rounded-full blur-2xl float-animation" style={{ animationDelay: '5s' }} />
      </div>

      <div className="container-main max-w-[800px] text-center relative z-[2]">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border glass-effect mb-10" style={{
          borderColor: 'rgba(214,52,71,0.2)',
          background: 'rgba(214,52,71,0.05)'
        }}>
          <svg className="w-5 h-5 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="text-label" style={{ color: 'var(--accent-red)' }}>
            LEADERSHIP PHILOSOPHY
          </span>
        </div>

        <div className="relative mb-12">
          <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-[var(--accent-red)]/10 to-[var(--gradient-coral)]/10 rounded-full blur-2xl" />
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-tl from-[var(--gradient-coral)]/10 to-transparent rounded-full blur-xl" />
          
          <SplitText
            as="div"
            type="lines"
            className="text-display-l text-black relative"
            stagger={0.1}
            duration={1}
            y={50}
          >
            We don't sell software.
            We architect change.
          </SplitText>
        </div>

        <div className="relative inline-block max-w-[560px]">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[var(--accent-red)]/10 to-[var(--gradient-coral)]/10 rounded-full blur-xl" />
          <p ref={bodyRef} className="text-body-l mx-auto opacity-0 leading-relaxed relative" style={{ color: 'var(--text-secondary)' }}>
            True transformation doesn't come from tools. It comes from the strategic clarity to know what should change, the operational wisdom to know how, and the courage to lead the transition. That's what four decades in media leadership teaches you. That's what we bring to every engagement.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent" />
            <svg className="w-4 h-4 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
