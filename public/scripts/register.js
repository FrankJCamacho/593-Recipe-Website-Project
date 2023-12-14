//Register Form
import { fetchData, setCurrentUser } from "./main.js"

let regForm = document.getElementById("registerForm")
if(regForm) regForm.addEventListener('submit', newRegister)

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
            setCurrentUser(data)
            window.location.href = "profile.html"
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

}

