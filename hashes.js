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
var tags = '{"angular":0,"code":0,"css":0,"html5":0,"laravel":0,"php":0,"python":0,"vuejs":0,"wordpress":0}';
var log = '{"logs":[]}';
var data = '{ "'+hash_id+'" :{"tag":"code","title":"How to Code"}}';
var data2 = '{ "tags": '+tags+'}';
db.collection('logs').doc('0').set(JSON.parse(data2),{merge:true});


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