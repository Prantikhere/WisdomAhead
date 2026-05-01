import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import gsap from 'gsap'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Core Capabilities', href: '/#capabilities' },
  { label: 'Knowledge Hub', href: '/knowledge-hub' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: 'power3.out' }
      )
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

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

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
          height: '64px',
        }}
      >
        <div className="container-main h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/images/logo-original.png"
              alt="Wisdomahead"
              className="h-8 md:h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-[14px] font-normal tracking-[0.01em] text-black hover:text-[var(--accent-red)] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="text-cta inline-block px-6 py-2.5 text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--accent-red)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-red-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-red)')}
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-black" />
            <span className="block w-6 h-px bg-black" />
            <span className="block w-6 h-px bg-black" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-[200] lg:hidden transition-opacity duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        <div
          className="absolute inset-0 bg-white"
          style={{
            transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          <div className="container-main h-full flex flex-col justify-center items-center gap-8 relative overflow-y-auto py-24">
            <button
              className="absolute top-5 right-5 p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href)
                  setMobileOpen(false)
                }}
                className="font-serif text-h2 text-black hover:text-[var(--accent-red)] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/#contact"
              onClick={() => setMobileOpen(false)}
              className="text-cta inline-block px-8 py-3 text-white mt-4"
              style={{ background: 'var(--accent-red)' }}
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
