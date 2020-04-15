const userData = require('../userDb')

const getAllUsers = (cb) =>{
setTimeout(() => {

    //mutating actual objects in the data source
    //NOT FUNCTIONAL now using spread operator 
    //let users = [...UserData]; spread operator or do this?
    //or map?
    //still
    lets users = Array.from(UserData)
    getUserByUsername.forEach(user =>{
        users.password =
    })
}
    //return userData
     cb(userData),250
    );

}
/* shoulda just commented this out here, instead of 
copy pasteing it over to post-api and commenting it out there... sigh... but now I'm just gonna keep it :)
and we actually do use it here
*/
const getUserById = function(id, onComnplete, onError){

    console.log(`Looking for ID: ${id}`)

    setTimeout(function(){
        //to simulate lag
        if (typeof id !== 'number' || !Number.isInteger(id)|| id <= 0 ){}
        let retrievedUser = null;
        //very imperitive style

        for (user in userData) {
            if (userData.id === id) {
                retrievedUser = user;
            }
        }
        cb(retrievedUser);
    }, 250);
}



const getUserByCredentials = (un, pw, cb)=> {
    setTimeout(() =>{

        if(!un||!pw) throw Error('Bad data');
cb("oh no you gave me bad data!")
        //fetch the sought user with declaritve style logic filter is abstracting away from 
        const user = userData.filter(user => user.username === un &&user.password === pw).pop();
        // validation that we found a user with that username
        if(!user) cb('bad username');

        cb(null, user);

    }, 250 );
}
// let newUser = new User(2,2,2,2,2,2,2,2)
const addNewUser = (newUser, cb)=> {
    //validate the user
    if (!newUser) {throw Error('Bad Data')}

    else if (newUser === userData.filter(()=> newUser.username === userData.username))
        {throw Error("Username already in use") }
    

    else {newUser.id = userData.length
    userData.push(newUser);
}

    cb(newUser);
}


const getUserByEmail = (em, cb) => {
    setTimeout(() => {
        let retrievedEmail = null
        if (!em) throw Error('please provide email')
        retrievedEmail = userData.filter((user)=> user.email === em).pop(); //(email => {user.email === em})).pop();
    cb(retrievedEmail); 
}, 250); }


/*
const getUserByCredentials = (un, pw, cb)=> {
    setTimeout(() =>{

        if(!un||!pw) throw Error('Bad data');

        //fetch the sought user with declaritve style logic filter is abstracting away from 
        const user = userData.filter(user => user.username === un &&user.password === pw).pop();
        // validation that we found a user with that username
        if(!user) throw new Error('bad username');

        cb(user);

    }, 250 );
}
*/
module.exports = {
getAllUsers,
getUserById,
getUserByCredentials,
addNewUser,
getUserByEmail
};


/*

 other "functional" methods for arrays include:
 -filter
 -map
 -reduce 
 
*/



const getUserByUsername = (un, cb) => {
setTimeout(() =>{
    const user = userData.filter(user => user.username === un ).pop();
}
    )
}

//default operator
user = user ||{username: "fail", password: "fail"}