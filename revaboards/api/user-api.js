const userData = require('../userDb');

const getAllUsers = (cb) => setTimeout(() => cb(userData), 250);

const getUserById = function(id, callback) {

    console.log(`You are looking for id: ${id}`)

    // using a Timeout to simulate call latency
    setTimeout(function() {

        let retrievedUser = null;
        
        // very imperative-style logic
        // look into the difference between for..in and for..of
        for (user of userData) {

            // Differences between =, ==, === (strict equality)
            // 5 == '5' true
            // 5 === '5' false
            if (user.id == id) {
                retrievedUser = user;
            }
            
        }

        callback(retrievedUser);

    }, 2500);
}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {
        
        // validation to ensure we do not waste resources
        if (!un || !pw) throw Error('Oh no! You gave me bad data'); // truthy/falsy in use here

        // fetch the sought user (declarative-style logic)
        const user = userData.filter(user => user.username === un && user.password == pw).pop();

        /* 
            other "functional" methods for arrays include: 
                - filter
                - map
                - reduce
        */

        // validate that we actually obtained a user
        if (!user) throw new Error('Invalid credentials provided!');

        // invoke the provided callback function
        cb(user);

    }, 250);
}

const addNewUser = (newUser, cb) => {

    setTimeout(() => {

    // validate the user
    let newUsername = newUser.username;
    let newEmail = newUser.email;

    for (user of userData){

        if (newUsername === user.username || newEmail === user.email){

            throw Error("username or email already exists");
        }
    }

    // get the next id (would not be necessary with a real DB)
    let length = userData.length
    newUser.id = (userData.length) + 1;


    // add user user to data source
    userData.push(newUser);

    cb(newUser);

}, 250)
}

const getUserByEmail = (email, cb) => {

    setTimeout(() => {

        let retrievedEmail = null;

        if (!email) throw Error('Provide an email');

        retrievedEmail = userData.filter((user) =>
            user.email === email)
            
            .pop();

         cb(retrievedEmail);
    }, 250)
}

const getUserbyUsername = (username, cb) => {

    setTimeout(() => {

        let searchedUser = null;

        if (!username) throw Error ('Provide a username');

        searchedUser = userData.filter((user) =>
        user.username === username)
        
        .pop();
        
        cb(searchedUser);
    }, 250)
    }

module.exports = {
    getAllUsers,
    getUserById,
    getUserByCredentials,
    addNewUser,
    getUserByEmail,
    getUserbyUsername,
    addNewUser
}