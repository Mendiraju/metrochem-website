export type PageMeta = {
  path: string
  navLabel: string
  title: string
  description: string
}

export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://mendiraju.github.io/metrochem-website/'
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'contact@your-domain.example'
export const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || '+91-XXXXXXXXXX'

export const COMPANY = {
  name: 'Metrochem API Private Limited',
  tagline: 'Precision in Chemistry. Commitment to Quality. Built for Pharmaceutical Excellence.',
  facilityAddress:
    'Plot 34B, 40B & 60B, J.N. Pharma City, Parawada, Visakhapatnam, Andhra Pradesh 531021, India.',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Plot+34B%2C+40B+%26+60B%2C+J.N.+Pharma+City%2C+Parawada%2C+Visakhapatnam%2C+Andhra+Pradesh+531021%2C+India',
} as const

export const PAGES: PageMeta[] = [
  {
    path: '/',
    navLabel: 'Home',
    title: 'Metrochem API Private Limited | Pharmaceutical API Manufacturing',
    description:
      'Metrochem API Private Limited is building a modern pharmaceutical manufacturing platform focused on precision chemistry and quality-led API production.',
  },
  {
    path: '/about',
    navLabel: 'About Us',
    title: 'About Us | Metrochem API Private Limited',
    description:
      'Learn about Metrochem API Private Limited, our manufacturing location in J.N. Pharma City, and our quality-focused pharmaceutical mission.',
  },
  {
    path: '/products-capabilities',
    navLabel: 'Products & Capabilities',
    title: 'Products & Capabilities | Metrochem API Private Limited',
    description:
      'Explore Metrochem API Private Limited capability areas and product portfolio update status for pharmaceutical API manufacturing.',
  },
  {
    path: '/quality-compliance',
    navLabel: 'Quality & Compliance',
    title: 'Quality & Compliance | Metrochem API Private Limited',
    description:
      'Understand Metrochem API Private Limited quality systems framework and compliance-oriented operating approach.',
  },
  {
    path: '/manufacturing-technology',
    navLabel: 'Manufacturing & Technology',
    title: 'Manufacturing & Technology | Metrochem API Private Limited',
    description:
      'See Metrochem API Private Limited manufacturing and technology areas under a controlled and scalable pharmaceutical model.',
  },
  {
    path: '/research-development',
    navLabel: 'Research & Development',
    title: 'Research & Development | Metrochem API Private Limited',
    description:
      'Review Metrochem API Private Limited R&D focus areas supporting process development and lifecycle optimization.',
  },
  {
    path: '/sustainability-ehs',
    navLabel: 'Sustainability & EHS',
    title: 'Sustainability & EHS | Metrochem API Private Limited',
    description:
      'Read Metrochem API Private Limited sustainability and EHS priorities designed for responsible pharmaceutical operations.',
  },
  {
    path: '/contact',
    navLabel: 'Contact Us',
    title: 'Contact Us | Metrochem API Private Limited',
    description:
      'Contact Metrochem API Private Limited for business inquiries through our configurable contact channels and form.',
  },
  {
    path: '/privacy-policy',
    navLabel: 'Privacy Policy',
    title: 'Privacy Policy | Metrochem API Private Limited',
    description: 'Review Metrochem API Private Limited privacy policy for website visitors and inquiry submissions.',
  },
  {
    path: '/terms-of-use',
    navLabel: 'Terms of Use',
    title: 'Terms of Use | Metrochem API Private Limited',
    description: 'Review Metrochem API Private Limited website terms of use and user responsibilities.',
  },
]

export const PRIMARY_NAV = PAGES.slice(0, 8)

export const LEGAL_NAV = PAGES.slice(8)

export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.name,
  url: SITE_URL,
  slogan: COMPANY.tagline,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot 34B, 40B & 60B, J.N. Pharma City, Parawada',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    postalCode: '531021',
    addressCountry: 'IN',
  },
} as const
