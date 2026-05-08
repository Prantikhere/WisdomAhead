import { useState, useEffect } from 'react'

export interface MobileMenuToggleEvent
  extends CustomEvent {
  detail: boolean
}

export default function GlobalBackdrop() {
  const [isBlurred, setIsBlurred] =
    useState(false)

  const [navHeight, setNavHeight] =
    useState(82)

  useEffect(() => {
    const handleResize = () => {
      setNavHeight(
        window.scrollY > 20
          ? 72
          : 82
      )
    }

    const handleScroll = () => {
      setNavHeight(
        window.scrollY > 20
          ? 72
          : 82
      )
    }

    handleResize()

    window.addEventListener(
      'resize',
      handleResize
    )

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      )

      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])

  useEffect(() => {
    const handleMobileMenuToggle = (
      e: Event
    ) => {
      const customEvent =
        e as MobileMenuToggleEvent

      setIsBlurred(
        customEvent.detail
      )
    }

    window.addEventListener(
      'mobileMenuToggle',
      handleMobileMenuToggle as EventListener
    )

    return () => {
      window.removeEventListener(
        'mobileMenuToggle',
        handleMobileMenuToggle as EventListener
      )
    }
  }, [])

  const handleBackdropClick = () => {
    setIsBlurred(false)

    window.dispatchEvent(
      new CustomEvent(
        'mobileMenuToggle',
        {
          detail: false,
        }
      )
    )

    document.body.style.overflow =
      'unset'
  }

  return (
    <div
      onClick={
        handleBackdropClick
      }
      className={`
        fixed
        inset-x-0
        bottom-0
        z-[90]
        transition-all
        duration-500
        lg:hidden

        ${
          isBlurred
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }
      `}
      style={{
  top: navHeight + 1,

  background: isBlurred
    ? 'rgba(20,10,8,0.18)'
    : 'transparent',

  backdropFilter:
    isBlurred
      ? 'blur(14px)'
      : 'none',

  WebkitBackdropFilter:
    isBlurred
      ? 'blur(14px)'
      : 'none',
}}
    />
  )
}