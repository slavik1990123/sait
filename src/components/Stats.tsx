import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import TextReveal from './TextReveal'

const stats = [
  { value: 92, suffix: '%', label: 'сокращение ручного ввода' },
  { value: 3, suffix: '×', label: 'быстрее запись пациента' },
  { value: 100, suffix: '%', label: 'синхронизация оплат' },
  { value: 24, suffix: '/7', label: 'непрерывная работа' },
]

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden glass-strong rounded-3xl p-8 sm:p-14"
        >
          <div
            aria-hidden
            className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-brand-500/30 via-violet-500/20 to-transparent blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-20 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-accent-400/30 via-magenta-400/10 to-transparent blur-3xl"
          />

          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">
              Результаты
            </p>
            <TextReveal
              as="h2"
              text="Что меняется в клинике после внедрения"
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient-subtle"
            />
          </div>

          <div className="relative mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <Stat key={s.label} {...s} delay={i * 0.12} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number
  suffix: string
  label: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v).toString())

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, {
      duration: 1.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    })
    return controls.stop
  }, [inView, count, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-baseline gap-1 text-white">
        <motion.span className="text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums">
          {rounded}
        </motion.span>
        <span className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-accent-300 to-brand-400 bg-clip-text text-transparent">
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </motion.div>
  )
}
