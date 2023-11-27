const users = [
    {
      username: "cathy123",
      firstname: "Cathy",
      lastname: "Hoffman",
      password: "icecream"
    },
    {
      username: "kobalt",
      firstname: "Franklin",
      lastname: "Camacho",
      password: "nopeeky"
    },
    {
        username: "bogginton",
        firstname: "Bog",
        lastname: "Sirree",
        password: "chezborger"
    }
  ]
  
  // CRUD functions
  let getUsers = () => users;
  
  function getUsers2() {
    return users;
  }
  
  // export functions so can utilize them in another
  // file in application
  module.exports = {getUsers, getUsers2}