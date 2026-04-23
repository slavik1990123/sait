import { motion } from 'framer-motion'
import { Users, Calendar, FileText, CreditCard, Stethoscope, ClipboardList } from 'lucide-react'

const leftItems = [
  { icon: Users, label: 'Клиент' },
  { icon: Calendar, label: 'Сделка' },
  { icon: CreditCard, label: 'Оплата' },
]

const rightItems = [
  { icon: Stethoscope, label: 'Пациент' },
  { icon: ClipboardList, label: 'Запись' },
  { icon: FileText, label: 'Документ' },
]

export default function SyncVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-[5/4]">
      <div className="absolute inset-0 grid-pattern opacity-40 rounded-3xl [mask-image:radial-gradient(closest-side,white,transparent)]" />

      <motion.div
        aria-hidden
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-gradient-to-br from-brand-500/30 to-accent-500/30 blur-2xl"
      />

      <div className="relative h-full grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
        <Column items={leftItems} side="left" title="Битрикс24" accent="from-brand-500 to-brand-700" />
        <CenterLink />
        <Column items={rightItems} side="right" title="MEDODS" accent="from-accent-500 to-accent-600" />
      </div>
    </div>
  )
}

function Column({
  items,
  side,
  title,
  accent,
}: {
  items: { icon: React.ComponentType<{ className?: string }>; label: string }[]
  side: 'left' | 'right'
  title: string
  accent: string
}) {
  return (
    <div className="flex flex-col items-stretch gap-3">
      <div
        className={`glass-strong rounded-xl px-3 py-2 text-center text-xs font-semibold tracking-wide uppercase bg-gradient-to-r ${accent} text-white shadow-lg shadow-brand-900/30`}
      >
        {title}
      </div>
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
          whileHover={{ y: -2 }}
          className="glass rounded-xl px-3 py-2.5 flex items-center gap-2.5"
        >
          <span className="grid place-items-center h-7 w-7 rounded-lg bg-white/5 text-slate-200 shrink-0">
            <item.icon className="h-4 w-4" />
          </span>
          <span className="text-sm text-slate-200 truncate">{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

function CenterLink() {
  return (
    <div className="relative flex flex-col items-center gap-2">
      <ArrowFlow direction="right" />
      <div className="glass-strong rounded-full h-12 w-12 sm:h-14 sm:w-14 grid place-items-center shadow-lg shadow-brand-900/40">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gradient-to-tr from-brand-500 to-accent-500"
          style={{
            maskImage:
              'conic-gradient(from 0deg, transparent 0deg, black 80deg, transparent 140deg, black 220deg, transparent 280deg)',
            WebkitMaskImage:
              'conic-gradient(from 0deg, transparent 0deg, black 80deg, transparent 140deg, black 220deg, transparent 280deg)',
          }}
        />
      </div>
      <ArrowFlow direction="left" />
    </div>
  )
}

function ArrowFlow({ direction }: { direction: 'left' | 'right' }) {
  const isRight = direction === 'right'
  return (
    <div className="relative h-5 w-24 sm:w-32 overflow-hidden">
      <div className="absolute inset-y-1/2 -translate-y-1/2 h-px w-full bg-gradient-to-r from-white/10 via-white/40 to-white/10" />
      <motion.div
        aria-hidden
        initial={{ x: isRight ? '-30%' : '110%' }}
        animate={{ x: isRight ? '110%' : '-30%' }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-y-1/2 -translate-y-1/2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-accent-400 to-transparent blur-[1px]"
      />
    </div>
  )
}
