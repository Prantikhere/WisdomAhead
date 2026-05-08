import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router'
import MeshGradientRain from '@/components/MeshGradientRain'
import SplitText from '@/components/SplitText'

export default function PageHeader() {
  const breadcrumbRef = useRef<HTMLDivElement>(null)
  const subtitleRef   = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(breadcrumbRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power3.out' })
    tl.fromTo(subtitleRef.current,   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height: 'clamp(340px, 52vh, 520px)',
        minHeight: '340px',
        background: 'linear-gradient(160deg, #080606 0%, #110a0a 55%, #080606 100%)',
      }}
    >
      <style>{`
        @keyframes fall        { to { transform: translateY(calc(100vh + 20px)); } }
        @keyframes nodeFloat   { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-6px); } }
        @keyframes scrollLine  {
          0%   { transform:scaleY(0); transform-origin:top; }
          50%  { transform:scaleY(1); transform-origin:top; }
          50.1%{ transform-origin:bottom; }
          100% { transform:scaleY(0); transform-origin:bottom; }
        }
      `}</style>

      {/* MeshGradientRain sits on top of the dark bg */}
      <MeshGradientRain opacity={0.18} mouseReactive={true} />

      {/* Atmosphere glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '5%', left: '-8%',
          width: '50vw', height: '50vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,25,25,0.11) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-5%', right: '-5%',
          width: '40vw', height: '40vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,50,30,0.07) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />

        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
        }} />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} />

        {/* Falling red particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${(i * 10.3) % 100}%`,
              top: '-8px',
              width: i % 3 === 0 ? 2 : 1,
              height: i % 3 === 0 ? 2 : 1,
              background: 'rgba(200,45,35,0.45)',
              animation: `fall ${3.5 + (i * 0.41) % 3.5}s linear infinite`,
              animationDelay: `${(i * 0.37) % 5}s`,
            }}
          />
        ))}

        {/* Floating orbs */}
        <div
          className="absolute top-5 sm:top-10 left-2 sm:left-5 w-8 h-8 sm:w-12 sm:h-12 rounded-full"
          style={{
            border: '1px solid rgba(200,40,30,0.15)',
            animation: 'nodeFloat 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-5 sm:bottom-10 right-2 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(200,50,30,0.08), transparent)',
            animation: 'nodeFloat 5s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-4 h-4 sm:w-6 sm:h-6 rounded-full blur-lg"
          style={{
            background: 'rgba(200,40,30,0.06)',
            animation: 'nodeFloat 7s ease-in-out infinite',
            animationDelay: '3s',
          }}
        />
      </div>

      {/* Thin decorative frame */}
      <div className="absolute pointer-events-none" style={{
        top: 20, left: 20, right: 20, bottom: 20,
        border: '1px solid rgba(255,255,255,0.04)',
        borderRadius: 2,
      }} />
      {/* Corner accents */}
      {([
        { top: 20, left: 20 },
        { top: 20, right: 20 },
        { bottom: 20, left: 20 },
        { bottom: 20, right: 20 },
      ] as React.CSSProperties[]).map((pos, i) => (
        <div key={i} className="absolute pointer-events-none" style={{
          ...pos, width: 18, height: 18,
          borderTop:    i < 2  ? '1px solid rgba(200,40,30,0.35)' : undefined,
          borderBottom: i >= 2 ? '1px solid rgba(200,40,30,0.35)' : undefined,
          borderLeft:   i % 2 === 0 ? '1px solid rgba(200,40,30,0.35)' : undefined,
          borderRight:  i % 2 === 1 ? '1px solid rgba(200,40,30,0.35)' : undefined,
        }} />
      ))}

      {/* Content */}
      <div className="container-main relative z-[2] text-center px-3 sm:px-4 md:px-6 w-full">

        {/* Breadcrumb pill */}
        <div ref={breadcrumbRef} className="mb-4 sm:mb-6 opacity-0">
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
            style={{
              border: '1px solid rgba(200,40,30,0.3)',
              background: 'rgba(200,40,30,0.07)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'rgba(210,60,45,0.9)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <Link
              to="/"
              className="transition-colors duration-300 text-xs sm:text-sm"
              style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(210,60,45,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              Home
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }} className="text-xs sm:text-sm">•</span>
            <span style={{ color: 'rgba(210,60,45,0.9)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.15em' }}>
              KNOWLEDGE HUB
            </span>
          </div>
        </div>

        {/* H1 via SplitText */}
        <div className="relative block w-full mb-3 sm:mb-4 lg:mb-6">
          <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full blur-xl"
            style={{ background: 'radial-gradient(circle, rgba(200,40,30,0.12), transparent)' }}
          />
          <SplitText
            as="h1"
            type="lines"
            className="relative block w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            style={{
              fontFamily: '"Georgia","Times New Roman",serif',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #e03030 0%, #e06040 60%, rgba(255,255,255,0.85) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            stagger={0.08}
            duration={0.9}
            y={40}
          >
            Knowledge Hub
          </SplitText>
        </div>

        {/* Divider ornament */}
        <div className="relative block w-full">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-5">
            <div className="w-4 sm:w-6 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,40,30,0.6))' }} />
            <svg className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'rgba(200,50,40,0.75)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="w-4 sm:w-6 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(200,40,30,0.6))' }} />
          </div>
          <p
            ref={subtitleRef}
            className="mx-auto opacity-0 block px-2 text-base sm:text-lg lg:text-xl"
            style={{
              fontFamily: '"Georgia",serif',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.38)',
              lineHeight: 1.75,
              maxWidth: '640px',
            }}
          >
            Strategic intelligence for media leaders navigating the sovereign AI era
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.58rem', letterSpacing: '0.22em', fontWeight: 600, textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div className="relative flex flex-col items-center" style={{ height: 36 }}>
          <div className="w-px" style={{
            height: 28,
            background: 'linear-gradient(to bottom, rgba(200,45,35,0.6), transparent)',
            animation: 'scrollLine 2s ease-in-out infinite',
          }} />
          <div className="absolute bottom-0 rounded-full" style={{ width: 4, height: 4, background: 'rgba(200,45,35,0.8)' }} />
        </div>
      </div>
    </section>
  )
}