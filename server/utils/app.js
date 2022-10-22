const createApp = (app, api, express) => {
  app.use(express.json()); //parsing middleware
  app.use(express.urlencoded({ extended: true })); //parsing middleware
  app.use('/', api);
  return app;
};

module.exports = { createApp };
