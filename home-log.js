const admin = require('firebase-admin');  
let serviceAccount = require('./key/admin-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


let db = admin.firestore();
//cd
// user sigup
let iterators =  Array.from({length:10},(v,k)=>k+1)
timestamp=admin.firestore.FieldValue.serverTimestamp();

// for(i in iterators){
//     log_info = `angular tutorial composed by ${i}`;
//     db.collection('logs').add({'log':log_info, 'timestamp': timestamp});
// }


db.collection('logs').orderBy('timestamp','desc').limit(5).get().then( (snapshot) =>  {
    snapshot.forEach( (doc) => {
        console.log(doc.id, ' => ', doc.data());
    });
});

// var tag = 'angular';
// db.collection('tutorial_tags').where('tag','==',tag).get().then( (snapshot) => {
//     snapshot.forEach( (doc) => { 
//       let id = doc.id; 
//       let cumulative = doc.data().cumulative + 1 

//       console.log('id is: ',id, 'cumulative is: '+cumulative);
//       if(id!=null)
//       db.collection('tutorial_tags').doc(id).update({'cumulative': cumulative})

//       db.collection('tutorial_tags').where('tag','==',tag).get().then( (snapshot) => {
//         snapshot.forEach( (doc) => { console.log(doc.id , '=>' , doc.data() )} );
//       });
//     } );
// })


