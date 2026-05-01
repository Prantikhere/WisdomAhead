import { useRef, useCallback } from 'react'
import gsap from 'gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  onClick?: (e: React.MouseEvent) => void
  href?: string
  style?: React.CSSProperties
}

export default function MagneticButton({ children, className = '', strength = 0.4, onClick, href, style }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isTouch = typeof window !== 'undefined' && 'ontouchstart' in window

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    gsap.to(ref.current, { x, y, duration: 0.3, ease: 'power2.out' })
  }, [strength, isTouch])

  const handleMouseLeave = useCallback(() => {
    if (isTouch || !ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' })
  }, [isTouch])

  const inner = (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  )

  if (href) {
    return (
      <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ display: 'inline-block' }}>
        <a href={href} onClick={onClick} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          {inner}
        </a>
      </div>
    )
  }

  return inner
}
