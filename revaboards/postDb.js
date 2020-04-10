// create a simple mock DB (array) of Post objects
const Post = require('./models/post');
let id = 1;

module.exports = [
   new Post(id++, "hello world!", "this is my first post", 5),
   new Post(id++, "hello world! again", "this is also my first post", 3),
   new Post(id++, "hello world! again again", "Now, this is my first post", 2),
   new Post(id++, "hello world! again again again", "this is'nt my first post", 1),
   new Post(id++, "hello world! again again again again", "this is my second post", 3),
]