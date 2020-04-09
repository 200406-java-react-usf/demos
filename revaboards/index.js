const userApi = require('./api/user-api');

userApi.getUserById(1, user => {
    console.log(user)
})