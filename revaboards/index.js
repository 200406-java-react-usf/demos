const userApi = require('./api/user-api');
const postApi = require('./api/post-api');

// when you fetch a user by id, also, grab their posts and add them to the user obj
// userApi.getUserById(1, user => {
//     console.log(user);
// });

// postApi.getPostById(1, post => {
//     console.log(post);
// });

// postApi.getPostsByPosterId(2, post => {
//     console.log(post);
// });

// postApi.addPost("I am new", "I am new", 3);

// postApi.getPostById(6, post => {
//     console.log(post);
// });

// postApi.deletePost(1);

// postApi.getPostById(1, post => {
//     console.log(post);
// });

// getAllPosts,
//postApi.getAllPosts(post => {console.log(post);});
// getPostsByPosterId,
//postApi.getPostsByPosterId(1, post => {console.log(post);});
// getPostsByTitle,
//postApi.getPostsByTitle("test 2", post => {console.log(post);});
// getPostById,
//postApi.getPostById(5, post => {console.log(post);});
// addNewPost,
//postApi.addNewPost("I am new", "I am new", 3, post => {console.log(post);});
// updatePost,
postApi.updatePost(5, "I am updated", "I am updated", 3, post => {console.log(post);});
// deletePostById
//postApi.deletePostById(1, post => {console.log(post);});
