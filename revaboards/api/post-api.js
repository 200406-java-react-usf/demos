// implement and export the methods: getPostById and getPostsByPosterId
const postData = require('../postDb');

const getPostById = (id, cb) => {
    
    if (!id && id <= 0) throw new Error('Oh no');
    const post = postData.filter(post => post.id === id).pop();
    if(!post) throw new Error('No post found with provided ID!');
    cb(post);
}

const getPostsByPosterId = (posterId, cb) => {
    const posts = postData.filter(post => post.posterId === posterId);
    cb(posts);
}


module.exports = {
    getPostById,
    getPostsByPosterId
}