//implement and export methods: get post by ID, get posts by poster ID
const postData = require('../postDB');

const getPostByID = (id, cb) => {

    setTimeout((id, cb) => {

        const post = postData.filter(post => postId === id).pop();
        if (!post) throw new Error('could not find post');
        cb(post);
    }
  , 250 );

}


const getPostsByPosterId = (posterId, cb) => {

    setTimeout (() => {
        const posts = postData.filter(post => post.posterId === posterId);
        cb(posts);
    }, 250);

};



module.exports = {

    getPostByID,
    getPostsByPosterId

}


