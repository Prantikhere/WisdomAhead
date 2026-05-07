import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
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
  const location = useLocation()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      
      if (location.pathname === '/') {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      // If not on home page, let the default navigation happen
      // (react-router will navigate to / and then scroll)
    }
  }

  // Handle scroll-to-hash after navigation to home page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

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
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-red)]/10 via-transparent to-[var(--gradient-coral)]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(214,52,71,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(232,112,90,0.05),transparent_50%)]" />
      </div>
      <div className="container-main" style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
            <p 
              className="text-label mb-4 px-3 py-1 inline-block glass-effect"
              style={{ 
                color: 'var(--text-tertiary)',
                borderColor: 'rgba(0,0,0,0.1)',
                background: 'rgba(255,255,255,0.3)'
              }}
            >
              QUICK LINKS
            </p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-[14px] transition-all duration-300 hover:translate-x-1 text-gradient-hover relative"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-animate sm:col-span-2 lg:col-span-1">
            <p 
              className="text-label mb-4 px-3 py-1 inline-block glass-effect"
              style={{ 
                color: 'var(--text-tertiary)',
                borderColor: 'rgba(0,0,0,0.1)',
                background: 'rgba(255,255,255,0.3)'
              }}
            >
              STAY UPDATED
            </p>
            <p className="font-sans text-[14px] mb-4" style={{ color: 'var(--text-secondary)' }}>
              Get insights on sovereign AI and media transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-red)]/20 focus:border-[var(--accent-red)]"
                style={{ 
                  background: 'rgba(255,255,255,0.8)',
                  borderColor: 'rgba(0,0,0,0.1)'
                }}
              />
              <button className="px-4 py-2 text-sm text-white rounded-lg transition-all duration-300 hover-lift" style={{ background: 'var(--accent-red)' }}>
                Subscribe
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

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 border border-[var(--accent-red)]/10 rounded-full float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-br from-[var(--gradient-coral)]/10 to-transparent rounded-xl float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-[var(--accent-red)]/5 rounded-full blur-lg float-animation" style={{ animationDelay: '2s' }} />
      </div>
    </footer>
  )
}
