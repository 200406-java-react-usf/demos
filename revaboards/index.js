const userApi = require('./api/user-api');

// when you fetch a user by id, also, grab their posts and add them to the user obj
userApi.getUserById(1, user => {
    console.log(user);
});