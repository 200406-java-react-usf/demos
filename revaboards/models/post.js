<<<<<<< HEAD
// a post should include the field: ID, title, body, posterId
module.exports = function Post(id, title, body, posterId) {
    
=======
// a Post should include the fields: id, title, body, posterId
module.exports = function Post(id, title, body, posterId) {
>>>>>>> 5489cd5c84195769ed6ae426bd081c47efd5a1b8
    this.id = id;
    this.title = title;
    this.body = body;
    this.posterId = posterId;
<<<<<<< HEAD
=======
    this.postedTime = new Date();
>>>>>>> 5489cd5c84195769ed6ae426bd081c47efd5a1b8
}