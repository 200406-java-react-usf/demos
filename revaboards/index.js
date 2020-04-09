const userApi = require('./api/user-api');

const postApi = require('./api/post-api');

// When you fetch a user by id, also, grab their posts and add them to the user obj
userApi.getUserById(1, user =>{
    postApi.getPostsByPosterId(user.id, posts => {
        //callback hell
        user.posts = posts;
        console.log(user);
    })
});

postApi.addNewPost("test title", "test body", 1, post => {
    console.log(post);
});

/*postApi.getPostsById(1, post =>{
    console.log(post);
});*/