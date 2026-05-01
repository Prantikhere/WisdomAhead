import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router'
import MeshGradientRain from '@/components/MeshGradientRain'
import SplitText from '@/components/SplitText'

export default function PageHeader() {
  const breadcrumbRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(breadcrumbRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power3.out' })
    tl.fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.2')

    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '55vh', minHeight: '420px' }}>
      <MeshGradientRain opacity={0.25} mouseReactive={true} />

      <div className="container-main relative z-[2] text-center">
        <div ref={breadcrumbRef} className="mb-8 opacity-0">
          <span className="text-label" style={{ color: 'var(--text-tertiary)' }}>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-[var(--accent-red)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              Home
            </Link>
            {' / '}
            <span>Knowledge Hub</span>
          </span>
        </div>

        <SplitText
          as="h1"
          type="lines"
          className="text-display-l text-black mb-6"
          stagger={0.08}
          duration={0.9}
          y={40}
        >
          Knowledge Hub
        </SplitText>

        <p ref={subtitleRef} className="text-h2 italic mx-auto max-w-[640px] opacity-0" style={{ color: 'var(--text-secondary)' }}>
          Strategic intelligence for media leaders navigating the sovereign AI era
        </p>
      </div>
    </section>
  )
}
