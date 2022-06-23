// NOTES: this is a special file for proxying requests to backend in 'development' environment

/**
 * IMPORTS
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * GLOBALS
 */

const proxy = createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: false,
});

/**
 * CORE
 */

module.exports = function (app) {
  app.use('/docs', proxy);
  app.use('/callback', proxy);
  app.use('/api/*', proxy);
};
