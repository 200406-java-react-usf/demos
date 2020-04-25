import data from '../data/userDb'
import { User } from '../models/user'
import { CrudRepository } from './crud-repo'
import { resolve } from 'dns';





export class UserRepository implements CrudRepository<User>{
private static instance: UserRepository;

private constructor(){}

static getInstance(){
    return !UserRepository.instance ? UserRepository.instance = new UserRepository : UserRepository.instance
}
getAll(): Promise<User[]> {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            //mutating actual objects in the data source
            //NOT FUNCTIONAL now using spread operator 
            //let users = [...UserData]; spread operator or do this?
            //or map?
            //still
            let  users = [];
           
            for (users of userData) {
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
             resolve (users);}
             ,250);
            
        
        }

private removePassword = (users: User):User{
 let usr = {...}
}



    }
    )
}
getById(id: number): Promise<User> {
    throw new Error("Method not implemented.");
}
save(newObj: User): Promise<User> {
    throw new Error("Method not implemented.");
}
update(updatedObj: User): Promise<boolean> {
    throw new Error("Method not implemented.");
}
deleteById(id: number): Promise<boolean> {
    return new Promise<boolean>((resolve,reject)=>{
        
    })
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
     resolve (users);}
     ,250);
    

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
    
        if(!un||!pw) {
            cb("oh no you gave me bad data!")
            return;
        }
        setTimeout(()=> {
        //fetch the sought user with declaritve style logic filter is abstracting away from 
        const user = {...userData.filter(user => user.username === un &&user.password === pw).pop()!};
        // validation that we found a user with that username
        if(!user) {
            cb('bad username or password');
            return;
        }
        cb(null, user);

    }, 250 );
}

const addNewUser = (newUser, cb)=> {
    //validate the user
    if (!newUser) {throw Error('Bad Data')}

    let invalid =!Object.keys(newUser).every(key =>{
        if( key =='id') return true;
        return newUser[key]
    });
if(invalid){
    cb('invalid property values')
    return;
}

setTimeout(()=> {
emailConflict = data.filter(user => user.email ==newUser.email).pop();

if (emailConflict)
{
    cb('The provided email is already taken.')
    return;
}
nameConflict = userData.filter(()=> newUser.username === userData.username)

if (nameConflict){throw Error("Username already in use") }
    


newUser.id = userData.length +1;
userData.push(newUser);

cb(null, newUser)
});
}


const getUserByUsername = (un, cb) => {

    if (typeof un!=='string'||!un){
        cb('Bad Request')
        return;
    }
    
        setTimeout(() =>{
        const user = userData.filter(user => user.username === un ).pop();
        
        cb(null,user);
        },250);
    }



const getUserByEmail = (em, cb) => {
    setTimeout(() => {
        
        retrievedEmail = null
        if (!em) throw Error('please provide email')
        retrievedEmail = userData.filter((user)=> user.email === em).pop(); //(email => {user.email === em})).pop();
    cb(retrievedEmail); 
}, 250); 
}

const updateUser =(updatedUser,cb) =>{
    setTimeout(() => {
        let persistedUser = data.find(user=> user.id ===updatedUser.id);

        if (!persistedUser) {

        }

        if (persistedUser.username != updatedUser.username) {

        }

    }, 250);
}

        return {getAllUsers,
            getUserById,
            getUserByCredentials,
            addNewUser,
            getUserByUsername,
            updateUser,
            getUserByEmail}

    }
    

    return { 
        getInstance: function() {
        if (!instance){instance = init();
        }else return instance; 
    }
 }   
 

    })();

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
// module.exports = {
// getAllUsers,
// getUserById,
// getUserByCredentials,
// addNewUser,
// getUserByUsername,
// updateUser,
// getUserByEmail
// };


/*

 other "functional" methods for arrays include:
 -filter
 -map
 -reduce 
 
*/




//default operator
//user = user ||{username: "fail", password: "fail"}