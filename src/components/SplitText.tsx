import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SplitTextProps {
  children: string
  className?: string
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'span'
  type?: 'words' | 'lines'
  stagger?: number
  duration?: number
  y?: number
  delay?: number
  triggerStart?: string
  style?: React.CSSProperties
}

export default function SplitText({
  children,
  className = '',
  as: Tag = 'div',
  type = 'lines',
  stagger = 0.08,
  duration = 0.8,
  y = 60,
  delay = 0,
  triggerStart = 'top 85%',
  style,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const parts = type === 'words'
      ? ref.current.querySelectorAll('.split-word')
      : ref.current.querySelectorAll('.split-line')

    const ctx = gsap.context(() => {
      gsap.fromTo(parts,
        { y, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration,
          stagger,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: triggerStart,
            toggleActions: 'play none none none',
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [type, stagger, duration, y, delay, triggerStart])

  const splitContent = () => {
    if (type === 'words') {
      return children.split(' ').map((word, i) => (
        <span
          key={i}
          className="split-word inline-block mr-[0.3em] opacity-0"
          style={{ transformOrigin: 'center bottom' }}
        >
          {word}
        </span>
      ))
    }

    // Lines mode - split by explicit newlines or auto-wrap
    const lines = children.split('\n')
    return lines.map((line, i) => (
      <span
        key={i}
        className="split-line block overflow-hidden opacity-0"
        style={{ perspective: '1000px' }}
      >
        <span className="inline-block" style={{ transformOrigin: 'center bottom' }}>
          {line}
        </span>
      </span>
    ))
  }

  return (
    <Tag ref={ref as any} className={className} style={style}>
      {splitContent()}
    </Tag>
  )
}
