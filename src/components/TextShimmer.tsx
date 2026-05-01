export default function TextShimmer({ children, className = '', style = {} }: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <span
      className={className}
      style={{
        ...style,
        background: 'linear-gradient(90deg, var(--accent-red) 0%, #ff6b6b 25%, var(--accent-red) 50%, #a82828 75%, var(--accent-red) 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'textShimmer 3s linear infinite',
        display: 'inline-block',
      }}
    >
      {children}
      <style>{`
        @keyframes textShimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </span>
  )
}
