'use client'

import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Mail, ArrowRight } from 'lucide-react'

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
    }
  }

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
    const ctx = gsap.context(() => {
      gsap.fromTo(els,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{ 
        // Cohesive Reddish-Black Ombre
        background: 'linear-gradient(110deg, #070505 0%, #0a0a0a 40%, #1a0404 100%)',
        borderTop: '1px solid rgba(214,52,71,0.1)' 
      }}
    >
      {/* ── ATMOSPHERE LAYERS ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle top-down light leak */}
        <div className="absolute top-0 left-1/4 w-[50vw] h-[30vh] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(214,52,71,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }} 
        />
        
        {/* Fine Digital Grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '160px 160px',
          }}
        />

        {/* Structural Grid Detail */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #d63447 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-main relative z-10" style={{ padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Brand Column */}
          <div className="footer-animate md:col-span-4 lg:col-span-5">
            <div className="mb-8">
              <img src="/images/logo-original.png" alt="Wisdomahead" className="h-10 md:h-11 w-auto brightness-0 invert opacity-90" />
            </div>
            <p className="font-sans text-[14px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '320px' }}>
              Sovereign AI Advisory for Media Enterprises. Architecting the future of private intelligence through strategic engineering.
            </p>
          </div>

          {/* Links Column */}
          <div className="footer-animate md:col-span-3 lg:col-span-3">
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-red-900/30 bg-red-950/20">
              <Zap style={{ width: 10, height: 10, color: '#d63447' }} />
              <span className="text-[9px] tracking-[0.25em] font-bold text-red-500/80 uppercase">Quick Links</span>
            </div>
            <div className="flex flex-col gap-5">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-[13px] text-white/40 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 overflow-hidden group-hover:w-5 group-hover:opacity-100 opacity-0 transition-all duration-300 text-[#d63447]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 uppercase tracking-widest text-[11px] font-medium">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="footer-animate md:col-span-5 lg:col-span-4">
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-red-900/30 bg-red-950/20">
              <Mail style={{ width: 10, height: 10, color: '#d63447' }} />
              <span className="text-[9px] tracking-[0.25em] font-bold text-red-500/80 uppercase">Stay Updated</span>
            </div>
            <p className="font-sans text-[14px] mb-7 text-white/50 leading-relaxed">
              Subscribe for exclusive insights on sovereign AI and the transformation of media intelligence.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/[0.03] border border-white/10 rounded-full px-6 py-4 text-[11px] tracking-widest text-white focus:outline-none focus:border-[#d63447]/40 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
              />
              <button 
                className="absolute right-2 top-2 bottom-2 px-6 bg-[#cc2828] hover:bg-[#e03030] text-white text-[10px] font-bold rounded-full transition-all uppercase tracking-[0.15em]"
                style={{
                  boxShadow: '0 4px 15px rgba(204,40,40,0.25)',
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-animate mt-24 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/[0.03]">
          <p className="font-sans text-[10px] text-white/20 tracking-[0.2em] font-medium">
            &copy; 2026 WISDOMAHEAD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <span className="text-[10px] text-white/20 hover:text-red-500/60 tracking-[0.15em] cursor-pointer transition-colors font-medium">PRIVACY POLICY</span>
            <span className="text-[10px] text-white/20 hover:text-red-500/60 tracking-[0.15em] cursor-pointer transition-colors font-medium">TERMS OF SERVICE</span>
          </div>
        </div>
      </div>

      {/* Luxury Framing Details */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d63447]/20 to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-[#d63447]/30 to-transparent" />
      <div className="absolute top-0 right-0 h-32 w-px bg-gradient-to-b from-[#d63447]/30 to-transparent" />
      
      <style>{`
        @keyframes subtleRedPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .footer-node-glow {
          box-shadow: 0 0 20px rgba(214,52,71,0.15);
        }
      `}</style>
    </footer>
  )
}