const userData = require('../userDb');
const User = require(`../models/user`);

const getAllUsers = (callback) => { setTimeout(() => callback(userData), 250); }

// using timeout to simulate lag 
const getUserById = (id, callback) => {
    setTimeout(() => {
        let retrievedUser = null;
        for (user of userData) {
            if (user.id == id) {
                retrievedUser = user;
            }
        }
        callback(retrievedUser);
    }, 250);
}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {
        if (!un || !pw) throw Error(`Oh no! You gave me bad data`); //truthy/falsy in use here

        //fetch the sought user (declarative-style logic)
        const user = userData.filter(user => user.username === un && user.password == pw).pop();

        cb(user);

    }, 250);
}

const addUser = (username, password, firstName, lastName, email, dob, onComplete, onError) => {
    let id = userData.length;
    id++;
    let newUser = new User(id, username, password, firstName, lastName, email, dob)
    for (user of userData){
        if(id == userData[i].id) {
            onError('ID already exists'); 
            return; 
        }                             
     
        if(username == userData[i].username) {
            onError('username already in use');
            return;
        }                
     
        if(email == userData[i].email) {
            onError('an account with that email already exists');
            return;
        }         
    }
const updateUserByID = (id, callback) => {
        setTimeout((pw)=>{
            if (pw == userData.password) console.log("you cannot use your old password ");
            userData.password = pw;
        })
}
    userData.push(newUser);
    onComplete(userData);

}

module.exports = {
    getUserByCredentials,
    getUserById,
    addUser,
    getAllUsers
};