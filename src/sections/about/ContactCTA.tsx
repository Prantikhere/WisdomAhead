import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router'
import SplitText from '@/components/SplitText'
import MagneticButton from '@/components/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(btnRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, delay: 0.4, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/#contact')
    setTimeout(() => {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section
      ref={sectionRef}
      style={{ background: '#0A1628', padding: 'clamp(100px, 12vw, 200px) 0' }}
    >
      <div className="container-main max-w-[700px] text-center">
        <SplitText
          as="h2"
          type="lines"
          className="text-h1 text-white mb-5"
          stagger={0.08}
          duration={0.9}
          y={40}
        >
          Begin the Conversation
        </SplitText>

        <SplitText
          as="p"
          type="lines"
          className="text-body-l max-w-[520px] mx-auto mb-12"
          stagger={0.06}
          duration={0.7}
          y={30}
          delay={0.2}
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          We partner with a select group of media executives who are ready to transform their organizations. If that's you, we'd welcome the conversation.
        </SplitText>

        <div ref={btnRef} className="opacity-0">
          <MagneticButton strength={0.4}>
            <a
              href="/#contact"
              onClick={handleClick}
              className="text-cta inline-block px-12 py-5 transition-all duration-500"
              style={{
                border: '1px solid rgba(255,255,255,0.4)',
                color: 'white',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.color = '#0A1628'
                e.currentTarget.style.borderColor = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
              }}
            >
              Request a Consultation
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
