// implement and export the methods: getPostById and getPostsByPosterId
const postData = require('../postDb');
const Post = require('../models/post') 

const getPostById = (id, cb) => {
    setTimeout(() => {
        if (!id || id <= 0) throw new Error('Oh no! You gave me bad data!');
        const post = postData.filter(post => post.id === id).pop();
        if (!post) throw new Error('No post found with provided id!');
        cb(post);
    }, 250);
}

const getPostsByPosterId = (posterId, cb) => {
    setTimeout(() => {
        const posts = postData.filter(post => post.posterId === posterId);
        cb(posts);
    }, 250);
}

const addPost = function(title, body, posterId){
    console.log(postData.length);
    let id = null;
    id = postData.length +1;
    postData.push(new Post(id, title, body, posterId));
    console.log(postData);
}

module.exports = {
    getPostById,
    getPostsByPosterId,
    addPost
}