import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  duration?: number
  reverse?: boolean
  className?: string
}

export default function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
}: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden mask-fade-x ${className ?? ''}`}>
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        initial={{ x: reverse ? '-50%' : '0%' }}
        animate={{ x: reverse ? '0%' : '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        <div className="flex gap-10 shrink-0">{children}</div>
        <div className="flex gap-10 shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
