const admin = require('firebase-admin');  
let serviceAccount = require('./key/admin-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

// db.collection('hashes').doc('0').get().then( (doc)=>{
//     console.log(doc.id,'=>',doc.data().indexes);
// })

db.collection('hashes').doc('0').update({'dfer345ertge5':{'tag':'code','title':'How to Code'}} );
