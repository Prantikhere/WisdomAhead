import { Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import GrainOverlay from './components/GrainOverlay'
import FloatingParticles from './components/FloatingParticles'
import CursorSpotlight from './components/CursorSpotlight'
import PageTransition from './components/PageTransition'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <GrainOverlay />
      <FloatingParticles />
      <CursorSpotlight />
      <PageTransition>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </PageTransition>
    </SmoothScroll>
  )
}
