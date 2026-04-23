import { Activity } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="grid place-items-center h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500">
            <Activity className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          </span>
          <span className="text-sm">MediSync © {new Date().getFullYear()}</span>
        </div>
        <div className="text-xs text-slate-400">
          Битрикс24 и MEDODS — товарные знаки своих правообладателей.
        </div>
      </div>
    </footer>
  )
}
