//implement and export the methods: getPostByID and getPostsByPosterID
//add new post by poster & add a new user by array


const postData = require('../postDB');
const Post = require('../models/post');
const userapi = require('./user-api');

const getPostByID = function(postID, callback) {
    setTimeout(function() {
        let retrievedPost = null;
        if (!postID || postID <= 0) throw new Error("bad tata");
        for (post of postData.postDataBase) {
            if (post.id === postID) {
                retrievedPost = post;
            }
        }

        callback(retrievedPost);

    }, 250);
}

const getPostsByPosterID = function(id, callback) {
    setTimeout(function() {
        let retrievedPost = [];

        for (post of postData.postDataBase) {
            if (post.posterID === id) {
                retrievedPost.push(post);
            }
        }

        callback(retrievedPost);

    }, 250);
}

const addNewPostByPoster = function(title, body, posterID, cb) {
    postData.addNewPost(title, body, posterID); 
    cb(postData);
}


module.exports = {
    getPostByID,
    getPostsByPosterID,
    addNewPostByPoster
};