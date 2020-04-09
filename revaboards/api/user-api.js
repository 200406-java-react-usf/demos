const userData = require('../userDb')

const getUserById = function(id, callback){
    setTimeout(function(){
        //const user = userData
        
        let retrievedUser = null;
        //very imperitive style
        for (use in userData) {
            if (userData.id === id) {
                retrievedUser = user;
            }
        }
        callback(retrievedUser);
    }, 250);
}



const getUserByCredentials = (un, pw, cb)=> {
    setTimeout(() =>{

        if(!un||!pw) throw Error('Bad data');

        //fetch the sought user with declaritve style logic filter is abstracting away from 
        const user = userData.filter(user => user.username === un &&user.password === pw).pop();
        // validation
        if(!user) throw new Error('bad username');

        cb(user);

    }, 250 );
}

module.exports = {
getUserById,
getUserByCredentials
};


/*

 other "functional" methods for arrays include:
 -filter
 -map
 -reduce 
 
*/