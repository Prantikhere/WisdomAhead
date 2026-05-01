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
      className="bg-white relative"
      style={{ padding: 'clamp(140px, 20vw, 300px) 0' }}
    >
      <div className="container-main max-w-[800px] text-center relative z-[2]">
        <span className="text-label block mb-10" style={{ color: 'var(--accent-red)' }}>
          LEADERSHIP PHILOSOPHY
        </span>

        <SplitText
          as="div"
          type="lines"
          className="text-display-l text-black mb-10"
          stagger={0.1}
          duration={1}
          y={50}
        >
          We don't sell software.
          We architect change.
        </SplitText>

        <p ref={bodyRef} className="text-body-l max-w-[560px] mx-auto opacity-0" style={{ color: 'var(--text-secondary)' }}>
          True transformation doesn't come from tools. It comes from the strategic clarity to know what should change, the operational wisdom to know how, and the courage to lead the transition. That's what four decades in media leadership teaches you. That's what we bring to every engagement.
        </p>
      </div>
    </section>
  )
}
