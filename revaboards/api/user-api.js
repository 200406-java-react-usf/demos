const userData = require('../userDB');

const getUserById = function(id, callback){
    // timeout simiulates latency
    setTimeout(function(){

        let retrievedUser = null;
        //imperative
        for (user in userData){

            if (user.id === id){

                retrievedUser = user;

            }

        }

        callback(user);

    }, 250);

}

const getUserByCredentials = (un, pw, cb) => {

    setTimeout(() => {
        // check to make sure there is a un and pw
        if (!un || !pw){

            throw Error('Bad data');

        }

        //fetch the user were looking for
        // filters the array using the un and pw
        // **** filter returns an array with the filter, need to use pop to take the first element out of array
        const user = userData.filter((user) => {
           return user.username === un && user.password === pw
        }).pop();

    },250);

    cb(user);

}

module.exports = {

    getUserById,
    getUserByCredentials

};