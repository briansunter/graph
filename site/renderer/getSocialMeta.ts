import type { PageContext } from 'vike/types'

interface SocialMeta {
  title: string;
  description: string;
  imageUrl: string;
  twitterHandle: string;
  pageUrl: string;
}

function getPageSocialMeta(pageContext: PageContext): SocialMeta {
  const page = pageContext.pageProps?.page
  const domain = pageContext.config.domain
  console.log('page', page)
  const title = page?.title || pageContext.config.title || 'Brian Sunter'
  const description = page?.description || pageContext.config.description || 'Brian Sunter'
  const imageUrl = domain + ( page?.coverimage || '')
  const twitterHandle = '@bsunter' 
  const pageUrl = domain + (page?.permalink || '')

  return {
    title,
    description,
    imageUrl,
    twitterHandle,
    pageUrl
  }
}

export { getPageSocialMeta }