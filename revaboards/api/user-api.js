const userData = require('../userDb');

const getAllUsers = (cb) => {
    setTimeout(() => cb(userData), 250);
};

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

    // 0, '', "", NaN, null, undefined, false <---- THE ONLY FALSY VALUES
    // {}, [], new Object(), "   ", '0', 'null'
    // validate the user
    if (!newUser) throw Error('Oh no! You gave me bad data!');

    // get the next id (would not be necessary with a real DB)
    newUser.id = (userData.length) + 1;

    // add user user to data source
    userData.push(newUser);

    cb(newUser);

}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByCredentials,
    addNewUser
};