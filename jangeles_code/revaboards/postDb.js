// create a simple mock DB (array) of Post objects
const Post = require('./models/post');
let id = 1;
// let posterId = window.prompt("What is your user id?");

module.exports = 
[
    new Post(id++, 'First Post', 'isughdf', 'McDonald'),
    new Post(id++, 'Second Post', 'igsdg', 'McWrap'),
    new Post(id++, 'Third Post', 'ihrtejhfyj', 'McMac'),
    new Post(id++, 'Fourth Post', 'ingtfuytk', 'McMackies'),
    new Post(id++, 'Fifth Post', 'liuoyrtr', 'McWtf')
    // new Post(id++, 'Sixth Post', 'bgkjhbkthr jhtujr', posterId)
];