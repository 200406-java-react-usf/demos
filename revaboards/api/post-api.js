//implement and export the methods: getPostById and get PostsByPosterId

const postData = require('../postDB')

const getPostById = (id, cb) => {
    setTimeout(() => {

            const post = postData.filter(post => post.id === id).pop();
            if(!post) throw new Error('NO post found with provided id!');
            cb(post);
    },250);

}

const getPostByPosterId = (posterId, cb) => {
    setTimeout(() => {
        const posts = postData.filter(post => post.posterId === posterId);
        cb(posts);
    },250);
}

module.exports = {
    getPostById, getPostByPosterId
}