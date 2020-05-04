const admin = require('firebase-admin');  
let serviceAccount = require('./key/admin-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


let db = admin.firestore();

var tag = 'angular';

db.collection('tutorial_tags').where('tag','==',tag).get().then( (snapshot) => {
    snapshot.forEach( (doc) => { 
      let id = doc.id; 
      let cumulative = doc.data().cumulative + 1 

      console.log('id is: ',id, 'cumulative is: '+cumulative);
      if(id!=null)
      db.collection('tutorial_tags').doc(id).update({'cumulative': cumulative})

      db.collection('tutorial_tags').where('tag','==',tag).get().then( (snapshot) => {
        snapshot.forEach( (doc) => { console.log(doc.id , '=>' , doc.data() )} );
      });
    } );
})


