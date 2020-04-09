const userApi = require('./api/user-api');
const postApi = require('./api/post-api');

userApi.getUserById(1, function(user) {
    console.log(user);
})