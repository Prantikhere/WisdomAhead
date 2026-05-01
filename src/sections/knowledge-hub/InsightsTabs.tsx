import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import TiltCard from '@/components/TiltCard'
import { BookOpen, Briefcase, Layers } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const insights = [
  {
    id: 'si-1',
    category: 'strategic-insights',
    title: 'The Sovereign AI Imperative for Media Enterprises',
    excerpt: 'Why the world\'s largest media organizations are moving away from cloud-dependent AI and toward private, sovereign intelligence architectures.',
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
  { value: 'strategic-insights', label: 'Strategic Insights', icon: BookOpen, data: insights },
  { value: 'transformation-cases', label: 'Transformation Cases', icon: Briefcase, data: cases },
  { value: 'advisory-frameworks', label: 'Advisory Frameworks', icon: Layers, data: frameworks },
]

export default function InsightsTabs() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
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

  const animateCards = () => {
    if (!tabsRef.current) return
    const cards = tabsRef.current.querySelectorAll('.insight-card')
    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    )
  }

  useEffect(() => {
    animateCards()
  }, [activeTab])

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ padding: 'clamp(100px, 12vw, 200px) 0' }}
    >
      <div className="container-main">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <span className="text-label block mb-5" style={{ color: 'var(--accent-red)' }}>
            CURATED INTELLIGENCE
          </span>
          <h2 className="text-h1 text-black mb-6">
            Insights for the Transformation Journey
          </h2>
          <p className="text-body-l max-w-[600px] mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A collection of strategic perspectives, proven case studies, and actionable frameworks developed from four decades of media leadership and sovereign AI advisory.
          </p>
        </div>

        <div ref={tabsRef} className="opacity-0">
          <Tabs defaultValue="strategic-insights" onValueChange={setActiveTab} className="w-full">
            <TabsList className="mx-auto mb-14 flex w-full md:w-fit h-auto p-1.5 rounded-none overflow-x-auto" style={{ background: '#f5f5f5' }}>
              {tabConfig.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="text-label rounded-none px-4 md:px-6 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-black transition-all duration-300 whitespace-nowrap"
                  style={{ fontSize: '11px', letterSpacing: '0.1em' }}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabConfig.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  {tab.data.map((item) => (
                    <TiltCard key={item.id} tiltAmount={4} className="insight-card">
                      <div
                        className="group p-8 lg:p-10 h-full transition-all duration-500 cursor-pointer"
                        style={{
                          border: '1px solid rgba(0,0,0,0.08)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(200,50,50,0.2)'
                          e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.06)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-label" style={{ color: 'var(--accent-red)', fontSize: '10px' }}>
                            {tab.label.toUpperCase()}
                          </span>
                          {'readTime' in item && (
                            <span className="text-label" style={{ color: 'var(--text-tertiary)', fontSize: '10px' }}>
                              {item.readTime}
                            </span>
                          )}
                          {'format' in item && (
                            <span className="text-label" style={{ color: 'var(--text-tertiary)', fontSize: '10px' }}>
                              {item.format}
                            </span>
                          )}
                          {'industry' in item && (
                            <span className="text-label" style={{ color: 'var(--text-tertiary)', fontSize: '10px' }}>
                              {item.industry}
                            </span>
                          )}
                        </div>

                        <h3 className="text-h2 text-black mb-4 group-hover:text-[var(--accent-red)] transition-colors duration-500">
                          {item.title}
                        </h3>

                        <p className="text-body leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                          {item.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                          {'date' in item && (
                            <span className="text-label" style={{ color: 'var(--text-tertiary)', fontSize: '10px' }}>
                              {item.date}
                            </span>
                          )}
                          {'outcome' in item && (
                            <span className="text-label" style={{ color: 'var(--accent-red)', fontSize: '10px' }}>
                              {item.outcome}
                            </span>
                          )}
                          {'format' in item && (
                            <span className="text-label" style={{ color: 'var(--text-tertiary)', fontSize: '10px' }}>
                              Download Available
                            </span>
                          )}

                          <span className="flex items-center gap-2 text-label transition-all duration-500 group-hover:gap-3" style={{ color: 'var(--accent-red)', fontSize: '11px' }}>
                            <span>Explore</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 group-hover:translate-x-1">
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
