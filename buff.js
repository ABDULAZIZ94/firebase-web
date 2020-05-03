var tag = 'angular';
var id = null;
var cumulative = 0;
// db.collection('tutorial_tag').where('tag','==',tag).get().then( (snapshot) => {
//     snapshot.forEach( (doc) => { id = doc.id; cumulative = doc.data().cumulative + 1 } );
// })
// if(id!=null)
// db.collection('tutorial_tags').doc(id).set({'cumulative': cumulative})

// db.collection('tutorial_tag').where('tag','==',tag).get().then( (snapshot) => {
//   snapshot.forEach( (doc) => { console.log(doc.id , '=>' , doc.data() )} );
// })

db.collection('tutorial_tag').where('tag','==','')
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});