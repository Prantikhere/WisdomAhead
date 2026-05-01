import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'

gsap.registerPlugin(ScrollTrigger)

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    
    const ctx = gsap.context(() => {
      // Background flood effect
      gsap.fromTo(bgRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ padding: 'clamp(100px, 14vw, 220px) 0' }}
    >
      {/* Animated background */}
      <div
        ref={bgRef}
        className="absolute inset-0 origin-bottom"
        style={{ background: '#0A1628', transform: 'scaleY(0)' }}
      />

      <div className="container-main relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span
              className="text-label block mb-6 px-3 py-1.5 inline-block border"
              style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.15)', letterSpacing: '0.15em' }}
            >
              WHAT WE DO
            </span>
            <SplitText
              as="h2"
              type="lines"
              stagger={0.1}
              duration={1}
              y={50}
              className="text-h1 text-white"
            >
              Internal Process Optimization for Media Enterprises
            </SplitText>
          </div>

          <div className="flex items-end">
            <SplitText
              as="p"
              type="lines"
              stagger={0.08}
              duration={0.8}
              y={30}
              delay={0.2}
              className="text-body-l max-w-[520px]"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              We redesign how your organization operates — eliminating inefficiencies, unlocking hidden data, and enabling AI-driven decision-making at scale.
            </SplitText>
          </div>
        </div>
      </div>
    </section>
  )
}
