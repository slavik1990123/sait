import { motion, useScroll, useTransform } from 'framer-motion'
import { Activity } from 'lucide-react'
import MagneticButton from './MagneticButton'

const links = [
  { label: 'Возможности', href: '#features' },
  { label: 'Как работает', href: '#how' },
  { label: 'Результаты', href: '#stats' },
  { label: 'Контакты', href: '#cta' },
]

export default function Nav() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        aria-hidden
        className="absolute inset-x-0 top-0 h-full bg-[#05060d]/60 backdrop-blur-lg border-b border-white/5"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-3">
        <div className="glass rounded-2xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight group">
            <motion.span
              whileHover={{ rotate: -12, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="relative grid place-items-center h-8 w-8 rounded-xl bg-gradient-to-br from-brand-500 via-violet-500 to-accent-500 shadow-lg shadow-violet-900/40"
            >
              <Activity className="h-4 w-4 text-white" strokeWidth={2.5} />
            </motion.span>
            <span className="text-white">MediSync</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm text-slate-300">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <MagneticButton
            href="#cta"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-950 px-4 py-2 text-sm font-medium hover:bg-slate-100 transition-colors"
            strength={0.2}
          >
            Демо
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  )
}
