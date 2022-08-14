// const express = require('express');
// const app = express();
// const auth = require('../routes');

const createApp = (app, api, express) => {
  app.use(express.json()); //parsing middleware
  app.use(express.urlencoded({ extended: true })); //parsing middleware
  app.use('/api', api);
  return app;
};

module.exports = { createApp };
