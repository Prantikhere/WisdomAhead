import { useState, useEffect } from 'react'

export interface MobileMenuToggleEvent extends CustomEvent {
  detail: boolean
}

export default function GlobalBackdrop() {
  const [isBlurred, setIsBlurred] = useState(false)

  useEffect(() => {
    const handleMobileMenuToggle = (e: Event) => {
      const customEvent = e as MobileMenuToggleEvent
      setIsBlurred(customEvent.detail)
    }

    window.addEventListener('mobileMenuToggle', handleMobileMenuToggle as EventListener)
    
    return () => {
      window.removeEventListener('mobileMenuToggle', handleMobileMenuToggle as EventListener)
    }
  }, [])

  return (
    <div 
      className={`fixed inset-0 z-[90] transition-all duration-500 ${isBlurred ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      style={{
        background: isBlurred ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        backdropFilter: isBlurred ? 'blur(20px) saturate(180%)' : 'none'
      }}
    />
  )
}
