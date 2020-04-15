const userApi = require('./api/user-api');
const postApi = require('./api/post-api');
const User = require('./models/user');

// when you fetch a user by id, also, grab their posts and add them to the user obj
// userApi.getUserById(4, data => {
//     console.log(data);
// }, err => {
//     console.error(err);
// });

<<<<<<< HEAD
// let user = new User(0, 'aa1nderson', 'password', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'));
//  userApi.addNewUser(user, addedUser => {
//      userApi.getAllUsers(users => console.log(users));
//  });


//userApi.getAllUsers(users => console.log(users));

userApi.getUserById(7, user => console.log(user), err => console.log(err));

//userApi.getUserByCredentials('ddavis', 'password', user => console.log(user));

//userApi.getUserbyEmail('aanderson@revature.com', user =>console.log(user));

=======
// userApi.getUserByCredentials('aanderson', 'passwor', (err, result) => {
    
//     // handle error (if present)
//     // if (err) {
//     //     console.log(err);
//     //     return;
//     // }

//     // console.log(result);

//     err && console.log(err);
//     result && console.log(result);

// })

// let user = new User(0, 'test', 'test', 'test', 'test', 'test', new Date('01/01/2000'));
// userApi.addNewUser(user, addedUser => {
//     userApi.getAllUsers(users => console.log(users));
// });

userApi.getAllUsers(users => {
    console.log(users);
});

userApi.getUserByCredentials('aanderson', 'password', user => {
    console.log(user)
}, err => {
    console.log(err)
});
>>>>>>> master
