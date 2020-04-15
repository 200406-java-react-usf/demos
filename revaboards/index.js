const userApi = require('./api/user-api');
const postApi = require('./api/post-api');
const User = require('./models/user');

// when you fetch a user by id, also, grab their posts and add them to the user obj
// userApi.getUserById(1, user => {
//     postApi.getPostsByPosterId(user.id, posts => {
//         user.posts = posts;
//         console.log(user);
//     });
// });

// let user = new User(0, 'aa1nderson', 'password', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'));
//  userApi.addNewUser(user, addedUser => {
//      userApi.getAllUsers(users => console.log(users));
//  });


//userApi.getAllUsers(users => console.log(users));

userApi.getUserById(7, user => console.log(user), err => console.log(err));

//userApi.getUserByCredentials('ddavis', 'password', user => console.log(user));

//userApi.getUserbyEmail('aanderson@revature.com', user =>console.log(user));

