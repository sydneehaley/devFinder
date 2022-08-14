const express = require('express');
const app = express();
const api = require('./routes');
const { createApp } = require('./utils/app');
const session = require('express-session');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const { sendData } = require('./utils/scrape');

app.use(cors());

// const auth = require('./routes');
// app.use(express.json()); //parsing middleware
// app.use(express.urlencoded({ extended: true })); //parsing middleware
// app.use('/api', auth);

createApp(app, api, express);

// setInterval(sendData, 900000);

async function main() {
  try {
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
    console.log(`Running in ${process.env.ENVIRONMENT} mode`);
  } catch (err) {
    console.log(err);
  }
}

main();
