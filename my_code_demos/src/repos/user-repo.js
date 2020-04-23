const data = require('../data/user-db');
const errors = require('../errors/errors');
const mailWorker = require('../util/mail-worker');

module.exports = (function() {

    let instance;

    function init() {

        const getAllUsers = (cb) => {

            setTimeout(() => {
                
                let users = [];
    
                for (user of data) {
                    users.push({...user});
                }
        
                if (users.length == 0) {
                    cb(new errors.ResourceNotFoundError());
                    return;
                }
        
                users = users.map(user => {
                    delete user.password;
                    return user;
                });
        
                cb(null, users);
        
            }, 250);
        }
    
        const getUserById = (id, cb) => {
    
            if (typeof id !== 'number' || !Number.isInteger(id) || id <= 0) {
                cb(new errors.BadRequestError());
                return;
            }
           
            setTimeout(() => {
        
                const user = {...data.filter(user => user.id === id).pop()};
                
                if (!user) {
                    cb(new errors.ResourceNotFoundError());
                    return;
                }
        
                cb(null, user);
        
            }, 250);
        
        }
        
        const getUserByUsername = (un, cb) => {
        
            if (typeof un !== 'string' || !un) {
                cb(new errors.BadRequestError());
                return;
            }
           
            setTimeout(() => {
        
                const user = {...data.filter(user => user.username === un).pop()};
                
                if (Object.keys(user).length == 0) {
                    cb(new errors.ResourceNotFoundError());
                    return;
                }
        
                cb(null, user);
        
            }, 250);
        
        }
        
        const getUserByCredentials = (un, pw, cb) => {
        
            if (!un || !pw || typeof un !== 'string' || typeof pw !== 'string') {
                cb(new errors.BadRequestError());
                return;
            }
        
            setTimeout(() => {
        
                const user = data.filter(user => user.username === un && user.password === pw).pop();
                
                if (!user) {
                    cb(new errors.AuthenticationError('Bad credentials provided.'));
                    return;
                }
                
                cb(null, user);
        
            }, 250);
        
        }
        
        const addNewUser = (newUser, cb) => {
            
            if (!newUser) {
                cb(new errors.BadRequestError('Falsy user object provided.'));
                return;
            }
        
            let invalid = !Object.keys(newUser).every(key => {
                if(key == 'id') return true;
                return newUser[key]
            });
        
            if (invalid) {
                cb(new errors.BadRequestError('Invalid property values found in provided user.'));
                return;
            }
        
            setTimeout(() => {
        
                let conflict = data.filter(user => user.username == newUser.username).pop();
        
                if (conflict) {
                    cb(new errors.ResourcePersistenceError('The provided username is already taken.'));
                    return;
                }
        
                conflict = data.filter(user => user.email == newUser.email).pop();
        
                if (conflict) {
                    cb(new errors.ResourcePersistenceError('The provided email is already taken.'));
                    return;
                }
        
                newUser.id = (data.length) + 1;
                data.push(newUser);

                mailWorker.emit('newRegister', newUser.email);
        
                cb(null, newUser);
        
            });
        
        }
        
        const updateUser = (updatedUser, cb) => {
        
            if (!updatedUser) {
                cb(new errors.BadRequestError('Falsy user object provided.'));
                return;
            }
        
            if (!updatedUser.id) {
                cb(new errors.BadRequestError('An id must be provided for update operations.'));
                return;
            }
        
            let invalid = !Object.values(updatedUser).every(val => val);
        
            if (invalid) {
                cb(new errors.BadRequestError('Invalid property values found in provided user.'));
                return;
            }
        
            setTimeout(() => {
        
                let persistedUser = data.find(user => user.id === updatedUser.id);
        
                if (!persistedUser) {
                    cb(new errors.ResourceNotFoundError('No user found with provided id.'))
                }
                
                if (persistedUser.username != updatedUser.username) {
                    cb(new errors.ResourcePersistenceError('Usernames cannot be updated.'));
                    return;
                }
        
                const conflict = data.filter(user => {
                    if (user.id == updatedUser.id) return false;
                    return user.email == updatedUser.email; 
                }).pop();
        
                if (conflict) {
                    cb(new errors.ResourcePersistenceError('Provided email is taken by another user.'));
                    return;
                }
    
                persistedUser = updatedUser;
                cb(null, true);
        
            });
        
        }
    
        return {
            getAllUsers,
            getUserById,
            getUserByUsername,
            getUserByCredentials,
            addNewUser,
            updateUser
        }

    }

    return {
        getInstance: function() {
            return !instance ? instance = init() : instance;
        }
    }

})();
