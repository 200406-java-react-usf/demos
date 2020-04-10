const userData = require('../userDb');

// - getAllUsers()



// - getUserById(id) [ids should be unique]
// - getUserByUsername(un) [usernames should be unique]
// -getUserByCredentials(un, pw)
// - getUserByEmail(email) [emails should be unique]
// - addNewUser(newUser) [ensure that users added to the data source are valid]
// - updateUser(updatedUser) [what kind of things should not be updateable?]
// - deleteUserById(id) [hmmm, what do with this person's posts??]





const getUserById = function(id, callback) {

    console.log(`You are looking for id: ${id}`)

    // using a Timeout to simulate call latency
    setTimeout(function() {

        let retrievedUser = null;
        
        // very imperative-style logic
        // look intop the difference between for..in and for..of
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

module.exports = {
    getUserById,
    getUserByCredentials
};