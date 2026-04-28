import { COMPANY } from '../data/site'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19.11 17.2c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.19.28-.72.9-.89 1.08-.16.19-.33.21-.61.07a7.72 7.72 0 0 1-2.27-1.4 8.66 8.66 0 0 1-1.6-1.99c-.17-.28-.02-.43.12-.58.13-.13.28-.33.42-.49.14-.17.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.53-.45-.46-.62-.47h-.53c-.19 0-.49.07-.75.35s-.98.96-.98 2.34c0 1.39 1 2.72 1.14 2.91.14.19 1.95 2.97 4.72 4.16.66.28 1.17.45 1.57.57.66.21 1.27.18 1.74.11.53-.08 1.64-.67 1.87-1.33.23-.66.23-1.23.16-1.35-.07-.12-.25-.19-.53-.33Z"
      />
      <path
        fill="currentColor"
        d="M16 3.2c-7.05 0-12.8 5.66-12.8 12.62 0 2.22.58 4.38 1.69 6.29L3 29l7.1-1.85a12.9 12.9 0 0 0 5.9 1.5h.01c7.05 0 12.8-5.66 12.8-12.62 0-3.37-1.33-6.53-3.75-8.92A12.89 12.89 0 0 0 16 3.2Zm0 23.3h-.01a10.72 10.72 0 0 1-5.45-1.49l-.39-.23-4.21 1.1 1.12-4.07-.25-.42a10.43 10.43 0 0 1-1.62-5.55c0-5.82 4.81-10.56 10.72-10.56 2.87 0 5.56 1.11 7.58 3.12a10.42 10.42 0 0 1 3.14 7.45c0 5.82-4.81 10.56-10.72 10.56Z"
      />
    </svg>
  )
}

export default function WhatsAppFloat() {
  const href = `https://wa.me/${COMPANY.whatsapp}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  )
}
