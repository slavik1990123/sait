import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import TextReveal from './TextReveal'

const steps = [
  {
    n: '01',
    title: 'Подключаем ваши аккаунты',
    text: 'Настраиваем доступ к Битрикс24 и MEDODS. Не требуются коробочные версии и программисты.',
  },
  {
    n: '02',
    title: 'Сопоставляем поля и воронки',
    text: 'Согласуем поля карточки пациента, статусы, услуги и типы оплат. Всё под ваши бизнес-процессы.',
  },
  {
    n: '03',
    title: 'Запускаем синхронизацию',
    text: 'Включаем двусторонний обмен данных, проверяем на тестовых записях, передаём в промышленную эксплуатацию.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.3'],
  })
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="how" ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">
            Как мы работаем
          </p>
          <TextReveal
            as="h2"
            text="Три шага до единого окна"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient-subtle"
          />
        </motion.div>

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-px bg-white/10"
          />
          <motion.div
            aria-hidden
            style={{ scaleX: lineScaleX, transformOrigin: '0% 50%' }}
            className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-px bg-gradient-to-r from-brand-500 via-violet-500 to-accent-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 via-violet-500 to-accent-500 text-white font-semibold shadow-lg shadow-violet-900/40"
                  >
                    {s.n}
                  </motion.span>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                </div>
                <p className="mt-4 text-slate-300 leading-relaxed text-sm">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
