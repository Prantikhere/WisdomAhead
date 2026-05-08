import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
// import GradientBleed from '@/components/GradientBleed'
import PageHeader from '@/sections/about/PageHeader'
import FirmStory from '@/sections/about/FirmStory'
import Methodology from '@/sections/about/Methodology'
import LeadershipPhilosophy from '@/sections/about/LeadershipPhilosophy'
import ContactCTA from '@/sections/about/ContactCTA'

export default function About() {
  return (
    <>
      <Navigation />
      {/* <GradientBleed /> */}
      <main className="relative z-[10]">
        <PageHeader />
        <FirmStory />
        <Methodology />
        <LeadershipPhilosophy />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
