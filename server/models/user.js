
const con = require("./db_connect");

async function createTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS user (
      user_id INT NOT NULL AUTO_INCREMENT,
      username VARCHAR(255) NOT NULL UNIQUE,
      user_password VARCHAR(255) NOT NULL,
      first_name VARCHAR(255),
      last_name VARCHAR(255),
      CONSTRAINT user_pk PRIMARY KEY(user_id)
      )`;

      await con.query(sql)
}

createTable()


// CRUD functions
let getUsers = () => users;
  
// function getUsers2() {
//   return users;
// }

//Login
async function login(user) {
  let userResult = await getUser(user.username)
  if(!userResult[0]) throw Error("Username not found!! Please try another.")
  if(userResult[0].Password != user.password) throw Error("Password Incorrect!! Please try another.")

  return userResult[0]
}

// Register (Create) New User
async function register(user) {
  let userResult = await getUser(user.username)
  if(userResult.length > 0) throw Error("Username already in use!! Please pick a different one.")

  let sql = `
    INSERT INTO user(username, user_password, first_name, last_name)
    VALUES("${user.username}", "${user.password}", "${user.first}", "${user.last}")
  `

  await con.query(sql)
  const newUser = await getUser(user.username)
  return newUser[0]
}

// Update - CRUD
async function editUser(user) {
  let updatedUser = await getUser(user.username)
  if(updatedUser.length > 0) throw Error("Username not available!")

  let sql = `UPDATE user
    SET username = "${user.username}"
    WHERE user_id= ${user.UserId}
  `
  await con.query(sql)
  updatedUser = await getUser(user.username)
  return updatedUser[0]
}

// Delete User 
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE user_id = ${user.UserId}
  `
  await con.query(sql)
}

// Useful functions
async function getUser(username) {
  let sql = `
    SELECT * FROM user 
    WHERE username = "${username}" 
  `
  return await con.query(sql)
}


// export functions so can utilize them in another
// file in application
module.exports = {login, register, editUser, deleteUser}
