import { useRef, useCallback, useState } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  tiltAmount?: number
}

export default function TiltCard({ children, className = '', style = {}, tiltAmount = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)')
  const isTouch = typeof window !== 'undefined' && 'ontouchstart' in window

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -tiltAmount
    const rotateY = (x - 0.5) * tiltAmount
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }, [tiltAmount, isTouch])

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
