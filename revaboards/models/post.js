// a Post should include the fields: id, title, body, posterId//

module.exports = function Post(id, title, body, posterID){
    this.id = id;
    this.title = title;
    this.body = body;
    this.posterID = posterID;
}