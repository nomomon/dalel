const main = document.querySelector('main');

// fetching posts
db.collection('posts').get().then(snapshot =>{
    snapshot.docs.forEach(el =>{
        main.innerHTML += temp(el.data())
        renderMathInElement(main, options);
        })
})

//posting new post
function post(title, source, author, text){
    return db.collection('posts').doc(`${Math.random()}`).set({
            title:title,
            source:source,
            author:author,
            text:text
        })
}