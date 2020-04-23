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

let getUserById = function(id){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(!id || id <= 0 || id > userData.length){
                reject('Please give valid ID');
            }
            resolve(userData[id-1]);
        },1000);

    });

};


module.exports = {

    promiseAllUsers,
    getUserById

}
