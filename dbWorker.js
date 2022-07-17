const { parentPort } = require('worker_threads');

const { db } = require('./firebase-auth/firebaseInit');

// get current data in DD-MM-YYYY format
let date = new Date();
let currDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
// recieve crawled data from main thread
parentPort.once('message', (message) => {
  console.log('Recieved data from mainWorker...');
  // store data gotten from main thread in database
  db.collection('Jobs')
    .doc('Data')
    .set({
      message,
    })
    .then(() => {
      // send data back to main thread if operation was successful
      parentPort.postMessage('Data saved successfully');
    })
    .catch((err) => console.log(err));
});
