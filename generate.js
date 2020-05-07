var uid = require ('uid');

const admin = require('firebase-admin');
let serviceAccount = require('./key/admin-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

