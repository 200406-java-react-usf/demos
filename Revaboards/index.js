const userApi = require('./api/user-api');

userApi.getUserById(1, function(user) {
    console.log(user);
})