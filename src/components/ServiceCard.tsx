import type { LucideIcon } from 'lucide-react'

type ServiceCardProps = {
  icon?: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-brand-800/60 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:border-accent-500/35 hover:bg-brand-800 hover:shadow-xl hover:shadow-accent-500/5">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-500/10 blur-2xl transition duration-500 group-hover:bg-accent-500/20"
        aria-hidden
      />
      {Icon && (
        <div className="relative mb-4 inline-flex rounded-xl bg-accent-500/15 p-3 text-accent-400 ring-1 ring-accent-500/25 transition group-hover:scale-105">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
      )}
      <h3 className="relative font-display text-lg font-semibold text-white">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
    </article>
  )
}
