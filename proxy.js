const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://127.0.0.1:3000',
  changeOrigin: true,
}));

app.listen(3001, '0.0.0.0');
console.log("代理服务启动在端口3001，跨域已解决");
