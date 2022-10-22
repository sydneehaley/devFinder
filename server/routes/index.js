const router = require('express').Router();

const { jobsRouter } = require('./jobs');
const { jobRouter } = require('./jobs/job');

const indexRouter = router.get('/', (req, res) => {
  res.send('Welcome to devFinder');
});

router.use('/jobs/:id', jobRouter);
router.use('/jobs', jobsRouter);
router.use('/', indexRouter);

module.exports = router;
