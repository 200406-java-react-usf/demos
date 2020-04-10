const userApi = require('./api/user-api');
const postApi = require('./api/post-api');
<<<<<<< HEAD

//when you fetch a user by id, also , grab their posts and add them to them to the user obj

userApi.getUserById(1, user => {
    postApi.getPostByPosterId(user.id, posts => {
        user.posts = posts
        console.log(user);
    })
});

userApi.getAllUsers(user => { console.log});
userApi.setUser('kwageheim','password','Kevin','Wageheim','kwageheim@revature.com',new Date(1994,1,1));

userApi.getUserById(7, user => {console.log(user);});
=======
const User = require('./models/user');

// when you fetch a user by id, also, grab their posts and add them to the user obj
userApi.getUserById(4, data => {
    console.log(data);
}, err => {
    console.error(err);
});

<<<<<<< HEAD
let user = new User(0, 'test', 'test', 'test', 'test', 'test', new Date('01/01/2000'));
userApi.addNewUser(user, addedUser => {
    userApi.getAllUsers(users => console.log(users));
});
>>>>>>> 5489cd5c84195769ed6ae426bd081c47efd5a1b8
=======
// let user = new User(0, 'test', 'test', 'test', 'test', 'test', new Date('01/01/2000'));
// userApi.addNewUser(user, addedUser => {
//     userApi.getAllUsers(users => console.log(users));
// });
>>>>>>> a965acf5469cb0a8886c1ab05add5b871b82c7b0
