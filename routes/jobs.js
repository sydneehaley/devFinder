const router = require('express').Router();
const axios = require('axios').default;
const { db } = require('../firebase-auth/firebaseInit');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

// define the home page route

router.get('/', async (req, res) => {
  db.collection('Jobs')
    .doc('Data')
    .onSnapshot((doc) => {
      res.status(200).json(doc.data());
      //   console.log('Current data: ', doc.data());
    });
});

module.exports = router;
