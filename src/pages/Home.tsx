import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
// import GradientBleed from '@/components/GradientBleed'
import Hero from '@/sections/home/Hero'
import WhatWeDo from '@/sections/home/WhatWeDo'
import CoreCapabilities from '@/sections/home/CoreCapabilities'
import FounderProfile from '@/sections/home/FounderProfile'
import ServicesGrid from '@/sections/home/ServicesGrid'
import Marquee from '@/sections/home/Marquee'
import WisdomDifference from '@/sections/home/WisdomDifference'
import Contact from '@/sections/home/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      {/* <GradientBleed /> */}
      <main className="relative z-[10]">
        <Hero />
        <WhatWeDo />
        <CoreCapabilities />
        <FounderProfile />
        <ServicesGrid />
        <Marquee />
        <WisdomDifference />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
