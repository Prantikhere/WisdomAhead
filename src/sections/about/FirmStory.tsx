import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/SplitText'

gsap.registerPlugin(ScrollTrigger)

export default function FirmStory() {
  const sectionRef  = useRef<HTMLElement>(null)
  const imageRef    = useRef<HTMLDivElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { opacity:0, scale:1.05, clipPath:'inset(0 100% 0 0)' },
        {
          opacity:1, scale:1, clipPath:'inset(0 0% 0 0)', duration:1.4, ease:'power3.out',
          scrollTrigger:{ trigger:imageRef.current, start:'top 85%', toggleActions:'play none none none' },
        }
      )
      const items = contentRef.current?.querySelectorAll('.reveal-item')
      if (items) {
        gsap.fromTo(items,
          { y:40, opacity:0 },
          {
            y:0, opacity:1, duration:0.8, stagger:0.12, ease:'power3.out',
            scrollTrigger:{ trigger:contentRef.current, start:'top 80%', toggleActions:'play none none none' },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        padding:'clamp(120px, 14vw, 240px) 0',
        background:'linear-gradient(180deg, #080606 0%, #0e0808 60%, #080606 100%)',
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position:'absolute', top:'20%', right:'-5%',
          width:'40vw', height:'40vw', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(180,25,25,0.07) 0%, transparent 65%)',
          filter:'blur(50px)',
        }} />
        <div style={{
          position:'absolute', bottom:'15%', left:'-5%',
          width:'35vw', height:'35vw', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(200,50,30,0.05) 0%, transparent 65%)',
          filter:'blur(50px)',
        }} />
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.022]" style={{
          backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize:'160px 160px',
        }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize:'40px 40px',
        }} />
      </div>

      <div className="container-main relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Text */}
          <div ref={contentRef} className="space-y-8">

            {/* Label pill */}
            <div className="reveal-item opacity-0">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full" style={{
                border:'1px solid rgba(200,40,30,0.3)',
                background:'rgba(200,40,30,0.07)',
                backdropFilter:'blur(10px)',
              }}>
                <svg className="w-4 h-4" style={{ color:'rgba(210,60,45,0.9)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span style={{ color:'rgba(210,60,45,0.9)', fontSize:'0.62rem', letterSpacing:'0.2em', fontWeight:700 }}>
                  OUR STORY
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full blur-xl"
                style={{ background:'radial-gradient(circle, rgba(200,40,30,0.12), transparent)' }} />
              <SplitText
                as="h2"
                type="lines"
                className="relative max-w-[540px]"
                style={{
                  fontFamily:'"Georgia","Times New Roman",serif',
                  fontSize:'clamp(1.7rem,3.5vw,2.6rem)',
                  fontWeight:700,
                  lineHeight:1.15,
                  color:'rgba(255,255,255,0.9)',
                }}
                stagger={0.08}
                duration={0.9}
                y={30}
              >
                Built on the Frontlines of Media Transformation
              </SplitText>
            </div>

            {/* Body copy */}
            <div className="space-y-6">
              {[
                "Wisdomahead was founded on a singular observation: the world's most influential media organizations were struggling not with content, but with the systems behind it. Decades of institutional knowledge sat trapped in legacy workflows. AI promised transformation, but public, cloud-dependent solutions posed unacceptable risks to proprietary data and competitive advantage.",
                "We set out to change that. Wisdomahead is the only advisory firm that combines four decades of C-suite media leadership with deep expertise in sovereign AI architecture. We don't implement off-the-shelf software. We design intelligent operational systems that are private, secure, and purpose-built for the unique demands of media enterprises.",
                "Our clients are selective by design. We partner with media executives who understand that operational excellence is the foundation of editorial excellence. Together, we transform how organizations move, decide, and grow.",
              ].map((text, i) => (
                <p key={i} className="reveal-item opacity-0 max-w-[520px] leading-relaxed text-sm sm:text-base"
                  style={{ color:'rgba(255,255,255,0.40)', lineHeight:1.8 }}>
                  {text}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { value:'40+',  label:'Years Media Leadership' },
                { value:'100%', label:'Data Sovereignty' },
              ].map((stat) => (
                <div key={stat.label} className="reveal-item opacity-0 p-5 rounded-sm text-center" style={{
                  background:'rgba(200,40,30,0.05)',
                  border:'1px solid rgba(200,40,30,0.15)',
                }}>
                  <div style={{
                    fontFamily:'"Georgia",serif',
                    fontSize:'clamp(1.5rem,3vw,2rem)',
                    fontWeight:700,
                    background:'linear-gradient(135deg, #e03030, #e06040)',
                    WebkitBackgroundClip:'text',
                    WebkitTextFillColor:'transparent',
                    backgroundClip:'text',
                    marginBottom:'0.4rem',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ color:'rgba(255,255,255,0.3)', fontSize:'0.7rem', letterSpacing:'0.12em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="opacity-0 lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl rotate-12" style={{
                border:'1px solid rgba(200,40,30,0.2)',
                animation:'nodeFloat 6s ease-in-out infinite',
                animationDelay:'2s',
              }} />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl" style={{
                background:'linear-gradient(135deg, rgba(200,50,30,0.08), transparent)',
                animation:'nodeFloat 5s ease-in-out infinite',
                animationDelay:'4s',
              }} />

              <img
                src="/images/media-operations.jpg"
                alt="Modern media operations center"
                className="w-full object-cover rounded-sm"
                style={{
                  aspectRatio:'3/4',
                  transition:'transform 0.7s ease',
                  boxShadow:'0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,40,30,0.08) inset',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Image overlay */}
              <div className="absolute inset-0 rounded-sm pointer-events-none" style={{
                background:'linear-gradient(to top, rgba(8,6,6,0.5) 0%, transparent 50%)',
              }} />

              {/* Red border accent */}
              <div className="absolute inset-0 rounded-sm pointer-events-none" style={{
                border:'1px solid rgba(200,40,30,0.1)',
              }} />
            </div>
          </div>

        </div>
      </div>

      <style>{`@keyframes nodeFloat { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }`}</style>
    </section>
  )
}