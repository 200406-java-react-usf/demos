const userApi = require('./api/user-api');
const postApi = require('./api/post-api');

//callback function added to tell the other func what to do with the returned user
userApi.getUserById(1, (user) => {

    postApi.getPostsByPosterId(user.id, posts => {

        //use callback to use the poster id to find the posts by this author

        user.posts = posts;
        console.log(user);

    })

});


//when you fetch a user by ID, also fetch their posts and add them to the user obj

