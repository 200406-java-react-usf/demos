// implement and export the methods: getPostById and getPostsByPosterId


let postData = require('../postDb');
const Post = require('./models/post')

const getPostsById = (id, cb) => {
    setTimeout(function(){

        if(!id && id <= 0) throw new Error('Oh no! You gave me bad data!');

        const post = postData.filter(post => post.id === id).pop();

        if(!post) throw new Error('No post found with provided id!');

        cb(post);

        for(post of postData){

            // Differences between =, ==, === (Strict Equality)
            if(post.id === postId){
                    retrievedpost = post;
            }
        }

        callback(retrievedUser);
    }, 250);
}

const getPostsByPosterId = (posterId, cb) => {
    setTimeout(() => {
           //const posts = postData.filter(post => post.posterId === posterId);
           //cb(posts);
           let retrievedpost = [];
            for(post of postData){
                if(post.posterId === id){
                    retrievedpost.push(post);
                }
            }

            callback(retrievedpost);

    }, 250);
}

const addNewPost = function(id, title, body, posterId){
    postData[id-1] = new Post(id, title, body, posterId);
}

module.exports = {
    getPostsById,
    getPostsByPosterId,
    addNewPost
};