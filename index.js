const admin = require('firebase-admin');  
let serviceAccount = require('./key/admin-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


let db = admin.firestore();

db.collection('tutorials').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
