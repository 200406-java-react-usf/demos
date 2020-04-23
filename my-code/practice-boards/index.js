const userApi = require('./user-api');


//returns array of all users
// userApi.promiseAllUsers.then(result => console.log(result))
//                         .catch(err => console.log(err));

//returns user when given an ID
userApi.getUserById(3).then(user => console.log(user))
                        .catch(err => console.log(err));
                        

