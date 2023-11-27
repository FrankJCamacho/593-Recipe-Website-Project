const posts = [
    {
        title: "The Best Recipe!",
        steps: "1. Love, 2. Hope",
    },
    {
        title: "Chicken Sandwich",
        steps: "1.Chicken, 2. Bread",
    },
    {
        title: "Pizza",
        steps: "1. Order Online!",
    }
  ]
  
  // CRUD functions
  let getPosts = () => posts;
  
  function getPosts2() {
    return posts;
  }
  
  // export functions so can utilize them in another
  // file in application
  module.exports = {getPosts, getPosts2}