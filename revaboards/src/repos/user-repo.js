const userData = require('../data/user-db');

const getAllUsers = (cb) => {
    
    setTimeout(() => {

        // mutating the actual User bojects in the data source
        // NOT FUNCTIONAL!

    function init() {
        
        const getAllUsers = (cb) => {
    
            setTimeout(() => {
        
                let users = [];
        
                for (user of userData) {
                    let clone = {...user};
                    users.push(clone);
                }
        
                if (users.length == 0) {
                    cb('No users found!');
                    return;
                }
        
                users = users.map(user => {
                    delete user.password;
                    return user;
                });
        
                cb(null, users);
        
            }, 250);
        };
        
        const getUserById = function(id, onComplete, onError) {
        
            if (typeof id !== 'number' || !Number.isInteger(id) || id <= 0) {
                onError('Bad request, invalid id value provided.');
                return;
            };
        
            setTimeout(function() {
        
                let retrievedUser = null;
        
                for (user of userData) {
                    if (user.id == id) {
                        retrievedUser = user;
                    }  
                }
        
                if (!retrievedUser) {
                    onError('No user found with provided id.');
                    return;
                }
        
                onComplete(retrievedUser);
        
            }, 250);
        }

        if (!retrievedUser) {
            onError('No user found with provided id.');
            return;
        }
        if (!retrievedUser) {
            onError('User not found for provided id');
            return;
        }
        onComplete(retrievedUser);

        onComplete(retrievedUser);

    }, 250);
}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {
        
        // validation to ensure we do not waste resources
        if (!un || !pw) {
            cb('Oh no! You gave me bad data');
            return;
        }
        
        // fetch the sought user (declarative-style logic)
        let user = userData.filter(user => user.username === un && user.password == pw).pop();

        /* 
            other "functional" methods for arrays include: 
                - filter
                - map
                - reduce
        */

        // validate that we actually obtained a user
        if (!user) {
            cb('Invalid credentials provided!');
            return;
        }
        
        // GUARD OPERATOR
        // console.log(user); // user == undefined
        // user = user || {username: 'failed-login', password: 'failed-login'};


        // invoke the provided callback function
        cb(null, user);

    }, 250);
}

const addNewUser = (newUser, cb) => {

    // 0, '', "", NaN, null, undefined, false <---- THE ONLY FALSY VALUES
    // {}, [], new Object(), "   ", '0', 'null'
    // validate the user
    if (!newUser) throw Error('Oh no! You gave me bad data!');

    //check to verify user is not already in databsse
    for (user of userData){
        //if (user.id == newUser.id) throw Error ('User Id already exist');
        if (User.username == newUser.username) throw Error ('Username already in use')
        if (user.email == newUser.email) throw Error ('Email already in use.')
    }

    // get the next id (would not be necessary with a real DB)
    newUser.id = (userData.length) + 1;

    // add user user to data source
    userData.push(newUser);

    cb(newUser);

}

const getUserbyEmail = (email, cb) => {
    setTimeout(function() {
        if(!email) throw Error('Oh no! You gave me bad data.')

        const updateUser = (updatedUser, cb) => {

            if(!updatedUser) {
                cb('Falsy user object provided.');
                return;
            }

            if(!updatedUser.id || !Number.isInteger(updatedUser.id) || updatedUser.id <= 0) {
                cb('A valid id must be provided for update operations.');
                return;
            }

            let invalid = !Object.keys(updatedUser).some(key => {
                console.log(updatedUser[key], !!updatedUser[key]);
                return updatedUser[key];
            });

            if (invalid) {
                cb('Invalid property values found in provided user.');
                return;
            }

            setTimeout(() => {

                let persistedUser = userData.find(user => user.id == updatedUser.id);

                if(!persistedUser) {
                    cb('No user found with provided id.');
                    return;
                }

                if(persistedUser.username != updatedUser.username) {
                    cb('Usernames cannot be updated at this time.');
                    return;
                }

                const conflict = userData.filter(user => {
                    if(user.id == updatedUser.id) return false;
                    return user.email == updatedUser.email;
                }).pop();

                if(conflict) {
                    cb('Provided email is already in use by another user.');
                    return;
                }

                persistedUser = updatedUser;
                cb(null, true);

            }, 250);
        }

        return {
            getAllUsers,
            getUserById,
            getUserByCredentials,
            addNewUser,
            updateUser
        };

        for (user of userData){
          
            if (user.email == email) {
                retrievedEmail = user;
            }

    return {
        getInstance: function() {  
            return !instance ? instance = init() : instance;
        }
    };

module.exports = {
    getAllUsers,
    getUserById,
    getUserByCredentials,
    addNewUser,
    getUserbyEmail
};         