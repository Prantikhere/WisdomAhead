import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
// import GradientBleed from '@/components/GradientBleed'
import PageHeader from '@/sections/knowledge-hub/PageHeader'
import InsightsTabs from '@/sections/knowledge-hub/InsightsTabs'
import ContactCTA from '@/sections/about/ContactCTA'

export default function KnowledgeHub() {
  return (
    <>
      <Navigation />
      {/* <GradientBleed /> */}
      <main className="relative z-[10]" style={{ background: '#080606' }}>
        <PageHeader />
        <InsightsTabs />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}