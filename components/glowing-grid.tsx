"use client"

export function GlowingGrid() {
  const gridSize = 20
  const lines = Array.from({ length: gridSize }, (_, i) => i)

  return (
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {lines.map((i) => (
          <line
            key={`v-${i}`}
            x1={`${(i * 100) / gridSize}%`}
            y1="0%"
            x2={`${(i * 100) / gridSize}%`}
            y2="100%"
            stroke="url(#gridGradient)"
            strokeWidth="1"
            filter="url(#glow)"
            opacity="0.2"
          />
        ))}

        {lines.map((i) => (
          <line
            key={`h-${i}`}
            x1="0%"
            y1={`${(i * 100) / gridSize}%`}
            x2="100%"
            y2={`${(i * 100) / gridSize}%`}
            stroke="url(#gridGradient)"
            strokeWidth="1"
            filter="url(#glow)"
            opacity="0.2"
          />
        ))}
      </svg>

      <div className="absolute inset-0">
        {lines.slice(0, 8).map((i) =>
          lines.slice(0, 8).map((j) => (
            <div
              key={`point-${i}-${j}`}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${(i * 100) / 8}%`,
                top: `${(j * 100) / 8}%`,
                transform: "translate(-50%, -50%)",
                animationDelay: `${(i + j) * 0.2}s`,
              }}
            />
          )),
        )}
      </div>
    </div>
  )
}
