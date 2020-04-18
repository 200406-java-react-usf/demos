const userData = require('./user-db');
const User = require('./user');

let promiseAllUsers = new Promise((resolve,reject) => {
    setTimeout(() => {
        let users = [];
        if(users.length <= 0){
            reject('No Users Exists');
            return;
        }
        
        for (user of userData){
            users.push(user);
        }
        resolve(users);
        
    }, 1000);
});


module.exports = {

    promiseAllUsers

}
