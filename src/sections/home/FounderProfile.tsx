import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedCounter from '@/components/AnimatedCounter'

gsap.registerPlugin(ScrollTrigger)

const understandings = [
  'How large media organizations scale',
  'Where inefficiencies exist within legacy systems',
  'How technology can transform operational economics',
]

export default function FounderProfile() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const isMobile = typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { y: 100, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        {
          y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 90%', toggleActions: 'play none none none' },
        }
      )

      // Disable parallax scrub on mobile for performance
      if (!isMobile) {
        gsap.to(imageRef.current, {
          yPercent: -5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      const items = contentRef.current?.querySelectorAll('.reveal-item')
      if (items) {
        gsap.fromTo(items,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: contentRef.current, start: 'top 80%', toggleActions: 'play none none none' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      style={{ background: '#fafafa', padding: 'clamp(120px, 14vw, 240px) 0' }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image */}
          <div className="lg:sticky lg:top-24">
            <div ref={imageRef} className="opacity-0 overflow-hidden">
              <img
                src="/images/founder-portrait.jpg"
                alt="D. D. Purkayastha"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
                style={{
                  aspectRatio: '3/4',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <span className="reveal-item text-label block mb-5 opacity-0" style={{ color: 'var(--accent-red)' }}>
              FOUNDER & PRINCIPAL ADVISOR
            </span>

            <h2 className="reveal-item text-h1 text-black mb-3 opacity-0">
              D. D. Purkayastha
            </h2>

            <p className="reveal-item text-body mb-8 opacity-0" style={{ color: 'var(--text-secondary)' }}>
              Global Media Leader &nbsp;&middot;&nbsp; Author &nbsp;&middot;&nbsp; Board-Level Strategist
            </p>

            <div className="reveal-item mb-10 opacity-0">
              <span className="text-display-l block leading-none" style={{ color: 'var(--accent-red)' }}>
                <AnimatedCounter end={40} suffix="+" duration={2.5} />
              </span>
              <span className="text-label mt-2 block" style={{ color: 'var(--text-tertiary)' }}>Years in Media Leadership</span>
            </div>

            <p className="reveal-item text-body-l mb-6 max-w-[520px] opacity-0" style={{ color: 'var(--text-secondary)' }}>
              With over four decades of leadership in the media industry, D. D. Purkayastha brings deep, institutional knowledge at the intersection of media, technology, and business transformation. As the former Managing Director & CEO of the ABP Group, he led one of India's most influential media organizations through multiple phases of evolution—across print, broadcast, and digital. Having worked at the highest levels, he understands:
            </p>

            <div className="flex flex-col gap-4 mb-12">
              {understandings.map((item, i) => (
                <div key={i} className="reveal-item flex items-start gap-4 opacity-0 group">
                  <span className="font-sans text-[14px] font-medium shrink-0 w-8 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--accent-red)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-body text-black">{item}</span>
                </div>
              ))}
            </div>

            <blockquote
              className="reveal-item text-h2 italic text-black opacity-0"
              style={{ borderLeft: '3px solid var(--accent-red)', paddingLeft: '28px' }}
            >
              We don't just advise transformation. We've led it.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
