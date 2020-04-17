import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();


export {database as default , firebase}



//   database.ref("expenses").push({
//       description:"This my 1st",
//       amount :200,
//       createdAt: 12344
//   });

//   database.ref("expenses").push({
//     description:"This my 2st",
//     amount :400,
//     createdAt: 222344
// });


// database.ref("expenses").push({
//     description:"This my 3st",
//     amount :500,
//     createdAt: 144
// });