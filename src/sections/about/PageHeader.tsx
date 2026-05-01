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
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '60vh', minHeight: '450px' }}>
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
            <span>About</span>
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
          About Wisdomahead
        </SplitText>

        <p ref={subtitleRef} className="text-h2 italic mx-auto max-w-[600px] opacity-0" style={{ color: 'var(--text-secondary)' }}>
          Where media legacy meets sovereign intelligence
        </p>
      </div>
    </section>
  )
}
