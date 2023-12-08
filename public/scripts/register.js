//Register Form

let regForm = document.getElementById("registerForm")
regForm.addEventListener('submit', newRegister)

function newRegister(e) {
    e.preventDefault()

    let user = {
        first: document.getElementById("first").value,
        last: document.getElementById("last").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    fetchData("/user/register", user, "POST")
    .then(data => {
        if(!data.message) {
            window.location.href = "post.html"
        }
    })

    .catch(err => {
        let errorSection = document.querySelector("#registerForm .error")
        errorSection.innerText = err.message
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
        document.getElementById("first").value = ""
        document.getElementById("last").value = ""
    })

    let h3 = document.getElementById("greetings")

    h3.innerHTML = `Thank you for registering, ${user.userName}!`
    console.log(user.firstName, user.lastName, user.userName, user.password) //testing
}
