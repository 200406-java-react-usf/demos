const userApi = require('./api/user-api');

//callback function added to tell the other func what to do with the returned user
userApi.getUserById(1, (user) => {

    console.log(user);

});