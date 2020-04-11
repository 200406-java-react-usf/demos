//create a simple mock DB(array) of Post Obejcts
const Post = require('./models/post')
let id = 1

module.exports = [

    new Post(id++, 'hello1', 'how you doing1', 1),
    new Post(id++, 'hello2', 'how you doing2', 1),
    new Post(id++, 'hello3', 'how you doing3', 1),
    new Post(id++, 'hello11', 'how you doing11', 2),
    new Post(id++, 'hello22', 'how you doing22', 2),
    new Post(id++, 'hello33', 'how you doing33', 3),
    new Post(id++, 'hello44', 'how you doing44', 4),
    new Post(id++, 'hello44', 'how you doing44', 4),
]