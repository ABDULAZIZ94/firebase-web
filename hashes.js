var uid = require ('uid');
var Hash = require('./hash');
var Tut = require('./tut');

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
// console.log(hash_id);

var tags = '{"angular":0,"code":0,"css":0,"html5":0,"laravel":0,"php":0,"python":0,"vuejs":0,"wordpress":0}';
var tags2 = '{"angular":"0","code":"0","css":"0","html5":"0","laravel":"0","php":"0","python":"0","vuejs":"0","wordpress":"0"}';
var log = '{"logs":[]}';
var hash = '{ "'+hash_id+'" :{"tag":"code","title":"How to Code"}}';//building hash string
var hash2 = '{"mjd9n0hto6l":null}';
var data2 = '{ "tags": '+tags+'}';
// console.log(hash);
// db.collection('hashes').doc('0').set(JSON.parse(hash),{merge: true});

// let retrievedHash;
// db.collection('hashes').doc('0').get().then( doc =>{
//     console.log(doc.id, '=>',doc.data() );
//     this.retrievedHash = doc.data();
//     console.log('retreived hash is: '+retrievedHash);
//     for(let i in retrievedHash){
//         console.log('i: ',i);
//     }
// });



class tagsClass {
    angular = 0;
    code = 0;
    css = 0; 
    html5 = 0; 
    laravel= 0;
    php=0;
    python=0;
    vuejs=0;
    wordpress=0;
}

var tag4 = {
    angular:0,
    code:0,
    css:0, 
    html5:0, 
    laravel:0,
    php:0,
    python: 0,
    vuejs:0,
    wordpress:0,
}
var tag6 = [
    'angular',
    'code',
    'css', 
    'html5', 
    'laravel',
    'php',
    'python',
    'vuejs',
    'wordpress',
  ]
var tag5 = 
{
    tags:[
    { tag:'angular', value:0},
    { tag:'code', value:0},
    { tag:'css', value:0 }, 
    { tag:'html5', value:0 }, 
    { tag:'laravel', value:0 },
    { tag:'php', value:0 },
    { tag:'python', value:0},
    { tag:'vuejs', value:0},
    { tag:'wordpress', value:0},
    ]
}

var tag6 =  [
    { tag:'angular', value:0},
    { tag:'code', value:0},
    { tag:'css', value:0 }, 
    { tag:'html5', value:0 }, 
    { tag:'laravel', value:0 },
    { tag:'php', value:0 },
    { tag:'python', value:0},
    { tag:'vuejs', value:0},
    { tag:'wordpress', value:0},
    ];
tag6[0].value = 12;
console.log('tag6',tag6);

var tags3 = new tagsClass();

const title = "assalamualaikum";
const tag = "angular";
let log_info ='{"'+ tag +'": "tutorial '+title+' created." }';

// db.collection('tags').doc('0').set(tag5);

var h = new Hash();
var t = new Tut();
t.tag = "angular";
t.title = "how to sleep";
t.tut_id = "9fg83t4589";

h.hash.push(t);
// h.hash.push(t);
h.hash.push(t);
var x = JSON.stringify(h);
// console.log(JSON.stringify(h));

// db.collection('hashes').doc('0').set(JSON.parse(x),{merge: true});


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