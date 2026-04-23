import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const springX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.6 })

  const translateX = useTransform(springX, (v) => `${v - 180}px`)
  const translateY = useTransform(springY, (v) => `${v - 180}px`)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (reduce || coarse) return
    setEnabled(true)

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[5] h-[360px] w-[360px] rounded-full"
      style={{
        x: translateX,
        y: translateY,
        background:
          'radial-gradient(circle, rgba(139,92,246,0.22), rgba(62,224,200,0.1) 40%, transparent 70%)',
        filter: 'blur(20px)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
