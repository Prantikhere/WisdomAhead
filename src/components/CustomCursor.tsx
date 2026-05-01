import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const isHoveringRef = useRef(false)

  const isTouchDevice = typeof window !== 'undefined' && (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  )

  useEffect(() => {
    if (isTouchDevice) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

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
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <>
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
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>
    </>
  )
}
