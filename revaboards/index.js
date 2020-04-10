const userApi = require('./api/user-api');
const postApi = require('./api/post-api');
<<<<<<< HEAD

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
=======
const User = require('./models/user');

// when you fetch a user by id, also, grab their posts and add them to the user obj
// userApi.getUserById(1, user => {
//     postApi.getPostsByPosterId(user.id, posts => {
//         user.posts = posts;
//         console.log(user);
//     });
// });

let user = new User(0, 'test', 'test', 'test', 'test', 'test', new Date('01/01/2000'));
userApi.addNewUser(user, addedUser => {
    userApi.getAllUsers(users => console.log(users));
});
>>>>>>> master
