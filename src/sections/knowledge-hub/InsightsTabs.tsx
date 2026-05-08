import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import TiltCard from '@/components/TiltCard'
import { BookOpen, Briefcase, Layers, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const insights = [
  {
    id: 'si-1',
    category: 'strategic-insights',
    title: 'The Sovereign AI Imperative for Media Enterprises',
    excerpt: "Why the world's largest media organizations are moving away from cloud-dependent AI and toward private, sovereign intelligence architectures.",
    readTime: '8 min read',
    date: 'March 2026',
  },
  {
    id: 'si-2',
    category: 'strategic-insights',
    title: 'Operational Excellence vs. Editorial Excellence',
    excerpt: 'The hidden truth: operational friction costs media organizations more than competitive content strategy. How AI transforms the back office into a strategic asset.',
    readTime: '6 min read',
    date: 'February 2026',
  },
  {
    id: 'si-3',
    category: 'strategic-insights',
    title: 'Board-Level AI Governance: A Framework for Media CEOs',
    excerpt: 'A practical governance framework for media executives who must balance innovation velocity with data sovereignty and regulatory compliance.',
    readTime: '10 min read',
    date: 'January 2026',
  },
  {
    id: 'si-4',
    category: 'strategic-insights',
    title: 'The End of Manual Workflow: Predictive Operations in Newsrooms',
    excerpt: 'How predictive intelligence is reshaping newsroom resource allocation, supply chain forecasting, and editorial planning cycles.',
    readTime: '7 min read',
    date: 'December 2025',
  },
]

const cases = [
  {
    id: 'cs-1',
    category: 'transformation-cases',
    title: 'Transforming a Legacy Print-to-Digital Operation',
    excerpt: 'How a century-old media group reduced operational costs by 34% and accelerated digital content velocity through sovereign AI workflow orchestration.',
    industry: 'Multi-Platform Media',
    outcome: '34% cost reduction',
  },
  {
    id: 'cs-2',
    category: 'transformation-cases',
    title: 'Building a Private Intelligence Layer for Broadcast News',
    excerpt: 'Architecting a secure, on-premise AI system that transformed decades of archival footage and transcripts into a real-time editorial intelligence engine.',
    industry: 'Broadcast News',
    outcome: '60% faster research cycles',
  },
  {
    id: 'cs-3',
    category: 'transformation-cases',
    title: 'Consolidating 14 Siloed Data Systems into One AI-Native Platform',
    excerpt: 'A phased migration strategy that preserved institutional knowledge while eliminating redundant manual processes across regional news bureaus.',
    industry: 'Regional News Network',
    outcome: '12 systems decommissioned',
  },
]

const frameworks = [
  {
    id: 'fw-1',
    category: 'advisory-frameworks',
    title: 'The WISDOM Transformation Matrix',
    excerpt: 'Our proprietary 6-dimensional assessment framework for evaluating AI readiness across Workflow, Intelligence, Strategy, Data, Operations, and Management.',
    format: 'Assessment Tool',
  },
  {
    id: 'fw-2',
    category: 'advisory-frameworks',
    title: 'Sovereign AI Architecture Blueprint',
    excerpt: 'A technical and strategic blueprint for designing private AI systems that maintain full data control while enabling advanced operational intelligence.',
    format: 'Technical Guide',
  },
  {
    id: 'fw-3',
    category: 'advisory-frameworks',
    title: 'The 90-Day Executive Activation Roadmap',
    excerpt: 'A phased implementation roadmap designed for C-suite media leaders who need to demonstrate measurable AI impact within a single quarter.',
    format: 'Implementation Roadmap',
  },
  {
    id: 'fw-4',
    category: 'advisory-frameworks',
    title: 'Risk & Compliance Checklist for Media AI',
    excerpt: 'A comprehensive governance checklist covering data privacy, IP protection, regulatory compliance, and ethical AI deployment in media contexts.',
    format: 'Governance Checklist',
  },
]

const tabConfig = [
  { value: 'strategic-insights',   label: 'Strategic Insights',   icon: BookOpen,  data: insights   },
  { value: 'transformation-cases', label: 'Transformation Cases', icon: Briefcase, data: cases      },
  { value: 'advisory-frameworks',  label: 'Advisory Frameworks',  icon: Layers,    data: frameworks },
]

export default function InsightsTabs() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const tabsRef    = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState('strategic-insights')

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
      gsap.fromTo(tabsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!tabsRef.current) return
    const cards = tabsRef.current.querySelectorAll('.insight-card')
    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    )
  }, [activeTab])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        padding: 'clamp(60px, 8vw, 120px) 0',
        background: 'linear-gradient(180deg, #080606 0%, #0e0808 50%, #080606 100%)',
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', top: '15%', right: '-5%',
          width: '35vw', height: '35vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,25,25,0.07) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: '30vw', height: '30vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,50,30,0.05) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-main relative z-[2] px-4 sm:px-6">

        {/* Section header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16 opacity-0">
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6"
            style={{
              border: '1px solid rgba(200,40,30,0.3)',
              background: 'rgba(200,40,30,0.07)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Sparkles style={{ width: 14, height: 14, color: 'rgba(210,60,45,0.9)' }} />
            <span style={{ color: 'rgba(210,60,45,0.9)', fontSize: '0.62rem', letterSpacing: '0.2em', fontWeight: 700 }}>
              CURATED INTELLIGENCE
            </span>
          </div>

          <h2
            className="mb-6 text-2xl sm:text-3xl lg:text-4xl"
            style={{
              fontFamily: '"Georgia","Times New Roman",serif',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.15,
            }}
          >
            Insights for the Transformation Journey
          </h2>

          <p
            className="max-w-full sm:max-w-[600px] mx-auto text-sm sm:text-base"
            style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.8 }}
          >
            A collection of strategic perspectives, proven case studies, and actionable frameworks
            developed from four decades of media leadership and sovereign AI advisory.
          </p>
        </div>

        {/* Tabs */}
        <div ref={tabsRef} className="opacity-0">
          <Tabs defaultValue="strategic-insights" onValueChange={setActiveTab} className="w-full">

            <TabsList
              className="mx-auto mb-10 lg:mb-14 flex w-full md:w-fit h-auto p-1.5 rounded-lg overflow-x-auto"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {tabConfig.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-lg px-3 sm:px-4 md:px-6 py-2.5 whitespace-nowrap transition-all duration-300
                    data-[state=active]:shadow-sm
                    data-[state=inactive]:text-white/30
                    data-[state=inactive]:hover:text-white/55"
                  style={{ fontSize: '11px', letterSpacing: '0.12em', fontWeight: 700 }}
                  // Active state override via inline for the dark theme
                  data-state-active-style="color: rgba(220,80,60,0.95); background: linear-gradient(135deg, rgba(200,40,30,0.18), rgba(200,40,30,0.08)); border: 1px solid rgba(200,40,30,0.3);"
                >
                  <tab.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {tabConfig.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {tab.data.map((item) => (
                    <TiltCard key={item.id} tiltAmount={4} className="insight-card">
                      <div
                        className="group p-6 lg:p-8 h-full transition-all duration-500 cursor-pointer flex flex-col"
                        style={{
                          border: '1px solid rgba(255,255,255,0.07)',
                          background: 'rgba(255,255,255,0.02)',
                          backdropFilter: 'blur(8px)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(200,40,30,0.30)'
                          e.currentTarget.style.background  = 'linear-gradient(135deg, rgba(200,40,30,0.07) 0%, rgba(17,10,10,0.95) 100%)'
                          e.currentTarget.style.boxShadow   = '0 12px 48px rgba(0,0,0,0.35)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                          e.currentTarget.style.background  = 'rgba(255,255,255,0.02)'
                          e.currentTarget.style.boxShadow   = 'none'
                        }}
                      >
                        {/* Top meta row */}
                        <div className="flex items-center justify-between mb-4">
                          <span style={{ color: 'rgba(200,45,35,0.85)', fontSize: '9px', letterSpacing: '0.18em', fontWeight: 700 }}>
                            {tab.label.toUpperCase()}
                          </span>
                          {'readTime' in item && (
                            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '9px', letterSpacing: '0.1em' }}>
                              {item.readTime}
                            </span>
                          )}
                          {'format' in item && (
                            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '9px', letterSpacing: '0.1em' }}>
                              {item.format}
                            </span>
                          )}
                          {'industry' in item && (
                            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '9px', letterSpacing: '0.1em' }}>
                              {item.industry}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3
                          className="mb-3 lg:mb-4 transition-colors duration-500 text-lg sm:text-xl lg:text-2xl group-hover:text-[rgba(220,80,60,0.95)]"
                          style={{
                            fontFamily: '"Georgia","Times New Roman",serif',
                            fontWeight: 700,
                            lineHeight: 1.25,
                            color: 'rgba(255,255,255,0.88)',
                          }}
                        >
                          {item.title}
                        </h3>

                        {/* Excerpt */}
                        <p
                          className="leading-relaxed mb-6 text-sm sm:text-base flex-grow"
                          style={{ color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}
                        >
                          {item.excerpt}
                        </p>

                        {/* Bottom row */}
                        <div
                          className="flex items-center justify-between pt-4"
                          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                        >
                          {'date' in item && (
                            <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: '9px', letterSpacing: '0.1em' }}>
                              {item.date}
                            </span>
                          )}
                          {'outcome' in item && (
                            <span style={{ color: 'rgba(200,45,35,0.9)', fontSize: '9px', letterSpacing: '0.14em', fontWeight: 700 }}>
                              {item.outcome}
                            </span>
                          )}
                          {'format' in item && (
                            <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: '9px', letterSpacing: '0.1em' }}>
                              Download Available
                            </span>
                          )}

                          <span
                            className="flex items-center gap-2 transition-all duration-500 group-hover:gap-3"
                            style={{ color: 'rgba(200,45,35,0.85)', fontSize: '10px', letterSpacing: '0.14em', fontWeight: 600 }}
                          >
                            <span className="hidden sm:inline">Explore</span>
                            <span className="sm:hidden">→</span>
                            <svg
                              width="12" height="12" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" strokeWidth="2"
                              className="transition-transform duration-500 group-hover:translate-x-1 hidden sm:block"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}