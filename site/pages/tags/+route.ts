import { resolveRoute } from 'vike/routing'

// Route Functions enables advanced routing logic
export default (pageContext: { urlPathname: string }) => {
  return resolveRoute('/tags/@name', pageContext.urlPathname)
}