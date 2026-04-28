import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY } from '../data/site'
import brightLogo from '../assets/bright.svg'

const linkClass =
  'text-slate-400 transition-colors duration-200 hover:text-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <img src={brightLogo} alt={`${COMPANY.shortName} logo`} className="h-10 w-auto object-contain" />
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            Fuel stations, supply, and dedicated fuel transportation for businesses and communities across South Sudan.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClass}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className={linkClass}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden />
              <a href={`mailto:${COMPANY.email}`} className={linkClass}>
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden />
              <span className="flex flex-col gap-1">
                {COMPANY.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className={linkClass}>
                    {p}
                  </a>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </div>
    </footer>
  )
}
