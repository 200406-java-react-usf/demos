/*Create a simple mock DB (array) of post objectsconst User = require("./models/user");
const Post = require("./models/post");
const User = require("./models/user");

let postId = 1;

module.exports = [
  
    new post(postId++, 'Hello World', 'My name is user 1', 1);
    new post(postId++, 'Hello', 'My name is user 2', 2);
    new post(postId++, 'Hey', 'My name is user 3', 3);
    new post(postId++, 'Hi', 'My name is user 4', 4);
    new post(postId++, 'Sup', 'My name is user 5', 5);
    new post(postId++, 'Question', 'How many post have I posted?', 1);
  
];
*/

const Post = require("./models/post");

let id = 1;

module.exports = [
  new Post(id++, "Hello World", "This is my first post! Huzzah!", 1),
  new Post(
    id++,
    "this is cool",
    "NodeJS is so awesome! It uses the same JS engine as Google Chrome: V8",
    1
  ),
  new Post(id++, "no limits", "NodeJS is a runtime enviromet", 2),
  new Post(
    id++,
    "in the cloud",
    "the ability to run JS outside the browser has made NodeJS popular 4..",
    3
  ),
  new Post(
    id++,
    "single-threaded?",
    "I've heard that JS is a single-threaded..",
    4
  ),
  new Post(id++, "Question", "How many post have I posted?", 1),
];
