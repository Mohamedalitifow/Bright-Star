import { Helmet } from 'react-helmet-async'

const COMPANY_NAME = 'Bright Star General Trading & Transport Co. Ltd'
const defaultTitle = `${COMPANY_NAME} | Fuel Services South Sudan`

type SEOProps = {
  title?: string
  description?: string
}

export default function SEO({ title, description }: SEOProps) {
  const fullTitle = title ? `${title} | Bright Star` : defaultTitle
  const desc =
    description ||
    'Fuel stations, bulk fuel supply, and dedicated fuel transportation across South Sudan. Contact Bright Star in Juba for dependable energy logistics.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
