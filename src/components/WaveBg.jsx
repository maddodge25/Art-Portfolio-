import { useEffect, useRef } from 'react'

export default function WaveBg({ amplitudeScale = 1 }) {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    const paths = Array.from(svg.querySelectorAll('path'))
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    let t = 0
    let width = svg.clientWidth
    let height = svg.clientHeight

    const resize = () => {
      width = svg.clientWidth
      height = svg.clientHeight
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
    }

    // Each wave is a sum of 2-3 sines at different frequencies & speeds.
    // Lower waves (closer to viewer) are taller and slower; upper (distant) are smaller and faster.
    const waves = [
      {
        baseY: 0.28,
        components: [
          { amp: 22, freq: 0.0040, phase: 0.0, speed: 0.50 },
          { amp: 9,  freq: 0.0095, phase: 1.2, speed: 0.40 },
        ],
      },
      {
        baseY: 0.48,
        components: [
          { amp: 17, freq: 0.0034, phase: 1.4, speed: 0.45 },
          { amp: 7,  freq: 0.0085, phase: 0.3, speed: 0.34 },
        ],
      },
      {
        baseY: 0.66,
        components: [
          { amp: 26, freq: 0.0027, phase: 2.7, speed: 0.36 },
          { amp: 10, freq: 0.0060, phase: 1.8, speed: 0.28 },
        ],
      },
      {
        baseY: 0.84,
        components: [
          { amp: 34, freq: 0.0022, phase: 4.1, speed: 0.30 },
          { amp: 13, freq: 0.0050, phase: 2.5, speed: 0.23 },
        ],
      },
    ]

    const sampleStep = 5

    const buildPath = (wave) => {
      const baseY = wave.baseY * height
      const yAt = (x) => {
        let y = baseY
        for (const c of wave.components) {
          y += c.amp * amplitudeScale * Math.sin(x * c.freq + c.phase + t * c.speed)
        }
        return y
      }
      let d = `M -20 ${yAt(-20).toFixed(2)}`
      for (let x = 0; x <= width + 20; x += sampleStep) {
        d += ` L ${x} ${yAt(x).toFixed(2)}`
      }
      return d
    }

    const draw = () => {
      for (let i = 0; i < paths.length; i++) {
        paths[i].setAttribute('d', buildPath(waves[i]))
      }
      if (!prefersReducedMotion) {
        t += 0.02
        raf = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [amplitudeScale])

  return (
    <svg ref={svgRef} className="wave-bg" preserveAspectRatio="none" aria-hidden="true">
      <path fill="none" stroke="rgba(92, 139, 137, 0.16)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path fill="none" stroke="rgba(92, 139, 137, 0.30)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path fill="none" stroke="rgba(92, 139, 137, 0.46)" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path fill="none" stroke="rgba(92, 139, 137, 0.65)" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
