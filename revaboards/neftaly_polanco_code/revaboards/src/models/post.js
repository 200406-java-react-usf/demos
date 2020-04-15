  
// a post should include the fields: id, title, body, posterId
module.exports = function Post(id, title, body, posterID, time) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.posterID = posterID;
    this.time = time;
}