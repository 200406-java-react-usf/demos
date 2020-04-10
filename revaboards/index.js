const userApi = require('./api/user-api');
const postApi = require('./api/post-api');
// when you fetch a user by id, also, grab their posts and add them to the user obj
userApi.getUserById(1, users => {
    postApi.getPostsByPosterId(user.id, posts => {
        user.posts = posts;
        console.log(users);
    });
});
