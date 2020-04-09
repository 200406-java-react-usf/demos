// create a simple mock DB (array)  

const Post = require('./models/post');
let id = 1;

const postDataBase = [
    new Post(id++, 'Week A Learning Objectives', '...', 1),
    new Post(id++, 'Week A Knowledge Point', '...', 2),
    new Post(id++, 'Week A Node JS Discussion', '...', 3),
    new Post(id++, 'Design Patterns', '...', 4),
    new Post(id++, 'JavaScript data types', '...', 5)
]

const addNewPost = function(title, body, posterId){
    let myPost = new Post(id++, title, body, posterId);
    postDataBase.push(post);
}

module.exports = {
        postDataBase,
        addNewPost
};