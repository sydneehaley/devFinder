const { parentPort } = require('worker_threads');
const { prisma } = require('../../lib/prisma/client/client');

// const { db } = require('../routes/database/sql_db');

// recieve crawled data from main thread
const createJob = () => {
  parentPort.once('message', (message) => {
    console.log('Recieved data from mainWorker...');

    // for (let i = 0; i < message.length; i++) {
    //   let sql = 'INSERT INTO jobs (job_company, job_description, job_link,job_title, job_type) VALUES ?';
    //   var values = [[message[i].company, message[i].description, message[i].link, message[i].title, message[i].type]];

    //   db.query(sql, [values], function (err, result) {
    //     if (err) throw err;
    //     console.log('Number of records inserted: ' + result.affectedRows);
    //     if (result) {
    //       parentPort.postMessage('Data saved successfully');
    //     }
    //   });
    // }

    // db.end();

    let job = message[0];
    console.log(job);
    const newJob = async () => {
      await prisma.jobs.create({
        data: {
          company: job.company,
          description: job.description,
          link: job.link,
          title: job.title,
          type: job.type,
        },
      });
    };

    newJob();
  });
};

createJob();
