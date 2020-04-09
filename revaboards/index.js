const userApi = require('./api/user-api');
const postApi = require('./api/post-api');

// when you fetch a user by id, also, grab their posts and add them to the user obj
userApi.getUserById(1, user => {
    postApi.getPostsByPosterId(user.id, posts => {
        user.posts = posts;
        console.log(user.posts);
    });
});

userApi.addUser('tester', 'password', 'Jane', 'Doe', 'jane@revature.com', 'dob');
//userApi.printUsers();

postApi.addPost('This is a test', 'Testing whether our addPost function works.', 7);