module.exports = function post(id, body, title, posterid, timeStamp) {

    this.id = id;
    this.body = body;
    this.title = title;
    this.posterid = posterid;
    this.timeStamp = timeStamp;
    //this.timeStamp = new Date(); //for specific day and time
}


   