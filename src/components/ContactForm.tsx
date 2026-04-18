import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Loader2, Send } from 'lucide-react'
import { SERVICE_TYPES, type ServiceType } from '../data/site'

type FormValues = {
  name: string
  phone: string
  email: string
  serviceType: ServiceType | ''
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initial: FormValues = {
  name: '',
  phone: '',
  email: '',
  serviceType: '',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL?.trim() ?? ''
const formspreeConfigured = Boolean(formspreeUrl)

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).'
  }
  if (!values.phone.trim() || values.phone.replace(/\D/g, '').length < 6) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!values.email.trim() || !emailRegex.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.serviceType) {
    errors.serviceType = 'Please select a service type.'
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters).'
  }
  return errors
}

type FormspreeJson = {
  ok?: boolean
  error?: string
  errors?: Record<string, string>
}

type ContactFormProps = {
  defaultServiceType?: ServiceType | ''
}

export default function ContactForm({ defaultServiceType = '' }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>({
    ...initial,
    serviceType: defaultServiceType || '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; text: string }>({ type: '', text: '' })
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    const key = name as keyof FormValues
    setValues((v) => ({ ...v, [key]: value }))
    setErrors((prev) => {
      if (!(key in prev)) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus({ type: '', text: '' })
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length) return

    if (!formspreeConfigured) {
      setStatus({
        type: 'error',
        text: 'Add VITE_FORMSPREE_URL to your .env file (your Formspree form URL, e.g. https://formspree.io/f/xxxx) and restart the dev server.',
      })
      return
    }

    setSubmitting(true)
    try {
      const serviceLabel =
        SERVICE_TYPES.find((s) => s.value === values.serviceType)?.label ?? values.serviceType

      const res = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          serviceType: serviceLabel,
          message: values.message.trim(),
          _subject: `Bright Star website — ${serviceLabel}`,
        }),
      })

      const data = (await res.json().catch(() => ({}))) as FormspreeJson

      if (!res.ok || data.ok === false) {
        const msg =
          (typeof data.error === 'string' && data.error) ||
          (data.errors && Object.values(data.errors).join(' ')) ||
          'Something went wrong. Please try again or email us directly.'
        setStatus({ type: 'error', text: msg })
        return
      }

      setValues({ ...initial, serviceType: defaultServiceType || '' })
      setErrors({})
      setStatus({
        type: 'success',
        text: 'Thank you. Your message was sent. We will get back to you soon.',
      })
    } catch {
      setStatus({
        type: 'error',
        text: 'Could not send your message. Please check your connection or try again later.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'mt-1 w-full rounded-xl border border-white/10 bg-brand-900 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition focus:border-accent-500/50 focus:outline-none focus:ring-2 focus:ring-accent-500/30'

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {!formspreeConfigured && (
        <div
          role="status"
          className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100"
        >
          Set <code className="rounded bg-black/30 px-1 py-0.5 text-xs">VITE_FORMSPREE_URL</code> in{' '}
          <code className="rounded bg-black/30 px-1 py-0.5 text-xs">.env</code> to your Formspree endpoint (from your
          Formspree dashboard), then restart Vite.
        </div>
      )}

      {status.text && (
        <div
          role="alert"
          className={
            status.type === 'success'
              ? 'rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200'
              : 'rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200'
          }
        >
          {status.text}
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="text-sm font-medium text-slate-300">
          Name <span className="text-accent-500">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className={inputClass}
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="text-sm font-medium text-slate-300">
            Phone <span className="text-accent-500">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-300">
            Email <span className="text-accent-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className="text-sm font-medium text-slate-300">
          Service type <span className="text-accent-500">*</span>
        </label>
        <select
          id="contact-service"
          name="serviceType"
          className={`${inputClass} appearance-none bg-size-[1rem] bg-position-[right_0.75rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
          }}
          value={values.serviceType}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          {SERVICE_TYPES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        {errors.serviceType && <p className="mt-1 text-xs text-red-400">{errors.serviceType}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-300">
          Message <span className="text-accent-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting || !formspreeConfigured}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-brand-950 shadow-lg shadow-accent-500/25 transition hover:bg-accent-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Send message
          </>
        )}
      </button>
    </form>
  )
}
