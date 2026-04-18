import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Clock, Droplets, MapPin, Shield, Truck } from 'lucide-react'
import SEO from '../components/SEO'
import ServiceCard from '../components/ServiceCard'
import { COMPANY } from '../data/site'

const whyItems: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Shield,
    title: 'Safety first',
    text: 'Careful handling procedures and equipment suited to fuel products.',
  },
  {
    icon: Clock,
    title: 'On-time mindset',
    text: 'Scheduling built around your windows and operational constraints.',
  },
  {
    icon: Truck,
    title: 'Owned fleet',
    text: 'Dedicated tanker capacity focused exclusively on fuel movement.',
  },
  {
    icon: Droplets,
    title: 'Station network',
    text: 'Our own retail points complement distribution for steady access.',
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Bright Star delivers dependable fuel supply and dedicated fuel transportation across South Sudan — stations, bulk delivery, and on-time logistics from Juba."
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.18),transparent)]" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-400/90">{COMPANY.name}</p>
          <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Reliable Fuel Supply &amp; Transportation Services in South Sudan
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            We operate fuel stations and run a dedicated fleet for fuel movement — from supplier intake to delivery at
            stations, companies, and individual customers who rely on safe, timely supply.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-lg shadow-accent-500/25 transition hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
            >
              Contact us
            </Link>
            <Link
              to="/contact"
              state={{ focusService: true }}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent-500/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
            >
              Request service
            </Link>
          </div>
          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-brand-900/50 p-4 backdrop-blur-sm transition hover:border-accent-500/30">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-400">
                <MapPin className="h-4 w-4" aria-hidden />
                Location
              </dt>
              <dd className="mt-2 text-sm text-slate-300">{COMPANY.address}</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-brand-900/50 p-4 backdrop-blur-sm transition hover:border-accent-500/30">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-400">
                <Droplets className="h-4 w-4" aria-hidden />
                Focus
              </dt>
              <dd className="mt-2 text-sm text-slate-300">Fuel retail, bulk supply, and fuel-only transport</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-brand-900/50 p-4 backdrop-blur-sm transition hover:border-accent-500/30">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-400">
                <Truck className="h-4 w-4" aria-hidden />
                Coverage
              </dt>
              <dd className="mt-2 text-sm text-slate-300">Serving businesses and individuals across South Sudan</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Who we are</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            {COMPANY.shortName} is a Juba-based trading and transport company focused on the fuel value chain. With our
            own stations and vehicles, we bridge suppliers and end users — keeping fleets, generators, and communities
            running with consistent quality and accountable service.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-brand-900/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Services preview</h2>
              <p className="mt-2 max-w-xl text-slate-400">
                Fuel services at the pump and on the road — built for South Sudan&apos;s operating reality.
              </p>
            </div>
            <Link to="/services" className="text-sm font-semibold text-accent-400 transition hover:text-accent-300">
              View all services →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ServiceCard
              icon={Droplets}
              title="Fuel services"
              description="Retail and bulk fuel, station operations, and safe handling aligned with practical field standards."
            />
            <ServiceCard
              icon={Truck}
              title="Fuel transportation"
              description="Movement of fuel from suppliers to stations, businesses, and individuals — not general freight."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Why choose us</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          We combine physical assets with disciplined logistics so your fuel plan stays predictable.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyItems.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-white/10 bg-brand-800/40 p-5 transition hover:border-accent-500/30"
              >
                <Icon className="h-8 w-8 text-accent-400" aria-hidden />
                <h3 className="mt-4 font-display font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-br from-brand-900 via-brand-950 to-black">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Ready to fuel your operations?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Tell us about your volume, delivery points, and timing. Our team will respond with a practical next step.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 transition hover:bg-accent-400 sm:w-auto"
            >
              Get in touch
            </Link>
            <Link
              to="/about"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 sm:w-auto"
            >
              Learn more about us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
