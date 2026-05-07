import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'



const navLinks = [

  { label: 'Home', href: '/' },

  { label: 'About', href: '/about' },

  { label: 'Capabilities', href: '/#capabilities', icon: '' },

  { label: 'Knowledge Hub', href: '/knowledge-hub' },

  { label: 'Contact', href: '/#contact', icon: '' },

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
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.95)'
            : 'rgba(255,255,255,0.85)',
          backdropFilter: scrolled
            ? 'blur(20px)'
            : 'blur(16px)',
          WebkitBackdropFilter: scrolled
            ? 'blur(20px)'
            : 'blur(16px)',
          borderBottom: scrolled
            ? '1px solid rgba(214,52,71,0.1)'
            : '1px solid rgba(0,0,0,0.05)',
          height: '64px',
          boxShadow: scrolled
            ? '0 4px 30px rgba(0,0,0,0.08)'
            : 'none',
        }}
      >
        <div className="container-main h-full flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-red)]/20 to-[var(--gradient-coral)]/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
              <img
                src="/images/logo-original.png"
                alt="Wisdomahead"
                className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto relative z-10"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-[13px] lg:text-[14px] font-medium tracking-[0.01em] text-black relative group py-2 px-3 rounded-lg transition-all duration-300 hover:bg-[var(--accent-red)]/5"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--accent-red)]">
                  {link.label}
                </span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[var(--accent-red)] to-[var(--gradient-coral)] transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="inline-flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 text-white text-[13px] lg:text-[14px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl relative overflow-hidden group rounded-lg"
              style={{ background: 'linear-gradient(135deg, var(--accent-red), var(--gradient-coral))' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 hidden sm:inline">Get Started</span>
              <span className="relative z-10 sm:hidden">Start</span>
              <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-all duration-300 hover:bg-[var(--accent-red)]/10"
            style={{ color: 'var(--accent-red)' }}
          >
            {mobileOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden absolute top-full left-0 w-full transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
          style={{
            background: 'rgba(255,255,255,0.95) backdrop-filter: blur(30px) saturate(150%)',
            borderTop: '1px solid rgba(214,52,71,0.15)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
          }}
        >
          <div className="container-main py-4 sm:py-6">
            <div className="flex flex-col gap-1 sm:gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href)
                    setMobileOpen(false)
                  }}
                  className="font-sans text-[14px] sm:text-[15px] font-medium py-3 sm:py-4 px-3 sm:px-4 rounded-lg transition-all duration-300 hover:bg-[var(--accent-red)]/5 hover:text-[var(--accent-red)]"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 sm:pt-4 mt-2 border-t border-gray-200">
                <Link
                  to="/#contact"
                  onClick={(e) => {
                    handleNavClick(e, '/#contact')
                    setMobileOpen(false)
                  }}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-3 sm:py-4 text-white text-[14px] sm:text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl relative overflow-hidden group rounded-lg"
                  style={{ background: 'linear-gradient(135deg, var(--accent-red), var(--gradient-coral))' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Get Started</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>

  )

}

