import { fetchData, setPost } from "./main"

//Post Form
let postForm = document.getElementById("postForm")
postForm.addEventListener('submit', newPost)

function newPost(e) {
    e.preventDefault()

    let post = {
        title: document.getElementById("title").value,
        description: document.getElementById("text").value
    }

    fetchData("/post/createPost", post, "POST")
    .then(data => {
        if(!data.message) {
            console.log(data)
            setPost(data)
            window.location.href = "post.html"
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
