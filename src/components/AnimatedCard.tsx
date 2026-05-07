import { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px'
  })

  useEffect(() => {
    if (!cardRef.current || !inView) return

    const card = cardRef.current
    
    // Set initial state based on direction
    let initialState: any = { opacity: 0 }
    let finalState: any = { opacity: 1, duration: 0.8, ease: 'power3.out', delay }

    switch (direction) {
      case 'up':
        initialState.y = 60
        finalState.y = 0
        break
      case 'left':
        initialState.x = -60
        finalState.x = 0
        break
      case 'right':
        initialState.x = 60
        finalState.x = 0
        break
      case 'scale':
        initialState.scale = 0.8
        finalState.scale = 1
        break
    }

    gsap.fromTo(card, initialState, finalState)

    // Add hover effect
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [inView, delay, direction])

  return (
    <div 
      ref={(el) => {
        cardRef.current = el
        ref(el)
      }}
      className={`hover-lift ${className}`}
    >
      {children}
    </div>
  )
}
