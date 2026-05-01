import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Core Capabilities', href: '/#capabilities' },
  { label: 'Knowledge Hub', href: '/knowledge-hub' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    const els = footerRef.current.querySelectorAll('.footer-animate')
    gsap.fromTo(els,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === footerRef.current) t.kill()
      })
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative"
      style={{
        background: 'var(--off-white)',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <div className="container-main" style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="footer-animate">
            <div className="mb-3">
              <img src="/images/logo-original.png" alt="Wisdomahead" className="h-10 md:h-12 w-auto" />
            </div>
            <p className="font-sans text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)', maxWidth: '240px' }}>
              Sovereign AI Advisory for Media Enterprises
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-animate">
            <p className="text-label mb-4" style={{ color: 'var(--text-tertiary)' }}>Quick Links</p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-sans text-[14px] transition-colors duration-300 hover:text-[var(--accent-red)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-animate">
            <p className="text-label mb-4" style={{ color: 'var(--text-tertiary)' }}>Subscribe to Insights</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-10 px-3 font-sans text-[14px] bg-transparent outline-none"
                style={{ border: '1px solid rgba(0,0,0,0.12)', borderRight: 'none' }}
              />
              <button
                className="w-10 h-10 flex items-center justify-center text-white transition-colors duration-300"
                style={{ background: 'var(--black)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--black)')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-animate mt-12 pt-6 text-center md:text-left"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
          <p className="font-sans text-[13px]" style={{ color: 'var(--text-tertiary)' }}>
            &copy; 2026 Wisdomahead. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
