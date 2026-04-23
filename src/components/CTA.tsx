import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import MagneticButton from './MagneticButton'
import TextReveal from './TextReveal'

export default function CTA() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-14"
        >
          <motion.div
            aria-hidden
            animate={{
              x: ['-8%', '8%', '-8%'],
              y: ['0%', '10%', '0%'],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -right-20 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-brand-500/40 via-violet-500/30 to-transparent blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={{
              x: ['8%', '-8%', '8%'],
              y: ['0%', '-10%', '0%'],
            }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-40 -left-20 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-accent-400/40 via-magenta-400/20 to-transparent blur-3xl"
          />

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <TextReveal
                as="h2"
                text="Посмотрите клинику в одном окне"
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient-subtle"
              />
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 text-slate-300 leading-relaxed"
              >
                Покажем интеграцию на ваших процессах за 30 минут.
                Без презентаций — только демо под вашу клинику.
              </motion.p>
            </div>

            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-accent-400/30 bg-accent-500/10 p-6 text-slate-100"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 240, damping: 16 }}
                    className="grid place-items-center h-10 w-10 rounded-full bg-accent-500/30"
                  >
                    <Check className="h-5 w-5 text-accent-300" />
                  </motion.span>
                  <p className="font-semibold">Заявка принята</p>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  Свяжемся с вами в ближайший час в рабочее время.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-3"
              >
                <label className="sr-only" htmlFor="name">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Имя"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                />
                <label className="sr-only" htmlFor="phone">
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                />
                <MagneticButton
                  type="submit"
                  className="group relative mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3.5 text-sm font-medium overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Получить демо
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-400 via-violet-400 to-accent-400 transition-transform duration-500 group-hover:translate-x-0" />
                </MagneticButton>
                <p className="text-xs text-slate-400">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
