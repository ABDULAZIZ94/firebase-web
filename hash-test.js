const admin = require('firebase-admin');
let serviceAccount = require('./key/admin-key.json');
admin.initializeApp({credential: admin.credential.cert(serviceAccount)});
let db = admin.firestore();
const tag = "js";
const title = "How TO";
const id = "frwer34rfef";
const timestamp="35fdrt34frf";
let hash = '{"'+id+'": { "tag":"'+tag+'", "title":"'+title+'","timestamp":"'+timestamp+'"} }';
let nullHash = '{"'+id+'": null }';
// console.log(Date.now());
db.collection('hashes').doc('0').set(JSON.parse(nullHash),{merge: true});
//date: 1588854612961
//timestamp: 063724451149.114000000