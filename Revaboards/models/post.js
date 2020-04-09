/*
    a post should include the fields: id, title, body, postId

What our grouped worked on
module.exports = function Post(pId, title, bdy, uId) {
   
    this.postId = pId;
    this.title = title;
    this.body = bdy;
    this.userId = uId;
    
    };
*/

module.exports = function Post(id, title, bdy, posterId) {
  this.id = id; //The id here is for each post
  this.title = title;
  this.body = bdy;
  this.posterId = posterId;
};
