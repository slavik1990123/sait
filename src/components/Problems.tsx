import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Copy } from 'lucide-react'

const problems = [
  {
    icon: Copy,
    title: 'Двойной ввод данных',
    text: 'Администратор заносит пациента и в CRM, и в медицинскую систему. Ошибки, опечатки, потерянные записи.',
  },
  {
    icon: Clock,
    title: 'Переключение окон',
    text: 'Битрикс24 в одной вкладке, MEDODS в другой. Ответ клиенту занимает минуты вместо секунд.',
  },
  {
    icon: AlertTriangle,
    title: 'Нет единой воронки',
    text: 'Маркетинг не видит, дошёл ли лид до приёма. Руководитель не видит реальную конверсию клиники.',
  },
]

export default function Problems() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Боль клиники
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Две системы — две рутины для администратора
          </h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 h-full"
            >
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-rose-500/20 to-amber-500/20 border border-rose-400/20">
                <p.icon className="h-5 w-5 text-rose-300" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-300 leading-relaxed text-sm">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
