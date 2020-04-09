const userData = require('../userDb');

const getUserById = function(id, callback) {

    // using a Timeout to simulate call latency
    setTimeout(function() {

        let retrievedUser = null;
        
        // very imperative-style logic
        for (user in userData) {
            if (user.id === id) {
                retrievedUser = user;
            }
        }

        callback(user);

    }, 250);
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

module.exports = {
    getUserById,
    getUserByCredentials
};