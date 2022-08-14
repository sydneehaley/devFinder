const { parentPort } = require('worker_threads');

const { db } = require('../routes/database/sql_db');

let date = new Date();
let currDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
// recieve crawled data from main thread
parentPort.once('message', (message) => {
  console.log('Recieved data from mainWorker...');

  // store data gotten from main thread in database (FIREBASE DATABASE)
  // db.collection('Jobs')
  //   .doc('Data')
  //   .set({
  //     message,
  //   })

  for (let i = 0; i < message.length; i++) {
    let sql = 'INSERT INTO jobs (job_company, job_description, job_link,job_title, job_type) VALUES ?';
    var values = [[message[i].company, message[i].description, message[i].link, message[i].title, message[i].type]];

    db.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log('Number of records inserted: ' + result.affectedRows);
      if (result) {
        parentPort.postMessage('Data saved successfully');
      }
    });
  }

  db.end();
  //FIREBASE DATABASE promise
  // .then(() => {
  //       // send data back to main thread if operation was successful
  //       parentPort.postMessage('Data saved successfully');
  //     })
  //     .catch((err) => console.log(err));
});
