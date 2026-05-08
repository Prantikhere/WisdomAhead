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
      {/* Red snowfall particles */}
<style>{`
  @keyframes redSnowfall {
    0% {
      transform: translateY(-120px) translateX(0px);
      opacity: 0;
    }

    10% {
      opacity: 0.22;
    }

    100% {
      transform: translateY(120vh) translateX(30px);
      opacity: 0;
    }
  }
`}</style>

<div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
  {[...Array(36)].map((_, i) => (
    <div
      key={i}
      className="absolute rounded-full"
      style={{
        width: i % 4 === 0 ? 5 : i % 3 === 0 ? 3 : 2,
        height: i % 4 === 0 ? 5 : i % 3 === 0 ? 3 : 2,

        background:
          i % 5 === 0
            ? 'rgba(232,112,90,0.55)'
            : 'rgba(214,52,71,0.45)',

        left: `${(i * 3.1) % 100}%`,
        top: `-${20 + (i % 10)}px`,

        filter: 'blur(0.3px)',

        boxShadow:
          '0 0 12px rgba(214,52,71,0.18)',

        animation: `redSnowfall ${
          9 + (i % 8)
        }s linear infinite`,

        animationDelay: `${i * 0.55}s`,

        opacity: 0,
      }}
    />
  ))}
</div>

      <main
        className="relative overflow-hidden z-[10]"
        style={{
          background:
            'linear-gradient(150deg, #ffffff 0%, #fdf5f5 45%, #fff9f7 75%, #ffffff 100%)',
        }}
      >
        {/* Global ambient animations */}
        <style>{`
          @keyframes floatOrb {
            0%,100% {
              transform: translateY(0px) translateX(0px);
            }

            50% {
              transform: translateY(-30px) translateX(20px);
            }
          }

          @keyframes pulseGlow {
            0%,100% {
              opacity: 0.4;
              transform: scale(1);
            }

            50% {
              opacity: 0.7;
              transform: scale(1.08);
            }
          }

          @keyframes floatParticle {
            0% {
              transform: translateY(0px);
              opacity: 0;
            }

            20% {
              opacity: 0.3;
            }

            100% {
              transform: translateY(-120px);
              opacity: 0;
            }
          }
        `}</style>

        {/* Floating ambient glow */}
        <div
          className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(214,52,71,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'floatOrb 12s ease-in-out infinite',
          }}
        />

        <div
          className="absolute bottom-[5%] right-[-10%] w-[35vw] h-[35vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(232,112,90,0.07) 0%, transparent 70%)',
            filter: 'blur(90px)',
            animation: 'floatOrb 14s ease-in-out infinite reverse',
          }}
        />

        {/* Floating particles */}
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: i % 3 === 0 ? 4 : 2,
              height: i % 3 === 0 ? 4 : 2,

              background:
                'linear-gradient(135deg, rgba(214,52,71,0.8), rgba(232,112,90,0.7))',

              left: `${(i * 4.8) % 100}%`,
              top: `${60 + ((i * 3.2) % 40)}%`,

              opacity: 0.18,

              boxShadow:
                '0 0 12px rgba(214,52,71,0.2)',

              animation: `floatParticle ${
                6 + (i % 5)
              }s linear infinite`,

              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '160px 160px',
          }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(214,52,71,0.25) 1px, transparent 1px)',
            backgroundSize: '38px 38px',
          }}
        />

        {/* Floating ambient layer */}
<div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">

  <style>{`
    @keyframes ambientFloat {
      0%,100% {
        transform: translateY(0px) translateX(0px);
        opacity: 0.15;
      }

      50% {
        transform: translateY(-25px) translateX(12px);
        opacity: 0.35;
      }
    }

    @keyframes linePulse {
      0%,100% {
        opacity: 0.08;
        transform: scaleX(1);
      }

      50% {
        opacity: 0.22;
        transform: scaleX(1.08);
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

  {/* Floating particles */}
  {[...Array(26)].map((_, i) => (
    <div
      key={i}
      className="absolute rounded-full"
      style={{
        width: i % 4 === 0 ? 5 : 2,
        height: i % 4 === 0 ? 5 : 2,

        background:
          'linear-gradient(135deg, rgba(214,52,71,0.8), rgba(232,112,90,0.75))',

        left: `${(i * 4.2) % 100}%`,
        top: `${(i * 5.5) % 100}%`,

        opacity: 0.16,

        boxShadow:
          '0 0 12px rgba(214,52,71,0.18)',

        animation: `ambientFloat ${
          8 + (i % 5)
        }s ease-in-out infinite`,

        animationDelay: `${i * 0.45}s`,
      }}
    />
  ))}

  {/* Vertical connection lines */}
  <div
    className="absolute left-1/2 top-[28%] -translate-x-1/2"
    style={{
      width: '1px',
      height: '220px',
      background:
        'linear-gradient(to bottom, transparent, rgba(214,52,71,0.12), transparent)',
      animation: 'linePulse 4s ease-in-out infinite',
    }}
  />

  <div
    className="absolute left-1/2 top-[58%] -translate-x-1/2"
    style={{
      width: '1px',
      height: '240px',
      background:
        'linear-gradient(to bottom, transparent, rgba(214,52,71,0.10), transparent)',
      animation: 'linePulse 5s ease-in-out infinite',
    }}
  />

  {/* Rotating orbital ring */}
  <div
    className="absolute top-[42%] right-[12%] rounded-full"
    style={{
      width: '180px',
      height: '180px',
      border:
        '1px solid rgba(214,52,71,0.06)',
      animation:
        'slowRotate 28s linear infinite',
    }}
  />

  <div
    className="absolute top-[42%] right-[12%] rounded-full"
    style={{
      width: '180px',
      height: '180px',
    }}
  >
    <div
      className="absolute rounded-full"
      style={{
        width: 8,
        height: 8,
        background:
          'rgba(214,52,71,0.7)',
        top: -4,
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow:
          '0 0 14px rgba(214,52,71,0.4)',
      }}
    />
  </div>

  {/* Soft glow */}
  <div
    className="absolute left-[10%] top-[38%] rounded-full"
    style={{
      width: '24vw',
      height: '24vw',
      background:
        'radial-gradient(circle, rgba(214,52,71,0.06), transparent 70%)',
      filter: 'blur(70px)',
    }}
  />
</div>

        <PageHeader />
        <InsightsTabs />
        <ContactCTA />
      </main>

      <Footer />
    </>
  )
}