const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.get('/getAllUsers', (req, res) => {
  try {
    const users = User.getUsers();
    res.send(users)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//LOGIN
.post('/login', async (req, res) => {
  try {
    const user = await User.login(req.body)
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//REGISTER
.post('/register', async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.register(req.body)
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//EDIT
.put('/edit', async (req, res) => {
  try {
    let user = await User.editUser(req.body)
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//DELETE
.delete('/delete', async (req, res) => {
  try {
    await User.deleteUser(req.body)
    res.send({success: "Goodbye!"})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})


module.exports = router;
