const data = require('../data/user-db');
const errors = require('../errors/errors');

module.exports = (function () 
{
    let instance;

    function init() 
    {
        const getAllUsers = (cb) => 
        {
            setTimeout(() => 
            {
                // make an empty array to store the users from the DB
                let users = [];
                // tranverse the array of the db
                for (let user of data) {
                    //push the array items from the db into users
                    users.push({
                        ...user
                    });
                }

                // here we just make sure that the array is not empty
                if (users.length === 0) {
                    cb(null, new errors.DataNotFound());
                    return;
                }

                // here we are deleting the password so 
                // that no one can see it
                users = users.map(updatedUsers => 
                    {
                        delete updatedUsers.pw;
                        return updatedUsers;
                    })

                cb(users, null);
            }, 1000);
        };   

        const getUserById = (id, cb) => 
        {
            if (typeof id !== 'number' || !Number.isInteger(id) || id < 1){
                cb(null, new errors.DataDoesntExist());
                return;
            }

            setTimeout(() => {
                const user = {...data.filter(user => user.id === id).pop()}
                if (!user){
                    cb(null, new errors.DataDoesntExist());
                    return;
                }
                cb(user, null);
            }, 1000)
        }
        
        const getUserByUsername = (un, cb) => 
        {
            if (typeof un !== 'string' || !un){
                cb (null, new errors.IncorrectData());
                return;
            }

            setTimeout(() => {
                let user = {...data.filter(user => user.un === un).pop()};
                if(!user){
                    cb(null, new errors.DataDoesntExist());
                    return;
                }
                cb(user, null);
            }, 1000)
        }

        const getUserByCredentials = (un, pw, cb) => 
        {
            if (typeof un !== 'string' || typeof pw !== 'string' || !un || !pw){
                new errors.IncorrectData();
                return;
            }
            setTimeout(() => {
                let user = {...data.filter(user => user.un === un && user.pw === pw).pop()};
                if(!user){
                    new errors.DataDoesntExist();
                    return;
                }
                cb(user, null);
            }, 1000)
        }
        return {
            getAllUsers,
            getUserById,
            getUserByUsername,
            getUserByCredentials
        }
    };
    return {
        getInstance: function(){
            return !instance ? instance = init() : instance;
        }
    }
})();