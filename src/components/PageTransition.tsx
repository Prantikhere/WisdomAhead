import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import gsap from 'gsap'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pendingPath = useRef<string | null>(null)

  // Handle actual navigation changes
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname && !isTransitioning) {
      // Navigation happened externally - animate in
      setDisplayLocation(location)
      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.1 }
        )
      }
      window.scrollTo(0, 0)
    }
  }, [location])

  useEffect(() => {
    // Initial page load animation
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      )
    }
  }, [])

  // Intercept all link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return
      if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto')) return
      if (href === location.pathname) return

      e.preventDefault()
      pendingPath.current = href

      setIsTransitioning(true)

      // Animate out
      const tl = gsap.timeline({
        onComplete: () => {
          setDisplayLocation({ ...location, pathname: pendingPath.current! })
          navigate(pendingPath.current!)
          window.scrollTo(0, 0)

          // Animate overlay away
          gsap.to(overlayRef.current, {
            yPercent: -100,
            duration: 0.6,
            ease: 'power3.inOut',
            delay: 0.05,
            onComplete: () => {
              gsap.set(overlayRef.current, { yPercent: 100 })
              setIsTransitioning(false)
            },
          })

          // Animate content in
          if (contentRef.current) {
            gsap.fromTo(contentRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.3 }
            )
          }
        },
      })

      tl.to(contentRef.current, { opacity: 0, y: -20, duration: 0.3, ease: 'power2.in' })
      tl.to(overlayRef.current, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' }, '-=0.1')
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [location, navigate])

  return (
    <>
      {/* Transition Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[300] pointer-events-none"
        style={{
          background: '#0A1628',
          transform: 'translateY(100%)',
          willChange: 'transform',
        }}
      />

      {/* Content */}
      <div ref={contentRef}>{children}</div>
    </>
  )
}
