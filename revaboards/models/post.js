// a post should include the field: ID, title, body, posterId
module.exports = function Post(id, title, body, posterId) {
    
    this.id = id;
    this.title = title;
    this.body = body;
    this.posterId = posterId;
}