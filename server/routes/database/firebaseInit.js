const admin = require('firebase-admin');
// const serviceAccount = require('./dev-job-search-1b25d-firebase-adminsdk-uu76t-913fd5dc5b.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { db };
