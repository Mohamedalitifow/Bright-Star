import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import { COMPANY } from '../data/site'

type ContactLocationState = {
  focusService?: boolean
}

export default function Contact() {
  const location = useLocation()
  const state = location.state as ContactLocationState | null

  useEffect(() => {
    if (state?.focusService) {
      const el = document.getElementById('request-service')
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [state])

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Bright Star in Juba — phone, email, and message requests for fuel services and fuel transportation across South Sudan."
      />

      <div className="border-b border-white/10 bg-brand-900/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Contact</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            Reach our team for quotations, delivery schedules, or station-related enquiries. We reply as soon as
            operational capacity allows.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-lg font-semibold text-white">Contact details</h2>
            <ul className="mt-6 space-y-5 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden />
                <a href={`mailto:${COMPANY.email}`} className="text-accent-400 transition hover:text-accent-300">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden />
                <span className="flex flex-col gap-2">
                  {COMPANY.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="text-accent-400 transition hover:text-accent-300"
                    >
                      {p}
                    </a>
                  ))}
                </span>
              </li>
            </ul>

            <div className="mt-10">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-500">Map</h3>
              <p className="mt-2 text-xs text-slate-500">Approximate location — Equatoria Tower area, Juba.</p>
              <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-brand-800 shadow-lg shadow-black/30">
                <iframe
                  title="Bright Star location — Juba map"
                  src={COMPANY.mapEmbedSrc}
                  className="aspect-video w-full min-h-[220px] border-0 grayscale-[30%] contrast-[1.05] transition hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div id="request-service" className="scroll-mt-24 lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-brand-800/40 p-6 shadow-xl shadow-black/20 sm:p-8">
              <h2 className="font-display text-lg font-semibold text-white">Send a message</h2>
              <p className="mt-2 text-sm text-slate-400">
                Fields marked with <span className="text-accent-500">*</span> are required. Messages are delivered via
                Formspree to our inbox.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
