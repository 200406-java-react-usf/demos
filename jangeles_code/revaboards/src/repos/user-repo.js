const userData = require('../data/user-db');

module.exports = (function() {

    let instance;

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
        
            console.log(`You are looking for id: ${id}`)
        
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
        
        const getUserByCredentials = (un, pw, cb) => {
            setTimeout(() => {
                
                // validation to ensure we do not waste resources
                if (!un || !pw) {
                    cb('Oh no! You gave me bad data');
                    return;
                }
                
                // fetch the sought user (declarative-style logic)
                let user = userData.filter(user => user.un === un && user.pw == pw).pop();
        
                // validate that we actually obtained a user
                if (!user) {
                    cb('Invalid credentials provided!');
                    return;
                }
            
                cb(null, user);
        
            }, 250);
        }
        
        const addNewUser = (newUser, onComplete, onError) => {

            if (!newUser) {
                onError('Error: Falsy user provided');
                return;
            }

            // if(newUser.length !== to )

            // how to validate that all required fields of User are not falsy
            let invalid;

            if(invalid) {
                cb('Error: Invalid property values found in provided user');
                return;
            }

            setTimeout(() => {

                // ensure that new users cannot have the same username as an existing user
                let conflict;

                if(conflict) {
                    cb('Error: The provided username is already taken.');
                    return;
                }

                // ensure that new users cannot have the same email as an existing user
                conflict;

                if(conflict) {
                    cb('Error: The provided email is already taken.');
                    return;
                }

                newUser.id = (userData.length) + 1;
                userData.push(newUser);

                // emit a 'newRegister' event on mail-worker
                
                cb(null, newUser);

            }, 250);
        
        }
        // const updateUser = function(id, key, newInput, onComplete, onError){
        //     if (typeof id !== 'number' || !Number.isInteger(id) || id <= 0) {
        //         onError('Bad request, invalid id value provided.');
        //         return;
        //     };
        //     setTimeout(function() {
        //         let retrievedUser = null;
        //         for (user of userData) {
        //             if (user.id == id) {
        //                 retrievedUser = user;
        //             }  
        //         }
        //         if (!retrievedUser) {
        //             onError('No user found with provided id.');
        //             return;
        //         }
        //         // get the field that needs to be updated and replace with new entry          
        //         // let retrievedUser = getUserById(id, onComplete, onError);
        //         if (key === 'id') {
        //             onError('You can\'t change your id');
        //             return;
        //         }
        //         retrievedUser[key] = newInput;
        //         onComplete(retrievedUser);
        //     }, 250);
        // }

        const updateUser = (udatedUser, cb) =>
        {
            if (!udatedUser)
            {
                cb('Falsy user object provided');
                return;
            }

            if(!updateUser.id || !Number.isInteger(updateUser.id) || updateUser.id <= 0)
            {
                cb('A valid id must be provided for update operations');
                return;
            }

            let invalid = !Object.keys(updateUser).some(key => updateUser[key]);

            if (invalid)
            {
                cb('Invalid property values found in provided user')
                return;
            }

            setTimeout(() => 
            {
                let persistedUser = userData.find(user => user.id == updateUser.id);
                if(!persistedUser) {
                    cb('No user found with provided id');
                    return;
                }

                if(persistedUser.un != updateUser.un)
                {
                    cb('Usernames cannot be updated at this time.');
                    return;
                }

                const conflict = userData.filter(user => 
                {
                        if(user.id == updateUser.id) return false;
                        return user.email == updateUser.email;
                }).pop();

                if(conflict)
                {
                    cb('Provided email is already in use by another user.')
                    return;
                }

                persistedUser = updateUser;
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

    }

    return {
        getInstance: function() {

            // if (!instance) {
            //     instance = init();
            // }

            // return instance;

            //      boolean         if true        if false   
            return !instance ? instance = init() : instance; // ternary operators (cool looking if/else)

        }
    };

})();