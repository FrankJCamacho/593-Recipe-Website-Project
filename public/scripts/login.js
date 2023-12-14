//Login Form
import { fetchData, setCurrentUser } from "./main.js"
let logForm = document.getElementById("loginForm")
if(logForm) logForm.addEventListener('submit', newLogin)

function newLogin(e) {
    e.preventDefault()

    let user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    fetchData("/users/login", user, "POST")
    .then(data => {
      if(!data.message) {
        // add new user to local storage
        console.log(data)
        setCurrentUser(data)
        window.location.href = "post.html"
      }
    })

    .catch(err => {
      let errorSection = document.querySelector("#loginForm .error")
      errorSection.innerText = err.message
      document.getElementById("username").value = ""
      document.getElementById("password").value = ""
    })

    let hello = document.getElementById("hello")

    hello.innerHTML = `Welcome back, ${user.username}!`
    console.log(user.username, user.password) //testing
}

async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    if(response.ok) {
      return await response.json(); 
    } else {
      throw await response.json();
    }
  } 
