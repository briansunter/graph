// https://vike.dev/onRenderHtml
export { onRenderHtml }

import { renderToStream } from 'react-streaming/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageShell } from '../../../renderer/PageShell'
import { getPageTitle } from '../../../renderer/getPageTitle'
import type { OnRenderHtmlAsync } from 'vike/types'
const generateTwitterCardMetaTags = (title: string, description: string, imageUrl: string, twitterHandle: string, pageUrl: string) => {
  return `
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="${twitterHandle}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${imageUrl}">

    <!-- OpenGraph tags for iMessage, Facebook, LinkedIn, etc. -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:type" content="website">
  `;
}
const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps, config } = pageContext

  const page = pageProps.page || {};

  const stream = await renderToStream(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    // We don't need react-streaming for this app. (We use it merely to showcase that Vike can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
    { disable: true }
  )

  const title = getPageTitle(pageContext);
  const twitterCardMetaTags = generateTwitterCardMetaTags(page.title, page.description, `${config.domain}${page.coverimage}`, '@bsunter',`${config.domain}${page.permalink}`);
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        ${dangerouslySkipEscape(twitterCardMetaTags)}
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`

  return {
    documentHtml,
    // See https://vike.dev/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42
      }
    }
  }
}
