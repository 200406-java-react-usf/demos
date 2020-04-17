const userData = require('../data/userDb')


function UserRepository(){
    let instance; // this will be a reference to our singleton object
//everything below goes here
    function init(){
 return {
     // all 4 funcs below
 }
    }
    return{ getInstance: function(){
        if (!instance){instance = init();
        }else return instance 
    }
    
}
}

const getAllUsers = (cb) =>{
setTimeout(() => {

    //mutating actual objects in the data source
    //NOT FUNCTIONAL now using spread operator 
    //let users = [...UserData]; spread operator or do this?
    //or map?
    //still
    let  users = [];
   
    for (user of userData) {
        users.push({...user});
    } 
 
    if (users.length == 0) {
        cb('Resource not found')
        return;
    }

    users = users.map( user =>{
        delete user.password;
        return user;
    });

    //return userData
     cb(null, users),250
    );

}

const getUserById =(id, cb) =>{

    console.log(`Looking for ID: ${id}`)

    if (typeof id !== 'number' || !Number.isInteger(id)|| id <= 0 ){
            cb('Bad Request error');
            return;
        }

    setTimeout(()=>{
        //to simulate lag
        const user = {...userData.filter(user => user.id ===id).pop()};
        

         if (!user){
             cb('Resource not found')
         }

         cb(null,user);
      
     
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