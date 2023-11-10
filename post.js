//Post Form
let postForm = document.getElementById("postForm")
postForm.addEventListener('submit', newPost)

function newPost(e) {
    e.preventDefault()

    let post = {
        title: document.getElementById("title").value,
        description: document.getElementById("text").value
    }
    
    let h3 = document.getElementById("recipe")

    h3.innerHTML = `I'm sure, ${post.title} is very tasty!`
    console.log(post.title, post.description) //testing
}