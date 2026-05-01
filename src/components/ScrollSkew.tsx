import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollSkew({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const lastScrollRef = useRef(0)
  const velocityRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!ref.current) return
    // Disable on touch devices
    if ('ontouchstart' in window) return

    const el = ref.current

    function tick() {
      const current = window.scrollY
      const rawVelocity = current - lastScrollRef.current
      velocityRef.current += (rawVelocity - velocityRef.current) * 0.1
      lastScrollRef.current = current

      const skew = Math.max(-2, Math.min(2, velocityRef.current * 0.05))
      el.style.transform = `skewY(${skew}deg)`

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div
      ref={ref}
      style={{
        willChange: 'transform',
        transition: 'transform 0.1s linear',
        transformOrigin: 'center center',
      }}
    >
      {children}
    </div>
  )
}
