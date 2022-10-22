const router = require('express').Router();
const { json } = require('express');
// const axios = require('axios').default;
// const { db } = require('../database/sql_db');

const { prisma } = require('../../../lib/hello-prisma/prisma/client/client');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

const jobsRouter = router.get('/', async (req, res) => {
  // db.query('SELECT * FROM jobs', function (err, result) {
  //   if (err) throw err;
  //   ///res.render() function
  //   // res.render('index', { data: result });
  //   res.status(200).json(result);
  // });
  const jobs = await prisma.jobs.findMany();
  res.status(200).json(jobs);
});

module.exports = { jobsRouter };
