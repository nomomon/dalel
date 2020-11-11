db.collection('posts').get().then(snapshot =>{
    snapshot.docs.forEach(el => console.log(el.data()))
})