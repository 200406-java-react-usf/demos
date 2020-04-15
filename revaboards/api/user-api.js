const userData = require('../userDb');

const getAllUsers = (cb) => {
    
    setTimeout(() => {

        // mutating the actual User bojects in the data source
        // NOT FUNCTIONAL!

        let users = [...userData];
        let userDataJSON = JSON.stringify(userData); // spread operator (does not do deep copies)

        users = users.map(user => {
            delete user.password;
            return user;
        });

        console.log(users);
        console.log('+--------------------------+');
        console.log(userData);

        cb(users);

    }, 250);
};

const getUserById = function(id, onComplete, onError) {

    console.log(`You are looking for id: ${id}`)

    if (typeof id !== 'number' || !Number.isInteger(id) || id <= 0) {
        onError('Bad request, invalid id value provided.');
        return;
    };

    setTimeout(function() {

        /*syncronous exception handling:
            if (!id) throw Error('Oh no! You gave me bad data.')
        */
       //asyncronus exception handling
       if(typeof id !== 'number' || !Number.isInteger(id) || id <=0){ //if either is true then proceed
           //
           onError('Bad request. Id provided is not valid')
           return;

       }
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
        if (!retrievedUser) {
            onError('User not found for provided id');
            return;
        }
        onComplete(retrievedUser);

<<<<<<< HEAD
=======
        onComplete(retrievedUser);

>>>>>>> master
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

        let retrievedEmail = null;

        for (user of userData){
          
            if (user.email == email) {
                retrievedEmail = user;
            }

        }
        if (!retrievedEmail) throw Error ('Invalid email provided');
        cb(retrievedEmail);
    }, 250);
}

// const updateUser(updatedUser, cb) =>{

// }

//const deleteUser(user)


module.exports = {
    getAllUsers,
    getUserById,
    getUserByCredentials,
    addNewUser,
    getUserbyEmail
};         