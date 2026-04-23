import { motion } from 'framer-motion'

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
  return (
    <section id="how" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Как мы работаем
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Три шага до единого окна
          </h2>
        </motion.div>

        <div className="mt-12 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
          <div className="grid lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="relative glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white font-semibold shadow-lg shadow-brand-900/40">
                    {s.n}
                  </span>
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
