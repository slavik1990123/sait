import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { SplineScene } from './SplineScene'
import TextReveal from './TextReveal'
import MagneticButton from './MagneticButton'

const SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96])

  return (
    <section ref={ref} className="relative pt-28 sm:pt-36 pb-16 sm:pb-24">
      <motion.div style={{ y, opacity, scale }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-8 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur"
            >
              <span className="relative grid place-items-center h-4 w-4">
                <Sparkles className="h-3.5 w-3.5 text-accent-400" />
              </span>
              Двусторонняя синхронизация в реальном времени
            </motion.div>

            <TextReveal
              as="h1"
              text="Битрикс24 и MEDODS — одна клиника, одно окно"
              className="mt-6 text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.02] tracking-tight text-gradient"
            />

            <TextReveal
              as="p"
              delay={0.35}
              text="Полная двусторонняя интеграция CRM и медицинской системы. Администраторы работают в одном окне, пациенты и записи синхронизируются автоматически. Ноль ручного дублирования."
              className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed"
            />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href="#cta"
                className="group relative inline-flex items-center gap-2 rounded-2xl bg-white text-slate-950 px-5 py-3 text-sm font-medium overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Получить демо
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-400 via-violet-400 to-accent-400 transition-transform duration-500 group-hover:translate-x-0" />
              </MagneticButton>

              <MagneticButton
                href="#how"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-white/20 transition-colors"
                strength={0.15}
              >
                Как это работает
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-12 flex items-center gap-7 text-xs text-slate-400"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
                </span>
                Сервис работает 24/7
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div>Запуск за 3 рабочих дня</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[460px] sm:h-[520px] lg:h-[620px]"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-brand-500/20 via-violet-500/10 to-accent-400/20 blur-3xl" />
            </div>
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <SplineScene
                scene={SPLINE_SCENE}
                className="!h-full !w-full"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05060d] to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
