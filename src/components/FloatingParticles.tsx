import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  life: number
  maxLife: number
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  const isTouchDevice = typeof window !== 'undefined' && (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  )

  useEffect(() => {
    if (isTouchDevice) return
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!
    let w = 0
    let h = 0

    function resize() {
      w = canvas!.offsetWidth
      h = canvas!.offsetHeight
      canvas!.width = w * Math.min(window.devicePixelRatio, 2)
      canvas!.height = h * Math.min(window.devicePixelRatio, 2)
      ctx!.scale(Math.min(window.devicePixelRatio, 2), Math.min(window.devicePixelRatio, 2))
    }
    resize()
    window.addEventListener('resize', resize)

    function createParticle(): Particle {
      return {
        x: Math.random() * w,
        y: h + 10,
        size: Math.random() * 2 + 0.5,
        speedY: -(Math.random() * 0.5 + 0.15),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.4 + 0.1,
        life: 0,
        maxLife: Math.random() * 600 + 300,
      }
    }

    for (let i = 0; i < 50; i++) {
      const p = createParticle()
      p.y = Math.random() * h
      particlesRef.current.push(p)
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    function render() {
      ctx!.clearRect(0, 0, w, h)

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i]
        p.life++
        p.y += p.speedY
        p.x += p.speedX + Math.sin(p.life * 0.01) * 0.15

        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 80 && dist > 0) {
          p.x += (dx / dist) * 1.5
          p.y += (dy / dist) * 1.5
        }

        let alpha = p.opacity
        if (p.life > p.maxLife * 0.7) {
          alpha *= (1 - (p.life - p.maxLife * 0.7) / (p.maxLife * 0.3))
        }

        if (p.life >= p.maxLife || p.y < -10) {
          particlesRef.current[i] = createParticle()
          continue
        }

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(200, 50, 50, ${alpha})`
        ctx!.fill()
      }

      rafRef.current = requestAnimationFrame(render)
    }

    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 55,
        pointerEvents: 'none',
        opacity: 0.6,
      }}
    />
  )
}
