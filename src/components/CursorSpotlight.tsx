import { useEffect, useRef } from 'react'

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: -200, y: -200 })
  const currentRef = useRef({ x: -200, y: -200 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    function tick() {
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.08
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.08

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(450px circle at ${currentRef.current.x}px ${currentRef.current.y}px, rgba(200, 50, 50, 0.04), transparent 70%)`
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none z-[45]"
      style={{ willChange: 'background' }}
    />
  )
}
