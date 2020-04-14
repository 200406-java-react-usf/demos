const userData = require('../userDb');

const getAllUsers = (cb) => {
    setTimeout(() => {
        let users = userData;
        //let cloned = {...users[0]}
        //let clone2 = {...cloned}
        let clone = JSON.parse(JSON.stringify(users));



        // ,User {firstname: 'Juan' ... }, User { ...}
        // let cloned = new Array();
        // for(let i =0; i < users.length; i++){
        //     //cloned.push(users[i]);
        //     cloned[i].password = '********';
        // }
        let x = clone.map(user => {
            user.password = '*****';
            user.dob = new Date(user.dob);
            return user;
        });
        

        //console.log(cloned);
        //console.log(x)
        console.log(x);
        console.log('-----------------------');
        console.log(userData);

    
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

const getUserByUsername = (un, cb) => {

    setTimeout(() => {

        let retrievedUsername = null;

        if (!un) throw Error('provide a username');

        retrievedUsername = userData.filter((user) => user.username === un).pop();
        if(retrievedUsername == undefined){
            cb('No username found.')
        }
        cb(retrievedUsername);


    },250);

}

const getUserByEmail = (email, cb) => {

    setTimeout(() => {

        let retrievedEmail = null;

        if (!email) throw Error('provide an email');

        retrievedEmail = userData.filter((user) => user.email === email ).pop();

    cb(retrievedEmail);


    }, 250);


}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {
        
        // validation to ensure we do not waste resources
        if (!un || !pw){
            cb('Oh no! You gave me bad data');
            return;
        } // truthy/falsy in use here

        // fetch the sought user (declarative-style logic)
        let user = userData.filter(user => user.username === un && user.password == pw).pop();

        /* 
            other "functional" methods for arrays include: 
                - filter
                - map
                - reduce
        */

        // validate that we actually obtained a user
        // if (!user) {
        //     cb('Invalid credentials provided!');
        //     return;
        // }
        user = user || {username: ' failed-login', password:'failed-login'};

        // invoke the provided callback function
        cb(null, user);

    }, 250);
}

const addNewUser = (newUser, cb) => {

    // 0, '', "", NaN, null, undefined, false <---- THE ONLY FALSY VALUES
    // {}, [], new Object(), "   ", '0', 'null'
    // validate the user
    if (!newUser) throw Error('Oh no! You gave me bad data!');

    // get the next id (would not be necessary with a real DB)
    newUser.id = (userData.length) + 1;

    // add user user to data source
    userData.push(newUser);

    cb(newUser);

}

// const updateUser = (upUserArr, cb) => {

//     if(upUserArr.length != 5){
//         return 'Invalid amount of information';
//     }

    
//     let retrievedUser = getUserByUsername(upUserArr[0], un => {
//         return un;
//     });
//     if(retrievedUser == typeof '' ){
//         return retrievedUser;
//     }
//     retrievedUser.pw = 

// }

module.exports = {
    getAllUsers,
    getUserById,
    getUserByCredentials,
    addNewUser,
    getUserByUsername,
    getUserByEmail
};