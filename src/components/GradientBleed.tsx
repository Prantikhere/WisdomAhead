// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// export default function GradientBleed() {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!containerRef.current) return

//     // Skip heavy animation on mobile
//     const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
//     if (isMobile) return

//     const orbs = containerRef.current.querySelectorAll('.gradient-orb')

//     gsap.set(orbs, { scale: 0, opacity: 0 })

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: document.body,
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: 1,
//       },
//     })

//     tl.to(orbs[0], { scale: 1, opacity: 0.35, duration: 0.2 }, 0.1)
//     tl.to(orbs[1], { scale: 1, opacity: 0.35, duration: 0.2 }, 0.3)
//     tl.to(orbs[2], { scale: 1, opacity: 0.35, duration: 0.2 }, 0.5)
//     tl.to(orbs[3], { scale: 1, opacity: 0.35, duration: 0.2 }, 0.7)

//     // Continuous ambient rotation
//     // gsap.to(containerRef.current, {
//     //   rotation: 360,
//     //   duration: 120,
//     //   repeat: -1,
//     //   ease: 'none',
//     // })

//     return () => {
//       tl.kill()
//     }
//   }, [])

//   return (
//     <div
//       ref={containerRef}
//       className="pointer-events-none overflow-hidden hidden md:block"
//       style={{
//         position: 'fixed',
//         inset: 0,
//         zIndex: 50,
//       }}
//     >
//       {/* Coral */}
//       <div
//         className="gradient-orb absolute"
//         style={{
//           width: '120vw',
//           height: '120vw',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(232, 112, 90, 0.7) 0%, rgba(232, 112, 90, 0) 70%)',
//           top: '-20%',
//           left: '-20%',
//           filter: 'blur(120px)',
//           willChange: 'transform, opacity',
//         }}
//       />
//       {/* Cyan */}
//       <div
//         className="gradient-orb absolute"
//         style={{
//           width: '120vw',
//           height: '120vw',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(74, 163, 186, 0.7) 0%, rgba(74, 163, 186, 0) 70%)',
//           top: '-30%',
//           right: '-25%',
//           filter: 'blur(120px)',
//           willChange: 'transform, opacity',
//         }}
//       />
//       {/* Navy */}
//       <div
//         className="gradient-orb absolute"
//         style={{
//           width: '120vw',
//           height: '120vw',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(90, 127, 168, 0.7) 0%, rgba(90, 127, 168, 0) 70%)',
//           bottom: '-40%',
//           left: '-10%',
//           filter: 'blur(120px)',
//           willChange: 'transform, opacity',
//         }}
//       />
//       {/* Mauve */}
//       <div
//         className="gradient-orb absolute"
//         style={{
//           width: '120vw',
//           height: '120vw',
//           borderRadius: '50%',
//           background: 'radial-gradient(circle, rgba(155, 107, 138, 0.7) 0%, rgba(155, 107, 138, 0) 70%)',
//           bottom: '-35%',
//           right: '-15%',
//           filter: 'blur(120px)',
//           willChange: 'transform, opacity',
//         }}
//       />
//     </div>
//   )
// }
