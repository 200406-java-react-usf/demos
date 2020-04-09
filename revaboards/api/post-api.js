// implement and export the methods: getPostById and getPostsByPosterId
const postData = require('../postDb');

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