import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const isHoveringRef = useRef(false)

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Make cursor visible
    dot.style.opacity = '1'
    ring.style.opacity = '1'
    document.body.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'power2.out',
      })

      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: 'power3.out',
      })
    }

    const onEnterInteractive = () => {
      if (isHoveringRef.current) return
      isHoveringRef.current = true
      gsap.to(ring, { scale: 2.2, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot, { scale: 0.5, duration: 0.2, ease: 'power2.out' })
    }

    const onLeaveInteractive = () => {
      isHoveringRef.current = false
      gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot, { scale: 1, duration: 0.2, ease: 'power2.out' })
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    // Track interactive elements
    const selectors = 'a, button, input, textarea, [data-cursor-hover]'
    const addListeners = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    }

    addListeners()
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
      document.querySelectorAll(selectors).forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
      document.body.style.cursor = ''
    }
  }, [])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0"
        style={{
          width: '8px',
          height: '8px',
          background: 'var(--accent-red)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] opacity-0"
        style={{
          width: '40px',
          height: '40px',
          border: '1px solid rgba(200, 50, 50, 0.5)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          transition: 'border-color 0.3s',
        }}
      />
      {/* Hide default cursor globally */}
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>
    </>
  )
}
