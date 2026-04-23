import { motion } from 'framer-motion'
import {
  RefreshCw,
  UserCheck,
  CalendarClock,
  Wallet,
  MessageSquare,
  BarChart3,
} from 'lucide-react'

const features = [
  {
    icon: RefreshCw,
    title: 'Двусторонняя синхронизация',
    text: 'Любое изменение в Битрикс24 мгновенно отражается в MEDODS и наоборот. Без задержек и ручного импорта.',
  },
  {
    icon: UserCheck,
    title: 'Единая карточка пациента',
    text: 'Контакт в CRM связан с картой пациента. История визитов, оплат и коммуникаций — в одном месте.',
  },
  {
    icon: CalendarClock,
    title: 'Запись на приём из CRM',
    text: 'Администратор создаёт запись прямо в сделке Битрикс24. Слот автоматически бронируется в MEDODS.',
  },
  {
    icon: Wallet,
    title: 'Оплаты и счета',
    text: 'Оплаты из MEDODS подтягиваются в сделки. Финансовая аналитика клиники — в воронке CRM.',
  },
  {
    icon: MessageSquare,
    title: 'Автоматические уведомления',
    text: 'Напоминания, подтверждения, постприёмные опросы — через SMS, WhatsApp и Telegram из коробки.',
  },
  {
    icon: BarChart3,
    title: 'Сквозная аналитика',
    text: 'От лида до повторного визита. Видно реальный ROI рекламы и эффективность каждого врача.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Возможности
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Всё, что соединяет маркетинг и приём
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Мы связываем Битрикс24 и MEDODS так, чтобы администратор видел и CRM,
            и медкарту в одном окне, а руководитель — всю картину клиники.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-2xl p-6 h-full overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-white/10">
                  <f.icon className="h-5 w-5 text-brand-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-slate-300 leading-relaxed text-sm">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
