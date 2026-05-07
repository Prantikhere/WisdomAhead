import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'
import MagneticButton from '@/components/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )

      const fields = formRef.current?.querySelectorAll('.form-field')
      if (fields) {
        gsap.fromTo(fields,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: formRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-white relative overflow-hidden"
      style={{ padding: 'clamp(60px, 8vw, 120px) 0' }}
    >
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-5 sm:top-10 right-2 sm:right-5 w-16 sm:w-20 lg:w-24 h-16 sm:w-20 lg:w-24 bg-gradient-to-br from-[var(--accent-red)]/5 to-transparent rounded-full blur-2xl sm:blur-3xl float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-5 sm:bottom-10 left-2 sm:left-5 w-20 sm:w-24 lg:w-32 h-20 sm:w-24 lg:w-32 bg-gradient-to-tl from-[var(--gradient-coral)]/5 to-transparent rounded-full blur-2xl sm:blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-12 sm:w-16 lg:w-20 h-12 sm:w-16 lg:w-20 bg-[var(--accent-red)]/3 rounded-full blur-lg sm:blur-xl float-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-main relative z-[2] px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center lg:items-start">
          {/* Left column */}
          <div ref={leftRef} className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--accent-red)]/10 flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-label text-xs sm:text-sm lg:text-base" style={{ color: 'var(--accent-red)' }}>
                GET IN TOUCH
              </span>
            </div>
            
            <SplitText
              as="h2"
              type="lines"
              className="text-h1 text-black mb-2 sm:mb-3 lg:mb-4 text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
              stagger={0.08}
              duration={0.9}
              y={40}
            >
              Ready to explore what sovereign AI can do for your organisation?
            </SplitText>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <p className="text-body max-w-full lg:max-w-[400px] leading-relaxed text-sm sm:text-base lg:text-lg" style={{ color: 'var(--text-secondary)' }}>
                We work with a selective group of media executives — reach out to begin the conversation.
              </p>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 lg:mt-8">
                <div className="group p-3 sm:p-4 rounded-xl border transition-all duration-300 hover:shadow-md hover:border-[var(--accent-red)]/30"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    borderColor: 'rgba(0,0,0,0.08)'
                  }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-[var(--accent-red)]/10 flex items-center justify-center group-hover:bg-[var(--accent-red)]/20 transition-colors duration-300">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-[var(--accent-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[var(--accent-red)]">Quick Response</span>
                  </div>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>24-48 hour turnaround</p>
                </div>

                <div className="group p-3 sm:p-4 rounded-xl border transition-all duration-300 hover:shadow-md hover:border-[var(--gradient-coral)]/30"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    borderColor: 'rgba(0,0,0,0.08)'
                  }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-[var(--gradient-coral)]/10 flex items-center justify-center group-hover:bg-[var(--gradient-coral)]/20 transition-colors duration-300">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-[var(--gradient-coral)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[var(--gradient-coral)]">Expert Team</span>
                  </div>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>Media specialists</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-12">
              <div className="text-center p-3 sm:p-4 rounded-xl" style={{ background: 'rgba(214,52,71,0.03)' }}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>Media Companies</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl" style={{ background: 'rgba(232,112,90,0.03)' }}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-1 sm:mb-2">98%</div>
                <div className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="w-full">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8 sm:py-12 lg:py-20 text-center">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6"
                  style={{ border: '2px solid var(--accent-red)' }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-h2 text-black mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl">Thank You</h3>
                <p className="text-body text-sm sm:text-base lg:text-lg" style={{ color: 'var(--text-secondary)' }}>
                  We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                {[
                  { label: 'Name', type: 'text', placeholder: 'Your name' },
                  { label: 'Company', type: 'text', placeholder: 'Your company' },
                  { label: 'Executive Email', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.label} className="form-field opacity-0 group">
                    <label className="text-label block mb-2 sm:mb-3 text-xs sm:text-sm" style={{ color: 'var(--text-tertiary)' }}>{field.label}</label>
                    <input
                      type={field.type}
                      required
                      className="w-full h-10 sm:h-12 lg:h-14 px-3 sm:px-4 lg:px-5 font-sans text-body bg-transparent outline-none transition-all duration-300 focus:border-[var(--accent-red)] focus:shadow-sm text-sm sm:text-base lg:text-lg"
                      style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '6px' }}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div className="form-field opacity-0">
                  <label className="text-label block mb-2 sm:mb-3 text-xs sm:text-sm" style={{ color: 'var(--text-tertiary)' }}>Context</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-4 font-sans text-body bg-transparent outline-none transition-all duration-300 focus:border-[var(--accent-red)] focus:shadow-sm resize-vertical text-sm sm:text-base lg:text-lg"
                    style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '6px' }}
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <div className="form-field opacity-0 mt-2 sm:mt-3">
                  <MagneticButton strength={0.3}>
                    <button
                      type="submit"
                      className="text-cta w-full h-10 sm:h-12 lg:h-14 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm sm:text-base lg:text-lg font-medium"
                      style={{ background: 'var(--accent-red)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-red-hover)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-red)')}
                    >
                      Submit Request
                    </button>
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}