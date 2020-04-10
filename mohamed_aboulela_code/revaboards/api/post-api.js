// implement and export the methods: getPostById and getPostsByPosterId
const postData = require('../postDb');

const getAllPosts = (cb) => setTimeout(() => cb(postData), 250);

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

const addNewPost = (newPost, cb) => {

    // validate the user
    if(!newPost) throw Error('Oh no! You gave me bad data!');

    // get the next id (would not be necessary with a real DB)
    newPost.id = (postData.length) + 1;

    // add user user to data source
    postData.push(newPost);

    cb(newPost);
}

//getPostsByTitle(un)
//deletePostById(id)
//updatePost(updatedUser)

module.exports = {
    getPostById,
    getPostsByPosterId,
    addNewPost, 
    getAllPosts
}

