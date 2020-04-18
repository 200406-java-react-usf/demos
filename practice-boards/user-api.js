const userData = require('./user-db');
const User = require('./user');

let promiseAllUsers = new Promise((resolve,reject) => {
    setTimeout(() => {
        let users = [];
        
        
        for (user of userData){
            users.push(user);
        }

        if(users.length <= 0){
            reject('No Users Exists');
            return;
        }

        resolve(users);
        
    }, 1000);
});


module.exports = {

    promiseAllUsers

}
