const express = require('express');
// const port = 5000;
const app = express();
var path = require('path');
require('dotenv').config();
const cors = require('cors');

app.use(cors());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

const jobs = require('./routes/jobs');
app.use('/jobs', jobs);

app.use('/public', express.static('./public/'));

app.listen(process.env.PORT || 5000, function () {
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
