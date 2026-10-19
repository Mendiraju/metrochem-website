import { useEffect } from 'react'
import { SITE_URL } from '../config/site'

type SeoProps = {
  path: string
  title: string
  description: string
}

const upsertMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let element = document.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function Seo({ path, title, description }: SeoProps) {
  useEffect(() => {
    const canonicalPath = path === '/' ? '#/' : `#${path}`
    const canonicalUrl = new URL(canonicalPath, SITE_URL).toString()

    document.title = title

    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonicalUrl
  }, [description, path, title])

  return null
}

export default Seo
