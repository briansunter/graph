// https://vike.dev/onRenderHtml
export { onRenderHtml }

import { renderToStream } from 'react-streaming/server'
import React from 'react'
import { dangerouslySkipEscape, escapeInject } from 'vike/server'
import { PageShell } from './PageShell'
import { getPageTitle } from './getPageTitle'
import type { OnRenderHtmlAsync } from 'vike/types'
import { getPageSocialMeta } from './getSocialMeta'
import { renderToString } from 'react-dom/server'
import GoogleAnalytics from './GoogleAnalytics'
// Function to generate Twitter Card meta tags

interface SocialMeta {
  title: string;
  description: string;
  imageUrl: string;
  twitterHandle: string;
  pageUrl: string;
}

const generateTwitterCardMetaTags = ({title, description, imageUrl, twitterHandle, pageUrl}:SocialMeta) => {
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
  // const page = pageProps?.page || {}
  const socialMeta = getPageSocialMeta(pageContext)
  const twitterCardMetaTags = generateTwitterCardMetaTags(socialMeta);

  const stream = await renderToStream(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    // We don't need react-streaming for this app. (We use it merely to showcase that Vike can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
    { disable: true }
  )

  const title = getPageTitle(pageContext)
  const analyticsString = renderToString(<GoogleAnalytics />)

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"> 
        <title>${title}</title>
        ${dangerouslySkipEscape(twitterCardMetaTags)}
        ${dangerouslySkipEscape(analyticsString)}
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
