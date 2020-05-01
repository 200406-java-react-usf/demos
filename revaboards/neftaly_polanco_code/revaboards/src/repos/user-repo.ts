import data from '../data/userDB';
import { User } from '../models/user'
//import mailWorker from '../util/mail-worker';
import { CrudRepository } from './crud-repo';
import {
    BadRequestError,
    ResourceNotFoundError,
    ResourcePersistenceError,
    NotImplementedError
} from '../errors/errors';


export class UserRepository implements CrudRepository<User> {

    private static instance: UserRepository;
    private constructor() {}
    static getInstance() {
        return !UserRepository.instance ? UserRepository.instance = new UserRepository() : UserRepository.instance;
    }

    getAll(): Promise<User[]>{

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let users: User[] = [];

                for(let user of data) {
                    users.push({...user});
                }

                if(users.length === 0) {
                    reject(new ResourceNotFoundError());
                    return;
                }

                resolve(users.map(this.removePassword));
            }, 1000);
        });
    }

    getById(id: number): Promise<User>{

        return new Promise<User>((resolve, reject) => {
            if(typeof id  !== 'number' || !Number.isInteger(id) || id <= 0) {
                reject(new BadRequestError());
                return;
            }
            setTimeout( () => {

                const myUser = {...data.filter(user => user.id === id)[0]};

                if(!myUser) {
                    reject(new ResourceNotFoundError());
                    return;
                }

                resolve(myUser);

            }, 1000)
        });
    }

    save(newUser: User): Promise<User>{
        return new Promise<User>((resolve, reject) => {
            if (!newUser) {
                reject(new BadRequestError('Falsy user object provided.'));
                return;
            }
        
            let invalid = !Object.keys(newUser).every(key => {
                if(key == 'id') return true;
                return newUser[key];
            });
        
            if (invalid) {
                reject(new BadRequestError('Invalid property values found in provided user.'));
                return;
            }
        
            setTimeout(() => {
        
                let conflict = data.filter(user => user.username == newUser.username).pop();
        
                if (conflict) {
                    reject(new ResourcePersistenceError('The provided username is already taken.'));
                    return;
                }
        
                conflict = data.filter(user => user.email == newUser.email).pop();
        
                if (conflict) {
                    reject(new ResourcePersistenceError('The provided email is already taken.'));
                    return;
                }
        
                newUser.id = (data.length) + 1;
                data.push(newUser);

                // mailWorker.emit('newRegister', newUser.email);
        
                resolve(newUser);

        });
        
    });
        
    }
    update(): Promise<boolean>{
        return new Promise<boolean>((resolve, reject) => {
			reject(new NotImplementedError());
		});
    } 

    deleteById(): Promise<boolean>{
        return new Promise<boolean>((resolve, reject) => {
			reject(new NotImplementedError());
		});
    }

    private removePassword (user: User): User {
        let usr = {...user};
        delete usr.password;
        return usr;
    }
}

// const userData = require('../data/userDB');
// const User = require(`../models/user`);

// const getAllUsers = (callback) => { setTimeout(() => callback(userData), 250); }

// // using timeout to simulate lag 
// const getUserById = (id, callback) => {
//     setTimeout(() => {
//         let retrievedUser = null;
//         for (user of userData) {
//             if (user.id == id) {
//                 retrievedUser = user;
//             }
//         }
//         callback(retrievedUser);
//     }, 250);
// }

// const getUserByCredentials = (un, pw, cb) => {
//     setTimeout(() => {
//         if (!un || !pw) throw Error(`Oh no! You gave me bad data`); //truthy/falsy in use here

//         //fetch the sought user (declarative-style logic)
//         const user = userData.filter(user => user.username === un && user.password == pw).pop();

//         cb(user);

//     }, 250);
// }

// /* const addUser = (username, password, firstName, lastName, email, dob, onComplete, onError) => {
//     let id = userData.length;
//     id++;
//     let newUser = new User(id, username, password, firstName, lastName, email, dob)
//     for (user of userData){
//         if(id == userData[i].id) {
//             onError('ID already exists'); 
//             return; 
//         }                             
     
//         if(username == userData[i].username) {
//             onError('username already in use');
//             return;
//         }                
     
//         if(email == userData[i].email) {
//             onError('an account with that email already exists');
//             return;
//         }    
//         userData.push(newUser);
//         onComplete(userData);

//     }  
//     */
//     function addNewUser(newUser, cb) {        
        
//         if (!newUser) {
//             cb('Error: Falsy user provided');
//             return;
//         }

//         // how to validate that all required fields of User are not falsy
//         let invalid = !Object.keys(newUser).some(key => newUser[key]);
        

//         if(invalid) {
//             cb('Error: Invalid property values found in provided user');
//             return;
//         }

//         setTimeout(() => {

//             // ensure that new users cannot have the same username as an existing user
//             let conflict = newUser.username;
//             for(users of userData) {
//                 if (conflict = userData.username) conflict = null
//             }

//             if(conflict) {
//                 cb('Error: The provided username is already taken.');
//                 return;
//             }

//             // ensure that new users cannot have the same email as an existing user
//             conflict = newUser.email;
//             for(users of userData) {
//                 if (conflict = userData.email) conflict = null
//             }

//             if(conflict) {
//                 cb('Error: The provided email is already taken.');
//                 return;
//             }

//             newUser.id = (userData.length) + 1;
//             userData.push(newUser);

//             // emit a 'newRegister' event on mail-worker
//             console.log(userData);
//            // cb(null, newUser);

//         }, 250);    
//     }



// const updateUserByID = (id, key, newInput, onComplete, onError) => {

//         if (typeof id !== 'number' || !Number.isInteger(id) || id <= 0) {
//             onError('Bad request, invalid id value provided.');
//             return;
//         };

//         setTimeout(function(){
//             let retrievedUser = null;
//             for (users of userData) {
//                 if( user.id == id) retrievedUser = user
//             }
//             if(!retrievedUser) {
//                 onError('This user does not exist');
//                 return;
//             }
//             retrievedUser[key] == newInput;
//             onComplete(retrievedUser);
//     },250);
// }
// addNewUser({id: -1, unsername:'', password:'password', firstname: 'gabber', lastname:'gab', email:'gabby@revature.com', dateOfBrith: new Date('09/01/1994')});


// module.exports = {
//     getUserByCredentials,
//     getUserById,
//     addNewUser,
//     updateUserByID,
//     getAllUsers
// }