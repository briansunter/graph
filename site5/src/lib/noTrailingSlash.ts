import { ViteDevServer } from 'vite';

export const noTrailingSlash = () => ({
  name: 'configure-server',
  configureServer(server: ViteDevServer) {
    server.middlewares.use((req, res, next) => {
      const { url } = req;
      if (!url) return next();
      
      let [path, queryString] = url.split('?');
      const queryStr = queryString ? '?' + queryString : '';
      const lastSegment = path.split('/').pop();

      if (path !== '/' && path.endsWith('/')) {
        res.writeHead(301, { Location: `${path.slice(0, -1)}${queryStr}` });
        return res.end();
      }

      if (path !== '/' && !/\.[\w-]+$/i.test(lastSegment || '') && !path.startsWith('/@vite/')) {
        req.url = `${path}/index.html${queryStr}`;
        return next();
      }

      next();
    });
  },
});
