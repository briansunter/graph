import { resolveRoute } from 'vike/routing'

// Route Functions enables advanced routing logic
export default (pageContext: { urlPathname: string }) => {
  return {precedence: -1}
  // return resolveRoute('/@name/*', pageContext.urlPathname)
}