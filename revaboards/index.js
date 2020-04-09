const userApi = require('./api/user-api');
const postApi = require('./api/post-api');

/*  when you fetch a user by id, also, grab their posts and add them to the 
    user obj

    add new post by poster & add a new user by array
 */

userApi.getUserById(1, user => {
    postApi.getPostsByPosterID(user.id, posts => {
        user.posts = posts;
        //console.log(user);
    });
});

postApi.addNewPostByPoster("test title", "test body", 1,post => {
    //console.log(post);
});

postApi.addNewPostByPoster("test title2", "test body2", 1,post => {
    console.log(post);
});