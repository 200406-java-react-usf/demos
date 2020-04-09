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

        // fetch the sought user
        const user = userData.filter(user => {
            return user.username === un && user.password == pw;
        }).pop();

        cb(user);

    }, 250);
}

module.exports = {
    getUserById,
    getUserByCredentials
};