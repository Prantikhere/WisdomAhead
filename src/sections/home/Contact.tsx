'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'
import MagneticButton from '@/components/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef    = useRef<HTMLDivElement>(null)
  const formRef    = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )

      const fields = formRef.current?.querySelectorAll('.form-field')
      if (fields) {
        gsap.fromTo(fields,
          { y: 24, opacity: 0 },
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

  /* Shared input/textarea style */
  const fieldStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 3,
    color: 'rgba(255,255,255,0.75)',
    fontFamily: 'inherit',
    fontSize: '0.82rem',
    outline: 'none',
    transition: 'border-color 0.25s ease, background 0.25s ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: 6,
    color: 'rgba(255,255,255,0.3)',
    fontSize: '0.62rem',
    letterSpacing: '0.18em',
    fontWeight: 600,
    textTransform: 'uppercase',
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0a0808 0%, #130d0d 50%, #0a0808 100%)',
        padding: 'clamp(60px, 8vw, 110px) 0',
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(150,20,20,0.1) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 40% 40% at 80% 30%, rgba(130,15,15,0.07) 0%, transparent 60%)',
        }} />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '160px 160px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT ── */}
          <div ref={leftRef} style={{ opacity: 0 }}>

            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <svg
                style={{ width: 14, height: 14, color: 'rgba(200,55,45,0.8)', flexShrink: 0 }}
                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span style={{ color: 'rgba(200,55,45,0.8)', fontSize: '0.62rem', letterSpacing: '0.22em', fontWeight: 600, textTransform: 'uppercase' }}>
                GET IN TOUCH
              </span>
            </div>

            {/* Heading */}
            <SplitText
              as="h2"
              type="lines"
              stagger={0.08}
              duration={0.9}
              y={36}
              className="mb-5 leading-tight font-bold"
              style={{
                color: '#fff',
                fontFamily: '"Georgia", "Times New Roman", serif',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                maxWidth: 420,
              }}
            >
              Ready to explore what sovereign AI can do for your organisation?
            </SplitText>

            {/* Subtext */}
            <p
              className="mb-8"
              style={{
                color: 'rgba(200,55,45,0.75)',
                fontSize: '0.82rem',
                lineHeight: 1.7,
                maxWidth: 360,
              }}
            >
              We work with a selective group of media executives — reach out to begin the conversation.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                {
                  icon: (
                    <svg style={{ width: 12, height: 12 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Quick Response',
                  desc: '24–48 hour turnaround',
                },
                {
                  icon: (
                    <svg style={{ width: 12, height: 12 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Expert Team',
                  desc: 'Media specialists only',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group p-4 transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 3,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,50,40,0.3)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div style={{ color: 'rgba(200,55,45,0.8)' }}>{card.icon}</div>
                    <span style={{ color: 'rgba(200,55,45,0.8)', fontSize: '0.62rem', letterSpacing: '0.16em', fontWeight: 600, textTransform: 'uppercase' }}>
                      {card.title}
                    </span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem' }}>{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[
                { value: '500+', label: 'Media Companies' },
                { value: '98%',  label: 'Success Rate'    },
              ].map((s, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: '"Georgia", serif',
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #e03030 0%, #e06040 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="w-full">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ border: '2px solid rgba(200,50,40,0.6)' }}
                >
                  <svg style={{ width: 22, height: 22 }} viewBox="0 0 24 24" fill="none" stroke="rgba(200,50,40,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ color: '#fff', fontFamily: '"Georgia", serif', fontSize: '1.4rem', marginBottom: 8 }}>Thank You</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>We will be in touch shortly.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

                {/* Name + Company row */}
                <div className="form-field grid grid-cols-2 gap-3" style={{ opacity: 0 }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      style={{ ...fieldStyle, padding: '10px 14px' }}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = 'rgba(200,50,40,0.5)'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      required
                      placeholder="Your company"
                      style={{ ...fieldStyle, padding: '10px 14px' }}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = 'rgba(200,50,40,0.5)'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-field" style={{ opacity: 0 }}>
                  <label style={labelStyle}>Executive Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    style={{ ...fieldStyle, padding: '10px 14px' }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = 'rgba(200,50,40,0.5)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    }}
                  />
                </div>

                {/* Context */}
                <div className="form-field" style={{ opacity: 0 }}>
                  <label style={labelStyle}>Context</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your needs..."
                    style={{ ...fieldStyle, padding: '10px 14px', resize: 'vertical' }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = 'rgba(200,50,40,0.5)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    }}
                  />
                </div>

                {/* Submit */}
                <div className="form-field" style={{ opacity: 0 }}>
                  <MagneticButton strength={0.3}>
                    <button
                      type="submit"
                      className="group relative overflow-hidden w-full flex items-center justify-center gap-3 font-semibold"
                      style={{
                        background: 'linear-gradient(135deg, #cc2828, #d94a2a)',
                        color: '#fff',
                        padding: '14px 24px',
                        borderRadius: 3,
                        fontSize: '0.72rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-1px)'
                        e.currentTarget.style.boxShadow = '0 8px 28px rgba(200,40,40,0.4)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      {/* Shine sweep */}
                      <div
                        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)', pointerEvents: 'none' }}
                      />
                      <span className="relative z-10">SUBMIT INQUIRY</span>
                      <svg
                        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                        style={{ width: 14, height: 14 }}
                        fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
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