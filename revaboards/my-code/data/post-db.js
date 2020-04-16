// create a simple mock DB of post objs
const Post = require('../models/post');

let id = 1;

module.exports = [

    new Post(id++, 'Title One','Body one', 1),
    new Post(id++, 'Title Two', 'Body Two', 1),
    new Post(id++, 'Title Three', 'Body Three', 1),
    new Post(id++, 'Title Four', 'Body Four', 3),
    new Post(id++, 'Title Five', 'Body Five', 4)

]