const userApi = require('./api/user-api');
const postApi = require('./api/post-api');

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