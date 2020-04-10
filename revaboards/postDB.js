// create a simple mock DB(array) of Post object
const Post = require(`./models/post`);
let id = 1;

module.exports = [
    new Post(id++, "post 1", "this is the first post", "3", new Date(`01/01/2020`)),
    new Post(id++, "post 2", "this is the second post", "1", new Date(`01/01/2020`)),
    new Post(id++, "post 3", "this is the third post", "2", new Date(`01/01/2020`)),
    new Post(id++, "post 4", "this is the fourth post", "5", new Date(`01/01/2020`)),
    new Post(id++, "post 5", "this is the fifth post", "5", new Date(`01/01/2020`))
]