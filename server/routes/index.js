const router = require('express').Router();

const { jobsRouter } = require('./jobs');
const { jobRouter } = require('./jobs/job');

router.use('/jobs/:id', jobRouter);
router.use('/jobs', jobsRouter);

module.exports = router;
