var uid = require ('uid');

const admin = require('firebase-admin');
let serviceAccount = require('./key/admin-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

// db.collection('hashes').doc('0').get().then( (doc)=>{
//     console.log(doc.id,'=>',doc.data().indexes);
// })
hash_id = uid();
console.log(hash_id);

// console.log(data);

//ok
var data = '{ "'+hash_id+'" :{"tag":"code","title":"How to Code"}}';
try{
  db.collection('hashes').doc('0').set(JSON.parse(data),{merge:true});
}catch(err){
  
}


//read ok
// var d;
// db.collection('hashes').doc('0').get()
//   .then((doc) => {
//       console.log(doc.id, '=>', d = doc.data());

//   })
//   .catch((err) => {
//     console.log('Error getting documents', err);
//   });

//   var obj = JSON.parse(d);
//   for(i in obj){
//     console.log(i);
//   }