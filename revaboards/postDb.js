const Post = require('./models/post');
let id = 1;

module.exports = [
   new Post(id++, 'Body of First post', 'Intro to First', '1', new Date('01/10/1998')),
   new Post(id++, 'Body of Second post', 'Intro to Second', '2',new Date('01/10/1998')),
   new Post(id++, 'Body of Third post', 'Intro to Third', '3',new Date('01/10/1998')),
   new Post(id++, 'Body of Fourth post', 'Intro to Fourth', '4',new Date('01/10/1998')),
   new Post(id++, 'Body of Fifth post', 'Intro to Fifth', '5',new Date('01/10/1998'))
];
