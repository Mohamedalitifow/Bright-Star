import type { LucideIcon } from 'lucide-react'
import SEO from '../components/SEO'
import ServiceCard from '../components/ServiceCard'
import { Droplets, Fuel, MapPinned, Package, Shield, Truck, Clock, Headphones } from 'lucide-react'

type ServiceItem = {
  icon: LucideIcon
  title: string
  description: string
}

const fuelServices: ServiceItem[] = [
  {
    icon: Fuel,
    title: 'Fuel supply and distribution',
    description: 'Structured supply paths that align bulk intake with retail and commercial offtake across the region.',
  },
  {
    icon: Package,
    title: 'Bulk fuel delivery',
    description: 'Scheduled drops for organisations that need volume without compromising handling or documentation.',
  },
  {
    icon: Droplets,
    title: 'Fuel station services',
    description: 'Forecourt operations backed by our own stations — consistent product flow and customer-focused service.',
  },
  {
    icon: Shield,
    title: 'Safe handling',
    description: 'Procedures and equipment orientation focused on fuel products, spill awareness, and field-appropriate caution.',
  },
]

const transportServices: ServiceItem[] = [
  {
    icon: Truck,
    title: 'Fuel transportation from suppliers',
    description: 'Tanker movement from supplier points into our network or directly to your authorised receiving site.',
  },
  {
    icon: MapPinned,
    title: 'Delivery to businesses and individuals',
    description: 'Last-mile fuel logistics for companies and private customers — not general goods; fuel products only.',
  },
  {
    icon: Headphones,
    title: 'Logistics support',
    description: 'Coordination on routing, timing windows, and site readiness so transfers stay predictable.',
  },
  {
    icon: Clock,
    title: 'On-time delivery',
    description: 'Planning that respects your operating hours and reduces idle time for equipment and teams.',
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Fuel services and dedicated fuel transportation by Bright Star — bulk delivery, station services, supplier haulage, and logistics support in South Sudan."
      />

      <div className="border-b border-white/10 bg-brand-900/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Services</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            Two focused lines of business: fuel services at scale, and transportation that moves fuel products only —
            from source to station, company, or individual.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-400">
            Fuel services
          </span>
        </div>
        <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Fuel services</h2>
        <p className="mt-2 max-w-3xl text-slate-400">
          End-to-end support for acquiring, storing, and dispensing fuel products — designed for organisations and
          communities that need continuity, not guesswork.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {fuelServices.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-brand-900/25">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-400">
              Transportation
            </span>
            <span className="text-xs font-medium text-slate-500">Fuel delivery only — not general cargo</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Transportation services</h2>
          <p className="mt-2 max-w-3xl text-slate-400">
            Our road capacity is reserved for fuel movement: from suppliers into the market, and onward to businesses
            and individuals. We do not position this service as general freight or non-fuel haulage.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {transportServices.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
