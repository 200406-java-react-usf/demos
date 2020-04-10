const userData = require('../userDb')

const getAllUsers = (cb) =>
{
    
    setTimeout(() => cb(userData),250
    );
}
/* shoulda just commented this out here, instead of 
copy pasteing it over to post-api and commenting it out there... sigh... but now I'm just gonna keep it :)
and we actually do use it here
*/
const getUserById = function(id, cb){

    console.log(`Looking for ID: ${id}`)

    setTimeout(function(){
        //to simulate lag
        
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

        //fetch the sought user with declaritve style logic filter is abstracting away from 
        const user = userData.filter(user => user.username === un &&user.password === pw).pop();
        // validation that we found a user with that username
        if(!user) throw new Error('bad username');

        cb(user);

    }, 250 );
}

const addNewUser = (newUser, cb)=> {
    //validate the user
    if (!user) throw Error('Bad Data');

    newUser.id = userData.length;
    userData.push(newUser)

    cb(newUser);
}


module.exports = {
getAllUsers,
getUserById,
getUserByCredentials,
addNewUser
};


/*

 other "functional" methods for arrays include:
 -filter
 -map
 -reduce 
 
*/




