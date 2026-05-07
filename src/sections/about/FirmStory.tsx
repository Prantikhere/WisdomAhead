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
      className="bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden"
      style={{ padding: 'clamp(120px, 14vw, 240px) 0' }}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[var(--accent-red)]/5 to-transparent rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-tl from-[var(--gradient-coral)]/5 to-transparent rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-main relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text */}
          <div ref={contentRef} className="space-y-8">
            <div className="reveal-item opacity-0">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border glass-effect" style={{
                borderColor: 'rgba(214,52,71,0.2)',
                background: 'rgba(214,52,71,0.05)'
              }}>
                <svg className="w-5 h-5 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-label" style={{ color: 'var(--accent-red)' }}>
                  OUR STORY
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[var(--accent-red)]/10 to-[var(--gradient-coral)]/10 rounded-full blur-xl" />
              <SplitText
                as="h2"
                type="lines"
                className="text-h1 text-black mb-8 max-w-[540px] relative"
                stagger={0.08}
                duration={0.9}
                y={30}
              >
                Built on the Frontlines of Media Transformation
              </SplitText>
            </div>

            <div className="space-y-6">
              <p className="reveal-item text-body-l max-w-[520px] opacity-0 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Wisdomahead was founded on a singular observation: the world's most influential media organizations were struggling not with content, but with the systems behind it. Decades of institutional knowledge sat trapped in legacy workflows. AI promised transformation, but public, cloud-dependent solutions posed unacceptable risks to proprietary data and competitive advantage.
              </p>

              <p className="reveal-item text-body-l max-w-[520px] opacity-0 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We set out to change that. Wisdomahead is the only advisory firm that combines four decades of C-suite media leadership with deep expertise in sovereign AI architecture. We don't implement off-the-shelf software. We design intelligent operational systems that are private, secure, and purpose-built for the unique demands of media enterprises.
              </p>

              <p className="reveal-item text-body-l max-w-[520px] opacity-0 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Our clients are selective by design. We partner with media executives who understand that operational excellence is the foundation of editorial excellence. Together, we transform how organizations move, decide, and grow.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="reveal-item opacity-0 p-4 rounded-xl text-center" style={{ background: 'rgba(214,52,71,0.03)', border: '1px solid rgba(214,52,71,0.1)' }}>
                <div className="text-2xl font-bold gradient-text mb-2">40+</div>
                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Years Media Leadership</div>
              </div>
              <div className="reveal-item opacity-0 p-4 rounded-xl text-center" style={{ background: 'rgba(232,112,90,0.03)', border: '1px solid rgba(232,112,90,0.1)' }}>
                <div className="text-2xl font-bold gradient-text mb-2">100%</div>
                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Data Sovereignty</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="opacity-0 lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[var(--accent-red)]/10 rounded-xl rotate-12 float-animation" style={{ animationDelay: '2s' }} />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[var(--gradient-coral)]/10 to-transparent rounded-xl float-animation" style={{ animationDelay: '4s' }} />
              
              <img
                src="/images/media-operations.jpg"
                alt="Modern media operations center"
                className="w-full object-cover transition-transform duration-700 hover:scale-105 rounded-2xl"
                style={{
                  aspectRatio: '3/4',
                  boxShadow: '0 25px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1) inset',
                }}
              />
              
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
