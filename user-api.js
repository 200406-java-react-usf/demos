const userData = require('../userDb');

const getUserById = function(id, cb) {
    //using a Timeout for latency
    setTimeout(function() {

        let retrievedUser = null;

        //very imperitive style
        for (user in userData) {
            if (user.id === id){
                retrievedUser = User;
            }
           }
        
           callback(user);
        }, 250);
}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {

        //validation to ensure we do not waste resources
        if (!un || !pw) {
            throw Error('Oh no! You gave me bad data')//truthy/falsy in use here
        }
        //fetch the sought user (declarative style logic)
        const user = userData.filter(user => user.username === un && user.password == pw) .pop();

        /*other "functional" methods for arrays incloude:
            -filter
            -Map
            -reduce
        */

        //validate that we actually obtained a user
        if (!user) throw new Error('Invalid credentials provided!');
        
        //invoke the provide3d callback function
        cb(user);
        
    }, 250);
}

module.export = {
    getUserById,
    getUserByCredentials,
};