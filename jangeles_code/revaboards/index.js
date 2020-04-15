const userApi = require('./api/user-api');
const postApi = require('./api/post-api');
const User = require('./models/user');


// // when you fetch a user by id, also, grab their posts and add them to the user obj
// userApi.getUserById(1, user => {
//     postApi.getPostsByPosterId(user.id, posts => {
//         user.posts = posts;
//     });
// });

// let user = new User(0, 'test', 'test', 'test', 'test', 'test', new Date('01/01/2020'));
// userApi.addNewUser(user, addUser => 
//     {
//         userApi.getAllUsers(users)
//     })

// userApi.getAllUsers(users => console.log(users));

// userApi.getUserById(1, users => console.log(users));

userApi.getUserByCredentials('bbailey', 'password', users => console.log(users));
