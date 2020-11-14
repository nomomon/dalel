const main = document.querySelector('main');

// fetching posts
db.collection('posts').get().then(snapshot =>{
    snapshot.docs.forEach(el =>{
        main.innerHTML += temp(el.data())
        renderMathInElement(main, options);
        })
})

//posting new post
function post(a){
    const regexp = /[$-/:-?{-~!"^`\[\] ]/;
    let time = Date.now();
    let link = time.toString(36)+"_"+a.title.toLowerCase().split("").map(el => el.replace(regexp, "_")).join("");

    return db.collection('posts').doc(`${link}`).set({
            title:a.title,
            time:time,
            // tags:a.tags,
            source:a.source,
            author:auth.currentUser.displayName,
            link:link,
            text:a.text
        })
}