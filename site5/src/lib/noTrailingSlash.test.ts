import { noTrailingSlash } from './noTrailingSlash';  // replace with your actual import
import { ViteDevServer } from 'vite';
import http from 'http';

describe('noTrailingSlash middleware', () => {
  let server: ViteDevServer;
  let req: http.IncomingMessage;
  let res: http.ServerResponse;
  let next: jest.Mock;

  beforeEach(() => {
    server = { middlewares: { use: jest.fn() } } as unknown as ViteDevServer;
    req = { url: '' } as http.IncomingMessage;
    res = {
      writeHead: jest.fn(),
      end: jest.fn(),
    } as unknown as http.ServerResponse;
    next = jest.fn();
  });

  it('should remove trailing slash', () => {
    noTrailingSlash().configureServer(server);
    const middleware = (server.middlewares.use as jest.Mock).mock.calls[0][0];
    req.url = '/path/';
    middleware(req, res, next);
    
    expect(res.writeHead).toHaveBeenCalledWith(301, { Location: '/path' });
    expect(res.end).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });

  it('should add /index.html for directory', () => {
    noTrailingSlash().configureServer(server);
    const middleware = (server.middlewares.use as jest.Mock).mock.calls[0][0];
    req.url = '/path';
    middleware(req, res, next);

    expect(req.url).toBe('/path/index.html');
    expect(next).toHaveBeenCalled();
  });
  it('should handle query string in url', () => {
    noTrailingSlash().configureServer(server);
    const middleware = (server.middlewares.use as jest.Mock).mock.calls[0][0];
    req.url = '/path/?query=string';
    middleware(req, res, next);
  
    expect(res.writeHead).toHaveBeenCalledWith(301, { Location: '/path?query=string' });
    expect(res.end).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });
  
  it('should handle dot in path name', () => {
    noTrailingSlash().configureServer(server);
    const middleware = (server.middlewares.use as jest.Mock).mock.calls[0][0];
    req.url = '/v1.0/app/';
    middleware(req, res, next);
  
    expect(res.writeHead).toHaveBeenCalledWith(301, { Location: '/v1.0/app' });
    expect(res.end).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });

});
