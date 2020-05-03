  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCdBf28OZeGin49vSGBCMxfIGEiObJev4k",
    authDomain: "code-ajis.firebaseapp.com",
    databaseURL: "https://code-ajis.firebaseio.com",
    projectId: "code-ajis",
    storageBucket: "code-ajis.appspot.com",
    messagingSenderId: "953441184666",
    appId: "1:953441184666:web:9759edf7e8df49754ca823",
    measurementId: "G-75KBNESD83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();
  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});