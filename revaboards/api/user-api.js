const userData = require('../userDB');

const getUserById = function(id, callback) {
    //using a timeout to simulate call latency
    setTimeout(function(){
        
        let retrievedUser = null;
            // very impertive approach
        for(user in userData){
            if(user.id === id) {
                retrievedUser = user;
            }
        }

        callback(user);

    },250);
}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {

        //validation to ensure we do not waster resources
        if(!un || !pw) throw Error('Oh no! You gave me bad data');

        //fetch the sought user
        const user = userData.filter(user => user.username === un && user.password == pw).pop();

        cb(user);

    },250);
}

module.exports = {
    getUserByCredentials,
    getUserById
}