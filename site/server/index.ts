// We use a Express.js server for development

import express from 'express'
import { renderPage } from 'vike/server'
import { createServer } from 'vite'
import fetch from 'node-fetch'
import compression from 'compression'
import fs from 'fs'
import path from 'path'

startServer()


async function startServer() {
const distPath = path.join(process.cwd(), 'dist')
  const app = express()

  // if (fs.existsSync(distPath)) {
  //   fs.rmdirSync(distPath, { recursive: true }) // Delete the 'dist' directory
  // }
  // We don't need gzip compression for dev. We use compression just to show
  // that it's properly handled by Vike and react-streaming.
  app.use(compression())

  const viteDevMiddleware = (
    await createServer({
      server: { middlewareMode: true }
    })
  ).middlewares

  app.use(viteDevMiddleware)
  app.use(express.static(`${process.cwd()}/dist/client/`))

  app.get('*', async (req, res, next) => {
    const userAgent = req.headers['user-agent']
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      fetch,
      userAgent
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) {
      return next()
    } else {
      const { statusCode, headers } = httpResponse
      headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode)
      httpResponse.pipe(res)
    }
  })

  const port = 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}