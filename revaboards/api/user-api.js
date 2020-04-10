const userData = require('../userDB');

const getAllUsers = (cb) => {

    setTimeout(() => cb(userData),250);

}

const getUserById = function(id, callback){
    // timeout simiulates latency
    setTimeout(function(){

        let retrievedUser = null;
        //imperative

        // look up difference of for in and for of
        for (user of userData){

            if (user.id == id){

                retrievedUser = user;

            }

        }

        callback(retrievedUser);

    }, 250);

}

const getUserByEmail = (email, cb) => {

    setTimeout(() => {

        let retrievedEmail = null;

        if (!email) throw Error('provide an email');

        retrievedEmail = userData.filter((user) => user.email === email ).pop();

    cb(retrievedEmail);


    }, 250);


}

const getUserByUsername = (un, cb) => {

    setTimeout(() => {

        let retrievedUsername = null;

        if (!un) throw Error('provide a username');

        retrievedUsername = userData.filter((user) => user.username === un).pop();

        cb(retrievedUsername);


    },250);

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

        //other array methods: filter, map, reduce(ASSIGNMENT QUESTION)


        //validate that we got a user

        if (!user ){

            throw new Error('invalid creds');

        }

    },250);


    //invokes cb function

    cb(user);

}

const addNewUser = (newUser, cb) => {

    //validate user 
    if (!newUser) throw Error('bad data');

    //check if username or email already exists

    let newUsername = newUser.username;
    let newEmail = newUser.email;

//     try {

//         for (user of userData){

//             if (newUsername ===  user.username || newEmail === user.email){

//                 throw Error();

//             }

//         } 

//         //get next id
//         let length = userData.length;
//         newUser.id = ++length;
//         userData.push(newUser);

//         cb(newUser);

//     } catch (error) {

//         console.log("email or username exists")

//     }
// }

    try {

        for (user of userData){

            if (newUsername ===  user.username || newEmail === user.email){

                throw Error();

            }

        } 

        //get next id
        let length = userData.length;
        newUser.id = ++length;
        userData.push(newUser);

        cb(newUser);

    } catch (error) {

        console.log("email or username exists");

    }
}

module.exports = {

    getUserById,
    getUserByCredentials,
    getAllUsers,
    addNewUser,
    getUserByEmail,
    getUserByUsername
    
};