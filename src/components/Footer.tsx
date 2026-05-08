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
    gsap.fromTo(els,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
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
        background: '#080606',
        borderTop: '1px solid rgba(255,255,255,0.05)' 
      }}
    >
      {/* ── ATMOSPHERE LAYERS (Matching Hero) ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(200,40,30,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }} 
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '160px 160px',
          }}
        />
      </div>

      <div className="container-main relative z-10" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="footer-animate md:col-span-4 lg:col-span-5">
            <div className="mb-6">
              <img src="/images/logo-original.png" alt="Wisdomahead" className="h-10 md:h-12 w-auto brightness-0 invert" />
            </div>
            <p className="font-sans text-[15px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '300px' }}>
              Sovereign AI Advisory for Media Enterprises. Architecting the future of private intelligence.
            </p>
            
          </div>

          {/* Links Column */}
          <div className="footer-animate md:col-span-3 lg:col-span-3">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <Zap style={{ width: 10, height: 10, color: '#cc2828' }} />
              <span className="text-[10px] tracking-[0.2em] font-bold text-white/60">QUICK LINKS</span>
            </div>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-[14px] text-white/40 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <ArrowRight className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-[var(--accent-red)]" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="footer-animate md:col-span-5 lg:col-span-4">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <Mail style={{ width: 10, height: 10, color: '#cc2828' }} />
              <span className="text-[10px] tracking-[0.2em] font-bold text-white/60">STAY UPDATED</span>
            </div>
            <p className="font-sans text-[14px] mb-6 text-white/50">
              Get insights on sovereign AI and media transformation.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--accent-red)]/50 transition-all"
              />
              <button 
                className="absolute right-2 top-2 bottom-2 px-4 bg-[var(--accent-red)] hover:bg-[#e03030] text-white text-xs font-bold rounded-md transition-all uppercase tracking-wider"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-animate mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5">
          <p className="font-sans text-[12px] text-white/30 tracking-wide">
            &copy; 2026 WISDOMAHEAD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="text-[11px] text-white/20 hover:text-white/40 cursor-pointer transition-colors">PRIVACY POLICY</span>
            <span className="text-[11px] text-white/20 hover:text-white/40 cursor-pointer transition-colors">TERMS OF SERVICE</span>
          </div>
        </div>
      </div>

      {/* Decorative Accents matching Hero Frame */}
      <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-[var(--accent-red)]/40 to-transparent" />
      <div className="absolute top-0 left-0 h-20 w-px bg-gradient-to-b from-[var(--accent-red)]/40 to-transparent" />
      
      <style>{`
        @keyframes floatFooter {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .footer-node-glow {
          box-shadow: 0 0 15px rgba(200,40,30,0.2);
        }
      `}</style>
    </footer>
  )
}