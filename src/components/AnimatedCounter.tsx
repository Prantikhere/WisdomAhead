import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedCounter({ end, suffix = '', duration = 2, className = '', style }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    const obj = { val: 0 }

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true
        gsap.to(obj, {
          val: end,
          duration,
          ease: 'power3.out',
          onUpdate: () => {
            setValue(Math.round(obj.val))
          },
        })
      },
    })

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [end, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {value}{suffix}
    </span>
  )
}
