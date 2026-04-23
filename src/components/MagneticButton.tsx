import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  strength?: number
}

export default function MagneticButton({
  children,
  href,
  className,
  onClick,
  type = 'button',
  strength = 0.25,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 })

  function handleMove(e: MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }
  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const motionProps = {
    style: { x: springX, y: springY },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className,
    ref: ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>,
  }

  if (href) {
    return (
      <motion.a href={href} onClick={onClick} {...motionProps}>
        {children}
      </motion.a>
    )
  }
  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  )
}
