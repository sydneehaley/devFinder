const router = require('express').Router({ mergeParams: true });
const { json } = require('express');
// const axios = require('axios').default;
const { db } = require('../database/sql_db');

//middleware that is specific to this router
router.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  console.log(req.params.id);
  next();
});

router.param('id', (req, res, next, projId) => {
  // executes before route handler
  res.send(req.params);
  next();
});

const jobRouter = router.get('/', (req, res) => {
  db.query('SELECT * FROM jobs', function (err, result) {
    if (err) throw err;
    const empty_res = { job_id: null };
    const filtered_res = result.filter((data) => {
      return data.job_id == req.params.id;
    });

    if (filtered_res.length !== 0) {
      res.status(200).send(filtered_res);
    } else {
      res.status(200).json(empty_res);
    }
  });
});

module.exports = { jobRouter };
