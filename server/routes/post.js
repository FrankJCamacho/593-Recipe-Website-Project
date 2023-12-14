const express = require("express")
const Post = require("../models/post")
const router = express.Router()

router.get('/getAllPosts', (req, res) => {
  try {
    const posts = Post.getPosts();
    res.send(posts)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//READ
.post('/read', async (req, res) => {
  try {
    const post = await Post.readPost(req.body)
    res.send({...post})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//REGISTER
.post('/create', async (req, res) => {
  try {
    const post = await Post.createPost(req.body)
    res.send({...post})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//EDIT
.put('/edit', async (req, res) => {
  try {
    let post = await Post.editPost(req.body)
    res.send({...post})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//DELETE
.delete('/delete', async (req, res) => {
  try {
    await Post.deletePost(req.body)
    res.send({success: "Goodbye!"})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router;
