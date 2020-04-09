const userData = require('../userDb');

const getUserById = function(id, callback) {

    //using a Timeout to simulate call latency
    setTimeout(function() {

        let retrievedUser = null

        //very imperitive logic
        //look into the difference between for..in and for..of
        for (user of userData) {
            if (user.id === id) {
                retrievedUser = user;
            }
        }

        callback(retrievedUser);

    }, 250);
}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {
        //validation to ensure we do not waste resources
        if(!un || !pw) throw Error('Error: You gave me bad data.'); //truthy/falsy in use

        const user = userData.filter(user => {
            return user.username === un && user.password == pw;
        }).pop();
        /*  
            Can also be written as:
            -----------------------------
            (declarative style)
            const user = userData.filter(user => user.username === un && user.password == pw)).pop();
            -----------------------------
            const user = userData.filter(function(user) {
                return user.username === un && user.password == pw;
            }).pop();
        */

        /*
            other "functional" methods for arrays include:
                -filter
                -map
                -reduce
         */


        //validate that we actually obtained a user
        if (!user) throw new Error('Invalid credentials provided!');

        //invoke the provided callback function
        cb(user);
    }, 250);
}



module.exports = {
    getUserById,
    getUserByCredentials
};