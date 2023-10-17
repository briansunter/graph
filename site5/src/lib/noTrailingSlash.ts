import {ViteDevServer} from 'vite';

export const noTrailingSlash = () => ({
  name: 'configure-server',
  configureServer(server: ViteDevServer) {
    server.middlewares.use((req, res, next) => {
      if (req.url) {
        let [url, queryString] = req.url.split('?');
        queryString = queryString ? '?' + queryString : '';

        const lastSegment = url.split("/").pop();

        if (url !== "/" && url.endsWith("/")) {
          res.writeHead(301, { Location: url.slice(0, -1) + queryString });
          res.end();
        } else if (url !== "/" && !/\.[\w-]+$/i.test(lastSegment||'') && !url.startsWith('/@vite/')) {
          if (req.url !== undefined) {
            req.url = url + "/index.html" + queryString;
          } else {
            req.url = "/index.html" + queryString;
          }
          next();
        } else {
          next();
        }
      } else {
        next();
      }
    })
  },
})