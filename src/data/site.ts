export const COMPANY = {
  name: 'Bright Star General Trading & Transport Co. Ltd',
  shortName: 'Bright Star',
  tagline: 'Reliable Fuel Supply & Transportation Services in South Sudan',
  address: 'UAP / Equatoria Tower / Hai Malakal / Juba / South Sudan',
  email: 'brightstargeneral@gmail.com',
  phones: ['+211926633551', '+211924681710', '+211928188309'],
  whatsapp: '211926633551',
  mapEmbedSrc: 'https://www.google.com/maps?q=Equatoria+Tower,+Juba,+South+Sudan&output=embed',
} as const

export const SERVICE_TYPES = [
  { value: 'fuel-services', label: 'Fuel services' },
  { value: 'fuel-transportation', label: 'Fuel transportation' },
  { value: 'general-inquiry', label: 'General inquiry' },
] as const

export type ServiceType = (typeof SERVICE_TYPES)[number]['value']
