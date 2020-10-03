'use strict';

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/streamlit', createProxyMiddleware({ target: 'http://streamlit:8501/', ws: true, changeOrigin: true, logLevel: 'debug'}));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);