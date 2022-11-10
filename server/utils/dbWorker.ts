// const { db } = require('../routes/database/sql_db');
import prisma from '../../lib/prisma/client/client';
import { parentPort } from 'worker_threads';

// recieve crawled data from main thread
const createJob = () => {
  parentPort.once('message', (message: any[]) => {
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
    let data = message;
    const newJob = async () => {
      const user = await prisma.jobs.createMany({
        data,
        skipDuplicates: true,
      });
      parentPort.postMessage('Data stored successfully');
    };
    newJob();
  });
};
