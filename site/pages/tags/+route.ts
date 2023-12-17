import { resolveRoute } from 'vike/routing'

// Route Functions enables advanced routing logic
export default (pageContext: { urlPathname: string }) => {
  if (pageContext.urlPathname === '/newsletter') {
    return resolveRoute('/newsletter', pageContext.urlPathname);
  }
  return resolveRoute('/tags/@name', pageContext.urlPathname)
}