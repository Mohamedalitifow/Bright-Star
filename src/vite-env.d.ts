/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Full Formspree endpoint, e.g. https://formspree.io/f/xxxxxxxx */
  readonly VITE_FORMSPREE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
