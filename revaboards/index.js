const userApi = require('./api/user-api');
const postApi = require('./api/post-api');
const User = require('./models/user');

// when you fetch a user by id, also, grab their posts and add them to the user obj
// userApi.getUserById(4, data => {
//     console.log(data);
// }, err => {
//     console.error(err);
// });

// userApi.getUserByUsername('jvalencia', obj => {
//     console.log(obj);
// });

// userApi.getUserByCredentials('aanderson','', (err, result)=> {
//     //handle error (if present)
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log(result);
// })
// let user = new User(0, 'test', 'test', 'test', 'test', 'test', new Date('01/01/2000'));
// userApi.addNewUser(user, addedUser => {
//     userApi.getAllUsers(users => console.log(users));
// });
userApi.getAllUsers(users => {
    console.log(users);
})