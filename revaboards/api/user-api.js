const userDate = require('../userDb');

const getUserById = function(id, callback){

    //Using a timeout to simulate call latency
    setTimeout(function(){

        let retrievedUser = null;

        // very imperative-style logic
        //look into the difference between for..in and for..of
        for(user of userData){

            // Differences between =, ==, === (Strict Equality)
            if(user.id === id){
                    retrievedUser = user;
            }
        }

        callback(retrievedUser);

    }, 250);
}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {
            //validation to ensure we do not waste resources
            if(!un || !pw){
                throw Error('On no!, You gave me bad data');
            }

        //fetch the sought user (declarative-style logic)
        const user = userData.filter(user => user.username === un && user.password == pw).pop();

        /*
         * other "functional" methods for arrays include:
                - filter
                - map
                - reduce
         */

         //validate that we actually obtained a user
        if(!user){
            throw new TypeError('Invalid credentials provided');
        }

        //invoke the provided callback functiong
        cb(user);

    }, 250);
}

module.exports = {
    getUserById,
    getUserByCrendetials
}