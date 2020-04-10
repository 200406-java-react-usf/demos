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

const addUser = (username, password, firstName, lastName, email, dob, cb) => {
    let id = userData.length
    let newUser = new User(++id, username, password, firstName, lastName, email, dob)
    userData.push(newUser);
    cb(userData);

}


module.exports = {
    getUserByCredentials,
    getUserById,
    addUser,
    getAllUsers
};