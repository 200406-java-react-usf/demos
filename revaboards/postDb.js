const Post = require('./model/post')
let id = 1 

module.exports = [
    new Post(id++, "aa","password a a aa@ a", ),
    new Post(id++, "bb","passwordbbb@a", ),
    new Post(id++, "cc","passwordcccc@a", ),
    new Post(id++, "dd", "passworddddd@a", ),
    new Post(id++, "ee", "passwordeeee@a", ),
    new Post(id++, "ff","passwordffff@a", ),
    
    ]