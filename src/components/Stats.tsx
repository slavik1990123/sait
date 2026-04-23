import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { value: 92, suffix: '%', label: 'сокращение ручного ввода' },
  { value: 3, suffix: '×', label: 'быстрее запись пациента' },
  { value: 100, suffix: '%', label: 'синхронизация оплат' },
  { value: 24, suffix: '/7', label: 'непрерывная работа' },
]

export default function Stats() {
  return (
    <section id="stats" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong rounded-3xl p-8 sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Результаты
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Что меняется в клинике после внедрения
            </h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <Stat key={s.label} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>
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
    const controls = animate(count, value, { duration: 1.4, delay, ease: 'easeOut' })
    return controls.stop
  }, [inView, count, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-baseline gap-1 text-white">
        <motion.span className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {rounded}
        </motion.span>
        <span className="text-2xl sm:text-3xl font-semibold text-accent-400">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </motion.div>
  )
}
