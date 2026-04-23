import { motion } from 'framer-motion'
import {
  RefreshCw,
  UserCheck,
  CalendarClock,
  Wallet,
  MessageSquare,
  BarChart3,
} from 'lucide-react'
import TiltCard from './TiltCard'
import TextReveal from './TextReveal'

const features = [
  {
    icon: RefreshCw,
    title: 'Двусторонняя синхронизация',
    text: 'Любое изменение в Битрикс24 мгновенно отражается в MEDODS и наоборот. Без задержек и ручного импорта.',
    accent: 'from-brand-500/30 to-violet-500/20',
    iconColor: 'text-brand-300',
  },
  {
    icon: UserCheck,
    title: 'Единая карточка пациента',
    text: 'Контакт в CRM связан с картой пациента. История визитов, оплат и коммуникаций — в одном месте.',
    accent: 'from-violet-500/30 to-accent-400/20',
    iconColor: 'text-violet-300',
  },
  {
    icon: CalendarClock,
    title: 'Запись на приём из CRM',
    text: 'Администратор создаёт запись прямо в сделке Битрикс24. Слот автоматически бронируется в MEDODS.',
    accent: 'from-accent-400/30 to-brand-500/20',
    iconColor: 'text-accent-300',
  },
  {
    icon: Wallet,
    title: 'Оплаты и счета',
    text: 'Оплаты из MEDODS подтягиваются в сделки. Финансовая аналитика клиники — в воронке CRM.',
    accent: 'from-magenta-400/30 to-brand-500/20',
    iconColor: 'text-magenta-400',
  },
  {
    icon: MessageSquare,
    title: 'Автоматические уведомления',
    text: 'Напоминания, подтверждения, постприёмные опросы — через SMS, WhatsApp и Telegram из коробки.',
    accent: 'from-accent-400/30 to-violet-500/20',
    iconColor: 'text-accent-300',
  },
  {
    icon: BarChart3,
    title: 'Сквозная аналитика',
    text: 'От лида до повторного визита. Видно реальный ROI рекламы и эффективность каждого врача.',
    accent: 'from-brand-500/30 to-magenta-400/20',
    iconColor: 'text-brand-300',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">
            Возможности
          </p>
          <TextReveal
            as="h2"
            text="Всё, что соединяет маркетинг и приём"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient-subtle"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-slate-300 leading-relaxed"
          >
            Мы связываем Битрикс24 и MEDODS так, чтобы администратор видел и CRM,
            и медкарту в одном окне, а руководитель — всю картину клиники.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="glass rounded-2xl p-6 h-full overflow-hidden">
                <div
                  aria-hidden
                  className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${f.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className={`grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br ${f.accent} border border-white/10`}
                  >
                    <f.icon className={`h-5 w-5 ${f.iconColor}`} />
                  </motion.div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed text-sm">{f.text}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
