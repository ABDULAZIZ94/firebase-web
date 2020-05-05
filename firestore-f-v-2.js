const admin = require('firebase-admin');  
let serviceAccount = require('./key/admin-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
const tag = "angular";
let uid = '4erdfqcf4e';
db.collection('tutorial_tags').where('tag','==',tag).get().then( (snapshot) => {
    snapshot.forEach( (doc) => { 
      let id = doc.id; 
      let cumulative = doc.data().cumulative + 1 ;
      if(id!=null){
        db.collection('tutorial_tags').doc(id).update({'cumulative': cumulative});
      }
      timestamp=admin.firestore.FieldValue.serverTimestamp();
      log_info = `${tag} tutorial deleted by ${uid}`;
      db.collection('logs').add({'log':log_info, 'timestamp': timestamp});
    } );
})