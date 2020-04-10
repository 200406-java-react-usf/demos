// implement and export the methods: getPostById and getPostsByPosterId

let postData = require('../postDb');
const Post = require('../models/post');

// - getAllPosts()

const getAllPosts = function (callback) {
    let allPosts = [];
    setTimeout(function () {
        for (post of postData) {
            allPosts.push(post);
        }
        callback(allPosts);
    }, 1000);
}

// - getPostsByPosterId(id) [make sure you return an array of that user's posts]

const getPostsByPosterId = function (id, callback) {
    console.log(`You are looking for posts of user id: ${id}`)
    setTimeout(function () {
        let retrievedPost = [];
        //check if positive number
        if (Number.isInteger(id) && id >= 0) {
            for (post of postData) {
                if (post.posterID == id) {
                    retrievedPost.push(post);
                }
            }
        }
        callback(retrievedPost);
    }, 1000);
}
// - getPostsByTitle(un) [titles need not be unique]

const getPostsByTitle = function (str, callback) {
    console.log(`You are looking for posts by title: ${str}`)
    setTimeout(function () {
        let retrievedPost = [];
        //check if string
        if (typeof str == "string") {
            for (post of postData) {
                if (post.title == str) {
                    retrievedPost.push(post);
                }
            }
        }
        callback(retrievedPost);
    }, 1000);
}
// - getPostById(id) [ids should be unique]
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
    }, 1000);
}
// - addNewPost(newUser) [ensure that posts added to the data source are valid]
const addNewPost = function (title, body, posterID, callback) {
    setTimeout(function () {
        let id = postData.length + 1;
        let newPost = new Post(id, title, body, posterID);
        //{object}[location] = new post object
        postData.push(newPost)
        callback(postData);
    }, 1000);
}
// - updatePost(updatedUser) [what kind of things should not be updateable?]
const updatePost = function (id, title, body, posterID, callback){
    setTimeout(function () {
        postData[id-1] = new Post(id, title, body, posterID);
        callback(postData);
    }, 1000);
}
// - deletePostById(id)

const deletePostById = function (id, callback) {
    setTimeout(function () {
        postData[id-1] = null;
        callback(postData);
    }, 1000);
}

module.exports = {
    getAllPosts,
    getPostsByPosterId,
    getPostsByTitle,
    getPostById,
    addNewPost,
    updatePost,
    deletePostById
};