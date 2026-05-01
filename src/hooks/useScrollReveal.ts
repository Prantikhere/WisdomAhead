import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal<T extends HTMLElement>(
  options: {
    y?: number
    x?: number
    duration?: number
    delay?: number
    stagger?: number
    scale?: number
    start?: string
    ease?: string
    children?: boolean
  } = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const {
      y = 40,
      x = 0,
      duration = 0.8,
      delay = 0.2,
      stagger = 0.12,
      scale,
      start = 'top 85%',
      ease = 'power3.out',
      children = false,
    } = options

    const targets = children
      ? ref.current.children
      : ref.current

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y,
      x,
    }

    if (scale !== undefined) {
      fromVars.scale = scale
    }

    const tween = gsap.fromTo(
      targets,
      fromVars,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: scale !== undefined ? 1 : undefined,
        duration,
        delay,
        stagger: children ? stagger : 0,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      tween.kill()
    }
  }, [])

  return ref
}

export function useParallax<T extends HTMLElement>(speed: number = -3) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const tween = gsap.to(ref.current, {
      yPercent: speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tween.kill()
    }
  }, [speed])

  return ref
}
