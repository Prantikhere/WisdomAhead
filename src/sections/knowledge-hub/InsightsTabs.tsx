import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'

import TiltCard from '@/components/TiltCard'

import {
  BookOpen,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const insights = [
  {
    id: 'si-1',
    category:
      'strategic-insights',
    title:
      'The Sovereign AI Imperative for Media Enterprises',
    excerpt:
      "Why the world's largest media organizations are moving away from cloud-dependent AI and toward private, sovereign intelligence architectures.",
    readTime: '8 min read',
    date: 'March 2026',
  },
  {
    id: 'si-2',
    category:
      'strategic-insights',
    title:
      'Operational Excellence vs. Editorial Excellence',
    excerpt:
      'The hidden truth: operational friction costs media organizations more than competitive content strategy. How AI transforms the back office into a strategic asset.',
    readTime: '6 min read',
    date: 'February 2026',
  },
  {
    id: 'si-3',
    category:
      'strategic-insights',
    title:
      'Board-Level AI Governance: A Framework for Media CEOs',
    excerpt:
      'A practical governance framework for media executives who must balance innovation velocity with data sovereignty and regulatory compliance.',
    readTime: '10 min read',
    date: 'January 2026',
  },
  {
    id: 'si-4',
    category:
      'strategic-insights',
    title:
      'The End of Manual Workflow: Predictive Operations in Newsrooms',
    excerpt:
      'How predictive intelligence is reshaping newsroom resource allocation, supply chain forecasting, and editorial planning cycles.',
    readTime: '7 min read',
    date: 'December 2025',
  },
]

const cases = [
  {
    id: 'cs-1',
    category:
      'transformation-cases',
    title:
      'Transforming a Legacy Print-to-Digital Operation',
    excerpt:
      'How a century-old media group reduced operational costs by 34% and accelerated digital content velocity through sovereign AI workflow orchestration.',
    industry:
      'Multi-Platform Media',
    outcome:
      '34% cost reduction',
  },
  {
    id: 'cs-2',
    category:
      'transformation-cases',
    title:
      'Building a Private Intelligence Layer for Broadcast News',
    excerpt:
      'Architecting a secure, on-premise AI system that transformed decades of archival footage and transcripts into a real-time editorial intelligence engine.',
    industry:
      'Broadcast News',
    outcome:
      '60% faster research cycles',
  },
  {
    id: 'cs-3',
    category:
      'transformation-cases',
    title:
      'Consolidating 14 Siloed Data Systems into One AI-Native Platform',
    excerpt:
      'A phased migration strategy that preserved institutional knowledge while eliminating redundant manual processes across regional news bureaus.',
    industry:
      'Regional News Network',
    outcome:
      '12 systems decommissioned',
  },
]

const frameworks = [
  {
    id: 'fw-1',
    category:
      'advisory-frameworks',
    title:
      'The WISDOM Transformation Matrix',
    excerpt:
      'Our proprietary 6-dimensional assessment framework for evaluating AI readiness across Workflow, Intelligence, Strategy, Data, Operations, and Management.',
    format:
      'Assessment Tool',
  },
  {
    id: 'fw-2',
    category:
      'advisory-frameworks',
    title:
      'Sovereign AI Architecture Blueprint',
    excerpt:
      'A technical and strategic blueprint for designing private AI systems that maintain full data control while enabling advanced operational intelligence.',
    format:
      'Technical Guide',
  },
  {
    id: 'fw-3',
    category:
      'advisory-frameworks',
    title:
      'The 90-Day Executive Activation Roadmap',
    excerpt:
      'A phased implementation roadmap designed for C-suite media leaders who need to demonstrate measurable AI impact within a single quarter.',
    format:
      'Implementation Roadmap',
  },
  {
    id: 'fw-4',
    category:
      'advisory-frameworks',
    title:
      'Risk & Compliance Checklist for Media AI',
    excerpt:
      'A comprehensive governance checklist covering data privacy, IP protection, regulatory compliance, and ethical AI deployment in media contexts.',
    format:
      'Governance Checklist',
  },
]

const tabConfig = [
  {
    value:
      'strategic-insights',
    label:
      'Strategic Insights',
    icon: BookOpen,
    data: insights,
  },
  {
    value:
      'transformation-cases',
    label:
      'Transformation Cases',
    icon: Briefcase,
    data: cases,
  },
  {
    value:
      'advisory-frameworks',
    label:
      'Advisory Frameworks',
    icon: Layers,
    data: frameworks,
  },
]

export default function InsightsTabs() {
  const sectionRef =
    useRef<HTMLElement>(null)

  const headerRef =
    useRef<HTMLDivElement>(null)

  const tabsRef =
    useRef<HTMLDivElement>(null)

  const [activeTab, setActiveTab] =
    useState(
      'strategic-insights'
    )

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',

          scrollTrigger: {
            trigger:
              sectionRef.current,

            start: 'top 82%',
          },
        }
      )

      gsap.fromTo(
        tabsRef.current,
        {
          y: 32,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: 'power3.out',

          scrollTrigger: {
            trigger:
              sectionRef.current,

            start: 'top 78%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!tabsRef.current) return

    const cards =
      tabsRef.current.querySelectorAll(
        '.insight-card'
      )

    gsap.fromTo(
      cards,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      }
    )
  }, [activeTab])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        padding:
          'clamp(110px, 12vw, 190px) 0',

        background:
          'linear-gradient(145deg, #f4f1eb 0%, #f2ede7 38%, #f7f4ef 72%, #f3f0ea 100%)',
      }}
    >
      <style>{`
        @keyframes particleFloat {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes glowPulse {
          0% {
            opacity: 0.45;
          }

          50% {
            opacity: 0.9;
          }

          100% {
            opacity: 0.45;
          }
        }

        @keyframes slowRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: '-10%',
            right: '-6%',

            width: '42vw',
            height: '42vw',

            background:
              'radial-gradient(circle, rgba(120,0,0,0.05) 0%, transparent 70%)',

            filter: 'blur(80px)',
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(120,0,0,0.35) 1px, transparent 1px)',

            backgroundSize:
              '38px 38px',
          }}
        />

        {/* Floating particles */}
        {[...Array(30)].map(
          (_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width:
                  i % 3 === 0
                    ? 4
                    : 2,

                height:
                  i % 3 === 0
                    ? 4
                    : 2,

                background:
                  i % 2 === 0
                    ? 'rgba(130,0,0,0.22)'
                    : 'rgba(180,20,20,0.14)',

                left: `${(i * 4.2) % 100}%`,
                top: `${(i * 7.4) % 100}%`,

                animation: `particleFloat ${
                  5 +
                  (i % 5)
                }s ease-in-out infinite`,

                animationDelay: `${i * 0.2}s`,
              }}
            />
          )
        )}

        {/* Decorative ring */}
        <div
          className="absolute"
          style={{
            top: '18%',
            right: '8%',

            width: 260,
            height: 260,

            border:
              '1px solid rgba(120,0,0,0.08)',

            borderRadius:
              '50%',

            animation:
              'slowRotate 24s linear infinite',
          }}
        />

        {/* Decorative node */}
        <div
          className="absolute rounded-full"
          style={{
            top: '24%',
            right: '14%',

            width: 16,
            height: 16,

            background:
              'linear-gradient(135deg, #6f0808, #b51616)',

            boxShadow:
              '0 0 20px rgba(120,0,0,0.22)',

            animation:
              'glowPulse 3s ease-in-out infinite',
          }}
        />
      </div>

      <div className="container-main relative z-[2] px-4 sm:px-6">

        {/* HEADER */}
        <div
          ref={headerRef}
          className="text-center mb-16 lg:mb-20 opacity-0"
        >
          {/* Premium pill */}
          <div
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full mb-8 transition-all duration-500 hover:scale-[1.03]"
            style={{
              border:
                '1px solid rgba(120,0,0,0.10)',

              background:
                'rgba(255,255,255,0.62)',

              backdropFilter:
                'blur(12px)',

              boxShadow:
                '0 6px 22px rgba(120,0,0,0.04)',
            }}
          >
            <Sparkles
              style={{
                width: 13,
                height: 13,
                color: '#7a0707',
              }}
            />

            <span
              style={{
                color:
                  'rgba(90,0,0,0.82)',

                fontSize:
                  '0.68rem',

                letterSpacing:
                  '0.24em',

                fontWeight: 800,

                textTransform:
                  'uppercase',
              }}
            >
              Curated Intelligence
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-6"
            style={{
              fontFamily:
                '"Georgia", serif',

              fontWeight: 700,

              fontSize:
                'clamp(2.8rem, 6vw, 5.5rem)',

              lineHeight: 1.05,

              color: '#140909',

              letterSpacing:
                '-0.04em',

              textShadow:
                '0 8px 24px rgba(120,0,0,0.05)',
            }}
          >
            Insights for the Journey
          </h2>

          {/* Ornament */}
          <div className="flex items-center justify-center gap-5 mb-7">
            <div
              className="h-px w-16"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgba(120,0,0,0.32))',
              }}
            />

            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor:
                  '#b51616',
              }}
            />

            <div
              className="h-px w-16"
              style={{
                background:
                  'linear-gradient(to left, transparent, rgba(120,0,0,0.32))',
              }}
            />
          </div>

          {/* Subtitle */}
          <p
            style={{
              color:
                'rgba(26,8,8,0.52)',

              lineHeight: 1.9,

              maxWidth: '720px',

              margin:
                '0 auto',

              fontSize:
                'clamp(1rem,2vw,1.3rem)',

              fontFamily:
                '"Georgia", serif',

              fontStyle:
                'italic',
            }}
          >
            Strategic perspectives
            and actionable
            frameworks developed
            from four decades of
            media leadership and
            AI advisory.
          </p>
        </div>

        {/* TABS */}
        <div
          ref={tabsRef}
          className="opacity-0"
        >
          <Tabs
            defaultValue="strategic-insights"
            onValueChange={
              setActiveTab
            }
            className="w-full"
          >
            {/* Tab list */}
            <TabsList
              className="mx-auto mb-14 lg:mb-16 flex w-full md:w-fit h-auto p-2 rounded-full overflow-x-auto"
              style={{
                background:
                  'rgba(255,255,255,0.65)',

                border:
                  '1px solid rgba(120,0,0,0.08)',

                backdropFilter:
                  'blur(12px)',

                boxShadow:
                  '0 10px 30px rgba(120,0,0,0.04)',
              }}
            >
              {tabConfig.map(
                (tab) => (
                  <TabsTrigger
                    key={
                      tab.value
                    }
                    value={
                      tab.value
                    }
                    className="
                      rounded-full
                      px-5 sm:px-8
                      py-3
                      whitespace-nowrap
                      transition-all
                      duration-500

                      data-[state=active]:bg-white
                      data-[state=active]:shadow-md
                      data-[state=inactive]:hover:text-[#7a0707]
                    "
                    style={{
                      fontSize:
                        '12px',

                      letterSpacing:
                        '0.1em',

                      fontWeight: 700,
                    }}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />

                    <span className="hidden sm:inline">
                      {tab.label}
                    </span>

                    <span className="sm:hidden">
                      {
                        tab.label.split(
                          ' '
                        )[0]
                      }
                    </span>
                  </TabsTrigger>
                )
              )}
            </TabsList>

            {/* Content */}
            {tabConfig.map(
              (tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="mt-0 outline-none"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {tab.data.map(
                      (item) => (
                        <TiltCard
                          key={
                            item.id
                          }
                          tiltAmount={
                            2
                          }
                          className="insight-card"
                        >
                          <div
                            className="group relative p-8 lg:p-10 h-full transition-all duration-500 cursor-pointer flex flex-col rounded-[30px] overflow-hidden"
                            style={{
                              border:
                                '1px solid rgba(120,0,0,0.08)',

                              background:
                                'rgba(255,255,255,0.78)',

                              backdropFilter:
                                'blur(12px)',

                              boxShadow:
                                '0 10px 30px rgba(120,0,0,0.03)',
                            }}
                            onMouseEnter={(
                              e
                            ) => {
                              e.currentTarget.style.borderColor =
                                'rgba(120,0,0,0.22)'

                              e.currentTarget.style.boxShadow =
                                '0 24px 60px rgba(120,0,0,0.08)'

                              e.currentTarget.style.transform =
                                'translateY(-6px)'
                            }}
                            onMouseLeave={(
                              e
                            ) => {
                              e.currentTarget.style.borderColor =
                                'rgba(120,0,0,0.08)'

                              e.currentTarget.style.boxShadow =
                                '0 10px 30px rgba(120,0,0,0.03)'

                              e.currentTarget.style.transform =
                                'translateY(0px)'
                            }}
                          >
                            {/* Glow */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                              style={{
                                background:
                                  'radial-gradient(circle at top right, rgba(120,0,0,0.05), transparent 65%)',
                              }}
                            />

                            {/* Top row */}
                            <div className="relative z-[2] flex items-center justify-between mb-7">
                              <span
                                style={{
                                  color:
                                    '#7a0707',

                                  fontSize:
                                    '10px',

                                  letterSpacing:
                                    '0.22em',

                                  fontWeight: 800,
                                }}
                              >
                                {tab.label.toUpperCase()}
                              </span>

                              <span
                                style={{
                                  color:
                                    'rgba(26,8,8,0.35)',

                                  fontSize:
                                    '10px',

                                  fontWeight: 700,
                                }}
                              >
                                {'readTime' in
                                item
                                  ? item.readTime
                                  : 'format' in
                                      item
                                    ? item.format
                                    : item.industry}
                              </span>
                            </div>

                            {/* Title */}
                            <h3
                              className="relative z-[2] mb-5 transition-colors duration-500 group-hover:text-[#7a0707]"
                              style={{
                                fontFamily:
                                  '"Georgia", serif',

                                fontWeight: 700,

                                lineHeight: 1.28,

                                color:
                                  '#140909',

                                fontSize:
                                  'clamp(1.4rem,2vw,2rem)',
                              }}
                            >
                              {
                                item.title
                              }
                            </h3>

                            {/* Excerpt */}
                            <p
                              className="relative z-[2] mb-9 flex-grow"
                              style={{
                                color:
                                  'rgba(26,8,8,0.58)',

                                lineHeight: 1.8,

                                fontSize:
                                  '0.98rem',
                              }}
                            >
                              {
                                item.excerpt
                              }
                            </p>

                            {/* Bottom */}
                            <div
                              className="relative z-[2] flex items-center justify-between pt-6"
                              style={{
                                borderTop:
                                  '1px solid rgba(120,0,0,0.08)',
                              }}
                            >
                              <span
                                style={{
                                  color:
                                    'rgba(26,8,8,0.38)',

                                  fontSize:
                                    '11px',

                                  fontWeight: 700,
                                }}
                              >
                                {'date' in
                                item
                                  ? item.date
                                  : 'outcome' in
                                      item
                                    ? item.outcome
                                    : 'Resource'}
                              </span>

                              <span
                                className="flex items-center gap-2 transition-all duration-500 group-hover:gap-4"
                                style={{
                                  color:
                                    '#7a0707',

                                  fontSize:
                                    '11px',

                                  letterSpacing:
                                    '0.16em',

                                  fontWeight: 800,

                                  textTransform:
                                    'uppercase',
                                }}
                              >
                                Explore

                                <span className="text-lg">
                                  →
                                </span>
                              </span>
                            </div>
                          </div>
                        </TiltCard>
                      )
                    )}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </div>
      </div>
    </section>
  )
}