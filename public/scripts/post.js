import { fetchData, setPost } from "./main.js"

let currentUser = getCurrentUser()
//Post Form
let postForm = document.getElementById("postForm")
postForm.addEventListener('submit', newPost)

function newPost(e) {
    e.preventDefault()

    let post = {
        title: document.getElementById("title").value,
        description: document.getElementById("text").value,
        user_id: currentUser.user_id
    }

    let recipes = document.getElementById("recipe")

    fetchData("/post/create", post, "POST")
    .then(data => {
        if(!data.message) {
            console.log(data)
            setPost(data)
            recipes.innerHTML+=`
            <p>${data.post_title} | ${data.post_description}<p>`
            // window.location.href = "post.html"
        }
    })

    .catch(err => {
        let errorSection = document.querySelector("#post-form .error")
        errorSection.innerText = err.message
        document.getElementById("title").value = ""
        document.getElementById("description").value = ""
    })

    // let h3 = document.getElementById("recipe")

    // h3.innerHTML = `I'm sure, ${post.title} is very tasty!`
    // console.log(post.title, post.description) //testing
}
