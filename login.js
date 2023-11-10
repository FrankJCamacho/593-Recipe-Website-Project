//Login Form
let logForm = document.getElementById("loginForm")
logForm.addEventListener('submit', newLogin)

function newLogin(e) {
    e.preventDefault()

    let user = {
        userName: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    let hello = document.getElementById("hello")

    hello.innerHTML = `Welcome back, ${user.userName}!`
    console.log(user.userName, user.password) //testing
}