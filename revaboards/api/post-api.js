// implement and export the methods: getPostById and getPostsByPosterId

let postData = require('../postDb');
const Post = require('../models/post');


const getPostById = function (id, callback) {
    console.log(`You are looking for id: ${id}`)
    // using a Timeout to simulate call latency
    setTimeout(function () {
        let retrievedPost = null;
        // very imperative-style logic
        // look intop the difference between for..in and for..of
        for (post of postData) {
            if (post.id == id) {
                retrievedPost = post;
            }

        }

        callback(retrievedPost);

    }, 2500);
}
const getPostsByPosterId = function (id, callback) {

    console.log(`You are looking for id: ${id}`)
    // using a Timeout to simulate call latency
    setTimeout(function () {
        let retrievedPost = [];
        // very imperative-style logic
        // look intop the difference between for..in and for..of
        let i = 0;
        for (post of postData) {
            if (post.posterID == id) {
                retrievedPost.push(post);
            }
        }

        callback(retrievedPost);

    }, 2500);
}
const addPost = function (title, body, posterID) {
    //{object}[location] = new post object
    id = postData.length+1;
    postData.push(new Post(id, title, body, posterID))
}

const deletePost = function (id) {
    //{object}[location] = new post object
    postData[id] = new Post(id, "deleted", "deleted", "deleted");
}

module.exports = {
    getPostById,
    getPostsByPosterId,
    addPost,
    deletePost
};