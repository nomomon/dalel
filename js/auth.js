setInterval(()=>{
    let user = auth.currentUser;
    console.log("page loaded", user, auth.currentUser)
    if(user){
        console.log("user logged in")
        window.location.href = window.location.origin;
    }
}, 1000)

// register
const registerForm = document.querySelector("#register-form")

registerForm.addEventListener('submit', e=>{
    e.preventDefault()
    
    // get user info
    const email = registerForm['email'].value;
    const displayname  = registerForm['displayname'].value;
    const password = registerForm['password'].value;

    // register user
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        // console.log(cred.user)
        let user = auth.currentUser;
        user.updateProfile({
            displayName: displayname
        })
        user.sendEmailVerification()
        window.location.href = window.location.origin;
    })
})

// login
const loginForm = document.querySelector("#login-form")
loginForm.addEventListener('submit', e=>{
    e.preventDefault()
    
    // get user info
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    // login user
    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred.user)
        window.location.href = window.location.origin;
    })
})