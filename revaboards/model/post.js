module.exports = function Post(id, title, body, posterid){

    this.id = id
    this.title = title
    this.body = body
    this.posterid = posterid

}

testpost = new Post('t',' testing', 'test','tester')