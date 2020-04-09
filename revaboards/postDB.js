// create a simple mock DB (array) of Post Objects
// id, title, body, posterID

const Post = require('./models/post');
let id = 1;

let postDataBase = [
    new Post(id++, "Week A Learning Objectives", "...", 1),
    new Post(id++, "Week A Knowledge Points", "...", 1),
    new Post(id++, "Week A Nodejs Discussion", "...", 1),
    new Post(id++, "Design Patterns", "...", 1),
    new Post(id++, "JavaScript data types", "...", 1)
]

const addNewPost = function(title, body, posterID) {
    let myPost = new Post(id++, title, body, posterID);
    postDataBase.push(myPost);
}

module.exports = {
    postDataBase,
    addNewPost
};