//Register Form

let regForm = document.getElementById("registerForm")
regForm.addEventListener('submit', newRegister)

function newRegister(e) {
    e.preventDefault()

    let user = {
        firstName: document.getElementById("first").value,
        lastName: document.getElementById("last").value,
        userName: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    let h3 = document.getElementById("greetings")

    h3.innerHTML = `Thank you for registering, ${user.userName}!`
    console.log(user.firstName, user.lastName, user.userName, user.password) //testing
}
