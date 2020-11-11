// listen for user status changes
auth.onAuthStateChanged(user => {
    if(user){
        change(".logout", "block")
        change(".login", "none")
        console.log("user logged in:", user)
    }
    if(!user){
        change(".logout", "none")
        change(".login", "block")
        console.log("user logged out")
    }
})

// logout
const logout = document.querySelector('.logout');
logout.addEventListener('click', e=>{
    e.preventDefault()
    auth.signOut()
})

// functions
function change(a, type){
    document.querySelectorAll(a).forEach(el =>{
        el.style.display = type;
    })
}