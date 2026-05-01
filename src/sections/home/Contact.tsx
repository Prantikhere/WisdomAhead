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
      className="bg-white relative"
      style={{ padding: 'clamp(120px, 14vw, 240px) 0' }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left column */}
          <div ref={leftRef}>
            <span className="text-label block mb-6" style={{ color: 'var(--accent-red)' }}>
              GET IN TOUCH
            </span>
            <SplitText
              as="h2"
              type="lines"
              className="text-h1 text-black mb-8"
              stagger={0.08}
              duration={0.9}
              y={40}
            >
              Ready to explore what sovereign AI can do for your organisation?
            </SplitText>
            <p className="text-body max-w-[400px]" style={{ color: 'var(--text-secondary)' }}>
              We work with a selective group of media executives — reach out to begin the conversation.
            </p>

            {/* Decorative vertical line */}
            <div
              className="hidden lg:block mt-16 w-px"
              style={{ height: '120px', background: 'linear-gradient(to bottom, var(--accent-red), transparent)' }}
            />
          </div>

          {/* Right column - Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ border: '2px solid var(--accent-red)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-h2 text-black mb-3">Thank You</h3>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                  We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-7">
                {[
                  { label: 'Name', type: 'text', placeholder: 'Your name' },
                  { label: 'Company', type: 'text', placeholder: 'Your company' },
                  { label: 'Executive Email', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.label} className="form-field opacity-0 group">
                    <label className="text-label block mb-3" style={{ color: 'var(--text-tertiary)' }}>{field.label}</label>
                    <input
                      type={field.type}
                      required
                      className="w-full h-14 px-5 font-sans text-body bg-transparent outline-none transition-all duration-300 focus:border-[var(--accent-red)] focus:shadow-sm"
                      style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '4px' }}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div className="form-field opacity-0">
                  <label className="text-label block mb-3" style={{ color: 'var(--text-tertiary)' }}>Context</label>
                  <textarea
                    rows={5}
                    className="w-full px-5 py-4 font-sans text-body bg-transparent outline-none transition-all duration-300 focus:border-[var(--accent-red)] focus:shadow-sm resize-vertical"
                    style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '4px' }}
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <div className="form-field opacity-0 mt-2">
                  <MagneticButton strength={0.3}>
                    <button
                      type="submit"
                      className="text-cta w-full h-14 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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
