const userData = require('../data/user-db');
const mailWorker = require('../util/mail-worker');

//create a constructor

module.exports = (function(){

    //this will be our reference to the singleton obj
    // will be "private"
    let instance;

    function init(){

        const getAllUsers = (cb) => {

            setTimeout(() => {
        
        
            //actually changes the password to *********
            // let users = userData;
            // users.forEach(user => user.password = '********');
        
            //clone the array, and change the password of the clone
            //let users = Array.from(userData); // spread
            // users.map(user => {
        
            //     user.password = '********';
            //     return user;
        
            // });
        
            //return users but block out password
            // make empty array
            let users = [];
            // clone each obj, push the clones into that array
            for (user of userData){
                //spread the obj => makes new obj, and spreads values of userData into new obj
                let clone = {...user};
                users.push(clone);
        
            }
            // delete passwords on the clone
            users = users.map(user => {
        
                delete user.password;
                return user;
        
            });
            
            // return the clone
            cb(null,users);
            
            
            }, 250);
        
        }
        
        const getUserById = function(id, onComplete, onError){
            
            //validation for id
            if (typeof id !== 'number' || !Number.isInteger(id) || id <= 0){
        
                onError('bad request given');
                // add return to stop rest of code
                return;
        
            }
            
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
        
                if (!retrievedUser){
        
                    onError('no user found');
                    return;
        
                }
        
                onComplete(retrievedUser);
        
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
        
                    cb('Bad Data');
                    return;
        
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
        
                    cb('invalid creds');
                    return;
        
                }
        
                //default:
                //user = user || {username: 'failed login', password: 'failed login}
        
                cb(null,user);
        
            },250);
        
        }
        
        const addNewUser = (newUser, cb) => {
        
            let newUsername = newUser.username;
            let newEmail = newUser.email;
        
            try {
        
                const checkUsername = userData.filter((user) => {
        
                        if (newUsername ===  user.username || newEmail === user.email){
        
                            throw Error();
        
                        }
                    
                    });
        
                //get next id
                let length = userData.length;
                newUser.id = ++length;
                userData.push(newUser);

                //here emit event on mail worker

                mailWorker.emit('newRegister',newUser.email);
        
                cb(newUser);
        
            } catch (error) {
        
                console.log("email or username exists");
        
            }
            
        }

        const updateUser = (updatedUser, cb) => {

            if(!updatedUser) {
                cb('Falsy user obj provided');
                return;
            }

            if(!updatedUser.id || !Number.isInteger(updatedUser.id) || updatedUser <= 0){

                cb('need valid id');
                return;

            }
            
            //loops thru all things in obj and checks if any falsy vals
            
            let invalid = !Object.values(updatedUser).every(val => val);
            
            // let keys = Object.keys(updatedUser);
            // let testArray = [];
            // let invalid = true;

            // for (i of keys){
            //     testArray.push(updatedUser[i]);//adds values to the empty array
            // }
            
            // for (i of testArray){
            //     if (!i){
            //         invalid = false;
            //         break;
            //     }
            // }

            if(invalid){
                cb('invalid property values found in provided user');
                return;
            }

            setTimeout(() => {

                let persistedUser = userData.find(user => user.id == updatedUser.id);

                if(!persistedUser) {

                    cb('no user found with provided ID');
                    return;

                }

                if(persistedUser.username != updatedUser.username){

                    cb('usernames cant be changed rn');
                    return;

                }

                const conflict = userData.filter(user => {

                    if(user.id == updatedUser.id){
                        return false;
                    }
                    return user.email == updatedUser.email;

                }).pop();

                if(conflict){

                    cb('provided email is already in use');
                    return;

                }

                persistedUser = updatedUser;
                
                cb(null,true);



            },250);
            
        }

        return {

            getUserById,
            getUserByCredentials,
            getAllUsers,
            addNewUser,
            getUserByEmail,
            getUserByUsername,
            updateUser
            
        };

    }

    return {

        getInstance: function(){

            // if(!instance){
            //     instance = init();
            // }
            // return instance;

            //OR

                    // bool     //if true           //if false
            return !instance ? instance = init() : instance; // ternary operators

        }

    };

})();


/* const updateUser = (updatedUser, cb) => {

    if(!updatedUser) {cb('No User provided'); return;}
    if(!updatedUser.id) {cb('No ID provided'); return;}
    let retrievedUser;

    setTimeout(() => {

        for (user of userData){

            if(updatedUser.id === user.id){

                retrievedUser = user;
                break;
            }

        }

        for(user of userData){

            if (updatedUser.email == user.email) { cb('Email already is used'); return; }
            if (updatedUser.username == user.username) { cb('Username already exists'); return; }

        }

        if(!retrievedUser){
            cb('no user found');
            return;
        }

        if(updatedUser.username){

            retrievedUser.username = updatedUser.username;

        }

        if(updatedUser.password){

            retrievedUser.password = updatedUser.password;

        }

        if(updatedUser.firstname){

            retrievedUser.firstname = updatedUser.firstname;

        }

        if(updatedUser.lastname){

            retrievedUser.lastname = updatedUser.lastname;

        }

        if(updatedUser.email){

            retrievedUser.email = updatedUser.email;

        }

        if(updatedUser.dob){

            retrievedUser.dob = updatedUser.dob;

        }

        cb(retrievedUser);

    },250);
    
} */