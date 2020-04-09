const userData = require('../userDB');
const User = require('../models/user')

const getAllUsers = (cb) => {
    setTimeout(() => {cb(userData),250});
}

const setUser = function( un, pw, fn, ln, email, dob) {
    let id = userData.length + 1;
    userData.push(new User(id, un, pw, fn, ln, email, dob));
    console.log(userData);
}

const getUserById = function(id, callback) {
    //using a timeout to simulate call latency
    setTimeout(function(){
        
        let retrievedUser = null;
            // very impertive approach
            console.log(userData);
        for(user of userData){
            if(user.id === id) {
                retrievedUser = user;
            }
        }

        callback(retrievedUser);

    },250);
}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {

        //validation to ensure we do not waster resources
        if(!un || !pw) throw Error('Oh no! You gave me bad data');

        //fetch the sought user (declarative-style logic)
        const user = userData.filter(user => user.username === un && user.password == pw).pop();

        //other "functional" methods for arrays include: -filter -map -reduce
        //validate that we actually obtained a user
        if(!user) throw new Error('Invalid credentials provided!');

        // invoke the provided callback function
        cb(user);

    },250);
}

module.exports = {
    getUserByCredentials,
    getUserById,
    setUser,
    getAllUsers
}