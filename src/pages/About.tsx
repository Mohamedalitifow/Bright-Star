import SEO from '../components/SEO'
import { COMPANY } from '../data/site'
import { Fuel, Target, Truck, Eye } from 'lucide-react'

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Bright Star General Trading & Transport — fuel stations, dedicated fuel tankers, mission and vision from our Juba headquarters."
      />

      <div className="border-b border-white/10 bg-brand-900/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">About us</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            {COMPANY.name} is a South Sudanese company built around the fuel sector — retail, bulk, and the logistics
            that connect them.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-none">
          <h2 className="font-display text-2xl font-semibold text-white">Company introduction</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            From our base at {COMPANY.address}, we support customers who need dependable access to fuel products —
            whether at the forecourt, through scheduled bulk drops, or via routed deliveries to commercial and private
            sites. Our model pairs physical infrastructure with transport capacity so supply stays visible and
            manageable end to end.
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            We emphasize clear communication, realistic timelines, and careful execution in environments where road,
            weather, and demand patterns can shift quickly. That pragmatism is central to how we work with partners and
            communities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-brand-800/50 p-6 transition hover:border-accent-500/30">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
              <Fuel className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">Our fuel stations</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                We own and operate fuel stations that anchor our brand in the market and give customers a consistent
                retail experience alongside our distribution work.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-white/10 bg-brand-800/50 p-6 transition hover:border-accent-500/30">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
              <Truck className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">Our vehicles</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Our fleet is dedicated to fuel transportation — moving product from suppliers to our stations and to
                business and individual clients who count on timely, compliant transfers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand-800/80 to-brand-900/80 p-8 transition hover:border-accent-500/25">
            <div className="flex items-center gap-3">
              <Target className="h-8 w-8 text-accent-400" aria-hidden />
              <h2 className="font-display text-xl font-bold text-white">Mission</h2>
            </div>
            <p className="mt-4 leading-relaxed text-slate-400">
              To deliver safe, reliable fuel services and fuel-only transportation that keep businesses and households
              supplied — with transparent coordination and respect for the communities we serve.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand-800/80 to-brand-900/80 p-8 transition hover:border-accent-500/25">
            <div className="flex items-center gap-3">
              <Eye className="h-8 w-8 text-accent-400" aria-hidden />
              <h2 className="font-display text-xl font-bold text-white">Vision</h2>
            </div>
            <p className="mt-4 leading-relaxed text-slate-400">
              To be a trusted South Sudanese fuel partner known for operational discipline, asset-backed capacity, and
              long-term relationships across the supply chain — from the first litre to the last mile we run.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
