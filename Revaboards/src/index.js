const userApi = require('./repos/post-repos');
const postApi = require('./repos/user-repos');
const User = require('./models/user');

// when you fetch a user by id, also, grab their posts and add them to the user obj
userApi.getUserById(4, data => {
    console.log(data);
}, err => {
    console.error(err);
});

// let user = new User(0, 'test', 'test', 'test', 'test', 'test', new Date('01/01/2000'));
// userApi.addNewUser(user, addedUser => {
//     userApi.getAllUsers(users => console.log(users));
// });