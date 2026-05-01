import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'

gsap.registerPlugin(ScrollTrigger)

export default function FirmStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 1.05, clipPath: 'inset(0 100% 0 0)' },
        {
          opacity: 1, scale: 1, clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )

      const items = contentRef.current?.querySelectorAll('.reveal-item')
      if (items) {
        gsap.fromTo(items,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: contentRef.current, start: 'top 80%', toggleActions: 'play none none none' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ padding: 'clamp(120px, 14vw, 240px) 0' }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text */}
          <div ref={contentRef}>
            <span className="reveal-item text-label block mb-5 opacity-0" style={{ color: 'var(--accent-red)' }}>
              OUR STORY
            </span>

            <SplitText
              as="h2"
              type="lines"
              className="text-h1 text-black mb-8 max-w-[540px]"
              stagger={0.08}
              duration={0.9}
              y={30}
            >
              Built on the Frontlines of Media Transformation
            </SplitText>

            <p className="reveal-item text-body-l mb-6 max-w-[520px] opacity-0" style={{ color: 'var(--text-secondary)' }}>
              Wisdomahead was founded on a singular observation: the world's most influential media organizations were struggling not with content, but with the systems behind it. Decades of institutional knowledge sat trapped in legacy workflows. AI promised transformation, but public, cloud-dependent solutions posed unacceptable risks to proprietary data and competitive advantage.
            </p>

            <p className="reveal-item text-body-l mb-6 max-w-[520px] opacity-0" style={{ color: 'var(--text-secondary)' }}>
              We set out to change that. Wisdomahead is the only advisory firm that combines four decades of C-suite media leadership with deep expertise in sovereign AI architecture. We don't implement off-the-shelf software. We design intelligent operational systems that are private, secure, and purpose-built for the unique demands of media enterprises.
            </p>

            <p className="reveal-item text-body-l max-w-[520px] opacity-0" style={{ color: 'var(--text-secondary)' }}>
              Our clients are selective by design. We partner with media executives who understand that operational excellence is the foundation of editorial excellence. Together, we transform how organizations move, decide, and grow.
            </p>
          </div>

          {/* Image */}
          <div ref={imageRef} className="opacity-0 lg:sticky lg:top-24 lg:self-start">
            <img
              src="/images/media-operations.jpg"
              alt="Modern media operations center"
              className="w-full object-cover transition-transform duration-700 hover:scale-105"
              style={{
                aspectRatio: '3/4',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
