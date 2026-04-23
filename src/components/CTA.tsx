import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, type FormEvent } from 'react'

export default function CTA() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-14"
        >
          <div
            aria-hidden
            className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl"
          />

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Посмотрите клинику в одном окне
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Покажем интеграцию на ваших процессах за 30 минут.
                Без презентаций — только демо под вашу клинику.
              </p>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-accent-400/30 bg-accent-500/10 p-6 text-slate-100"
                role="status"
                aria-live="polite"
              >
                <p className="font-semibold">Заявка принята</p>
                <p className="mt-1 text-sm text-slate-300">
                  Свяжемся с вами в ближайший час в рабочее время.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-3">
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
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
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
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                />
                <button
                  type="submit"
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 text-sm font-medium hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  Получить демо
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-xs text-slate-400">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
