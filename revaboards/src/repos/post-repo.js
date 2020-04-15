// implement and export the methods: getPostById and getPostsByPosterId
<<<<<<< HEAD:revaboards/src/repos/post-repos.js
const postData = require('../data/data/postDb');
=======
const postData = require('../data/post-db');
>>>>>>> 69732849739a1b6d7ecae9bf2cca1fb4b6a6524c:revaboards/src/repos/post-repo.js

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

module.exports = {
    getPostById,
    getPostsByPosterId
}