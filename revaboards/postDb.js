// create a simple mock DB (array) of Post objects
const Post = require('./models/post');
let id = 1;
module.exports = [
    new Post(id++, "test 1", "test", 1),
    new Post(id++, "test 2", "test", 1),
    new Post(id++, "test 3", "test", 1),
    new Post(id++, "test 4", "test", 1),
    new Post(id++, "test 5", "test", 2)
]