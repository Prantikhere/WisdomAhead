'use client'

import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import gsap from 'gsap'
import { 
  Home, Info, Briefcase, 
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
        className="fixed top-0 left-0 w-full z-[9999] transition-all duration-500"
        style={{
 height: scrolled ? '72px' : '82px',

  background:
    'linear-gradient(90deg, rgba(32,0,0,0.96) 0%, rgba(92,8,8,0.94) 45%, rgba(48,0,0,0.96) 100%)',

  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',

  borderBottom: '1px solid rgba(255,120,120,0.12)',

  transform: 'translateZ(0)',
  willChange: 'transform, backdrop-filter',
  isolation: 'isolate',

  boxShadow: scrolled
    ? '0 10px 40px rgba(0,0,0,0.28)'
    : '0 6px 24px rgba(0,0,0,0.18)',
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
          {/* Mobile Toggle */}
<button
  onClick={() => setMobileOpen(!mobileOpen)}
  className="
    lg:hidden
    relative
    z-[110]
    w-12
    h-12
    flex
    items-center
    justify-center
    rounded-2xl
    overflow-hidden
    transition-all
    duration-500
    group
  "
  style={{
    background:
      mobileOpen
        ? 'linear-gradient(135deg, rgba(120,0,0,0.95) 0%, rgba(185,28,28,0.92) 100%)'
        : 'rgba(255,255,255,0.06)',

    border:
      mobileOpen
        ? '1px solid rgba(255,120,120,0.25)'
        : '1px solid rgba(255,255,255,0.08)',

    boxShadow: mobileOpen
      ? '0 12px 30px rgba(120,0,0,0.28)'
      : '0 6px 20px rgba(0,0,0,0.16)',

    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter:
      'blur(14px)',
  }}
>
  {/* Glow */}
  <div
    className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
    "
    style={{
      background:
        'radial-gradient(circle at center, rgba(255,80,80,0.22), transparent 70%)',
    }}
  />

  {/* Animated lines */}
  <div className="relative w-6 h-6 flex items-center justify-center">
    <span
      className="
        absolute
        w-6
        h-[2px]
        rounded-full
        transition-all
        duration-500
      "
      style={{
        background:
          'rgba(255,255,255,0.95)',

        transform: mobileOpen
          ? 'rotate(45deg)'
          : 'translateY(-7px)',
      }}
    />

    <span
      className="
        absolute
        w-6
        h-[2px]
        rounded-full
        transition-all
        duration-500
      "
      style={{
        background:
          'rgba(255,255,255,0.95)',

        opacity: mobileOpen
          ? 0
          : 1,

        transform: mobileOpen
          ? 'scaleX(0)'
          : 'scaleX(1)',
      }}
    />

    <span
      className="
        absolute
        w-6
        h-[2px]
        rounded-full
        transition-all
        duration-500
      "
      style={{
        background:
          'rgba(255,255,255,0.95)',

        transform: mobileOpen
          ? 'rotate(-45deg)'
          : 'translateY(7px)',
      }}
    />
  </div>
</button>
        </div>

       {/* --- MOBILE DROPDOWN OVERLAY --- */}
<div
  className={`fixed inset-x-0 lg:hidden transition-all duration-500 ease-out z-[100] ${
    mobileOpen
      ? 'opacity-100 visible'
      : 'opacity-0 invisible'
  }`}
  style={{
    top: scrolled
      ? '72px'
      : '82px',

    height: `calc(100vh - ${
      scrolled
        ? '72px'
        : '82px'
    })`,
  }}
>
  
  {/* PANEL */}
  <div
    className={`
      relative
      h-full
      overflow-y-auto
      px-5
      pt-5
      pb-8
      transition-all
      duration-500
      ${
        mobileOpen
          ? 'translate-y-0'
          : '-translate-y-8'
      }
    `}
    style={{
      background:
        'linear-gradient(180deg, #f4f1eb 0%, #f2ede7 40%, #efe8df 100%)',

      borderTop:
        '1px solid rgba(120,0,0,0.08)',

      boxShadow:
        '0 20px 60px rgba(0,0,0,0.12)',
    }}
  >
    {/* Ambient glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(circle at top right, rgba(120,0,0,0.06), transparent 55%)',
      }}
    />

    {/* Floating particles */}
    {[...Array(14)].map(
      (_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width:
              i % 2 === 0
                ? 4
                : 2,

            height:
              i % 2 === 0
                ? 4
                : 2,

            background:
              'rgba(140,0,0,0.18)',

            left: `${
              (i * 7.3) %
              100
            }%`,

            top: `${
              (i * 9.1) %
              100
            }%`,

            animation: `particleFloat ${
              4 +
              (i % 4)
            }s ease-in-out infinite`,
          }}
        />
      )
    )}

    {/* MENU ITEMS */}
    <div className="relative z-[2] flex flex-col gap-4">

      {navLinks.map(
        (link, i) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={(e) =>
              handleNavClick(
                e,
                link.href
              )
            }
            className="
              group
              relative
              overflow-hidden
              flex
              items-center
              justify-between
              rounded-[24px]
              p-5
              transition-all
              duration-500
            "
            style={{
              background:
                'rgba(255,255,255,0.72)',

              border:
                '1px solid rgba(120,0,0,0.08)',

              backdropFilter:
                'blur(12px)',

              WebkitBackdropFilter:
                'blur(12px)',

              boxShadow:
                '0 10px 30px rgba(120,0,0,0.04)',

              transitionDelay: `${i * 70}ms`,

              transform:
                mobileOpen
                  ? 'translateY(0px)'
                  : 'translateY(20px)',
            }}
            onMouseEnter={(
              e
            ) => {
              e.currentTarget.style.transform =
                'translateY(-3px)'

              e.currentTarget.style.borderColor =
                'rgba(120,0,0,0.18)'

              e.currentTarget.style.boxShadow =
                '0 16px 40px rgba(120,0,0,0.08)'
            }}
            onMouseLeave={(
              e
            ) => {
              e.currentTarget.style.transform =
                'translateY(0px)'

              e.currentTarget.style.borderColor =
                'rgba(120,0,0,0.08)'

              e.currentTarget.style.boxShadow =
                '0 10px 30px rgba(120,0,0,0.04)'
            }}
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              "
              style={{
                background:
                  'radial-gradient(circle at top right, rgba(120,0,0,0.05), transparent 70%)',
              }}
            />

            <div className="relative z-[2] flex items-center gap-4">

              {/* Icon */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-2xl
                  transition-all
                  duration-500
                "
                style={{
                  background:
                    'linear-gradient(135deg, rgba(120,0,0,0.10), rgba(181,22,22,0.14))',

                  border:
                    '1px solid rgba(120,0,0,0.08)',
                }}
              >
                <link.icon
                  size={22}
                  color="#7a0707"
                />
              </div>

              {/* Label */}
              <span
                style={{
                  color:
                    '#140909',

                  fontSize:
                    '1.05rem',

                  fontWeight: 700,
                }}
              >
                {link.label}
              </span>
            </div>

            {/* Arrow */}
            <ChevronRight
              size={20}
              className="
                relative
                z-[2]
                transition-all
                duration-500
                group-hover:translate-x-1
              "
              color="rgba(120,0,0,0.42)"
            />
          </Link>
        )
      )}

      {/* CTA */}
      <Link
        to="/#contact"
        onClick={() =>
          setMobileOpen(false)
        }
        className="
          relative
          overflow-hidden
          mt-3
          w-full
          py-5
          rounded-[24px]
          text-center
          text-white
          font-bold
          text-lg
          transition-all
          duration-500
          hover:scale-[1.02]
        "
        style={{
          background:
            'linear-gradient(135deg, #6f0808 0%, #b51616 100%)',

          boxShadow:
            '0 18px 40px rgba(120,0,0,0.20)',
        }}
      >
        <span className="relative z-[2]">
          Get Started
        </span>

        <div
          className="
            absolute
            inset-0
            opacity-0
            hover:opacity-100
            transition-opacity
            duration-500
          "
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.10), transparent)',
          }}
        />
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