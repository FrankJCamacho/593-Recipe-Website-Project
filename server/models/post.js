
  // CRUD functions
//  let getPosts = () => posts;
  
//   function getPosts2() {
//     return posts;
//   }
  
const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS post (
        post_id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        post_title VARCHAR(255) NOT NULL,
        post_description VARCHAR(255) NOT NULL,
        CONSTRAINT post_pk PRIMARY KEY(post_id),
        CONSTRAINT user_fk FOREIGN KEY(user_id) REFERENCES user(user_id)
    )`;
  
    await con.query(sql)
}
  
createTable()

// CREATE - CRUD - C
async function createPost(post) {
    let postResult = await getPost(post.title)
    if(postResult.length > 0) throw Error("Title already in use!! Please pick a different one.")

    let sql = `
      INSERT INTO post(post_title, post_description, user_id)
      VALUES("${post.title}", "${post.description}", ${post.user_id})
    `
  
    await con.query(sql)
    const newPost = await getPost(post.title)
    return newPost[0]
}

// READ - CRUD - R

async function readPost(post) {
    let postResult = await getPost(post.title)
    if(!postResult[0]) throw Error("Post not found!! Please try another title.")
  
    return postResult[0]
  }
  
// UPDATE - CRUD - U
async function editPost(post) {
    let updatedPost = await getPost(post.title)
    if(updatedPost.length > 0) throw Error("Post not available!")
  
    let sql = `UPDATE post
      SET post_title = "${post.title}"
      WHERE post_description = ${post.description}
    `
    await con.query(sql)
    updatedPost = await getPost(post.title)
    return updatedPost[0]
}
  
// DELETE - CRUD - D
async function deletePost(post) {
    let sql = `DELETE FROM post
      WHERE post_id = ${post.post_id}
    `
    await con.query(sql)
}

// Useful functions
async function getPost(title) {
    let sql = `
      SELECT * FROM post 
      WHERE post_title = "${title}" 
    `
    return await con.query(sql)
  }

  // export functions so can utilize them in another
  // file in application
module.exports = {createPost, readPost, editPost, deletePost}
