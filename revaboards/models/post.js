// a post should include: id, title, body, posterID

module.exports = function Post(id, title, body, posterId){

    this.id = id;
    this.title = title;
    this.body = body;
    this.posterId = posterId;

}

