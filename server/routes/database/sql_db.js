require('dotenv').config();

const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.RDS_HOST,
  port: process.env.RDS_PORT,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
});

module.exports = { db };

db.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Database connected!');
});
