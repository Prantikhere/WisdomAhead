'use client'

import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import gsap from 'gsap'
import { 
  Menu, X, Home, Info, Briefcase, 
  BookOpen, Mail, ChevronRight 
} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Capabilities', href: '/#capabilities', icon: Briefcase },
  { label: 'Knowledge Hub', href: '/knowledge-hub', icon: BookOpen },
  { label: 'Contact', href: '/#contact', icon: Mail },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out' }
      )
    }
  }, [])

  // Sync Mobile State with Global Backdrop & Scroll Lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
    window.dispatchEvent(new CustomEvent('mobileMenuToggle', { detail: mobileOpen }))
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      if (location.pathname === '/') {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
        style={{
          height: scrolled ? '85px' : '105px', // Increased height to fit larger logo
          background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(220, 38, 38, 0.2)' : '1px solid transparent',
        }}
      >
        <div className="container-main h-full flex items-center justify-between px-6">
          {/* --- BIGGER LOGO --- */}
          <Link to="/" className="relative z-[110] transition-transform hover:scale-105">
            <img
              src="/images/logo-original.png"
              alt="Wisdomahead"
              className="h-10 sm:h-12 lg:h-14 w-auto brightness-0 invert object-contain" 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center gap-2 text-[15px] font-medium text-white/70 hover:text-[var(--accent-red)] transition-all duration-300 group"
              >
                <link.icon size={16} className="text-white/30 group-hover:text-[var(--accent-red)] transition-colors" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA - Red Ombre Gradient (Cleaned) */}
          <div className="hidden lg:block">
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="relative px-7 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] overflow-hidden group block"
              style={{ background: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)' }}
            >
              <span className="relative z-10 transition-all duration-300 group-hover:tracking-wide">
                Get Started
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[110] p-2 bg-white/5 rounded-lg text-white transition-colors hover:bg-red-600/20"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN OVERLAY --- */}
        <div 
          className={`fixed inset-0 lg:hidden transition-all duration-700 ease-in-out ${
            mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {/* Note: The main blur comes from your GlobalBackdrop component */}
          <div 
            className={`relative w-full bg-gradient-to-b from-[#0a0a0a] to-transparent border-b border-red-900/30 px-6 pt-28 pb-12 transition-transform duration-500 ${
              mobileOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/50 hover:bg-red-500/10 transition-all group"
                  style={{ 
                    transitionDelay: `${i * 50}ms`,
                    transform: mobileOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                      <link.icon size={22} />
                    </div>
                    <span className="text-lg font-medium text-white">{link.label}</span>
                  </div>
                  <ChevronRight size={18} className="text-white/20 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
              
              <Link
                to="/#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-full py-5 rounded-xl text-center text-white font-bold text-lg shadow-lg"
                style={{ background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* FIXED CSS BLOCK (No 'jsx' attribute to avoid TS errors) */}
      <style>{`
        nav { will-change: height, background, backdrop-filter; }
        .container-main { max-width: 1400px; margin: 0 auto; }
      `}</style>
    </>
  )
}