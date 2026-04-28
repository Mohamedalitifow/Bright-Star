import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { COMPANY } from '../data/site'
import brightLogo from '../assets/bright.svg'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
    isActive
      ? 'bg-accent-500/15 text-accent-400'
      : 'text-slate-300 hover:bg-white/5 hover:text-white',
  ].join(' ')

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <img src={brightLogo} alt={`${COMPANY.shortName} logo`} className="h-14 w-auto object-contain sm:h-16" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-brand-800 p-2 text-white transition hover:border-accent-500/40 hover:bg-brand-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 bg-brand-900 md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile">
          <NavLink to="/" end className={navLinkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" className={navLinkClass} onClick={() => setOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
