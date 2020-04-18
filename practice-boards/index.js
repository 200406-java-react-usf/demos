const userApi = require('./user-api');


//returns array of all users
userApi.promiseAllUsers.then(result => console.log(result))
                        .catch(err => console.log(err));
                        

