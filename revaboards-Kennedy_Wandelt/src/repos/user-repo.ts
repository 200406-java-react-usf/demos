import data from '../data/user-db';
import {CrudRepository } from './crud-repo';
import { User } from '../models/user';
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
        return !UserRepository.instance ? UserRepository.instance = new UserRepository() : UserRepository.instance
    }

    getAll(): Promise<User[]> {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                
                let users: User[] = [];

                for(let user of data) {
                    users.push({...user});
                }
        
                if (users.length === 0) {
                    reject(new ResourceNotFoundError());
                    return;
                }
                resolve(users.map(this.removePassword));
        
            }, 250);
        });
    };

    private removePassword(user:User): User {
        let usr = {...user};
        delete usr.password;
        return usr;
    }
    
    getById(id: number): Promise<User> {

        return new Promise<User>((resolve, reject) => {

            if (typeof id !== 'number' || !Number.isInteger(id) || id <= 0) {
                reject(new BadRequestError());
                return;
            }
            
            setTimeout(function() {
        
                const user: User = {...data.filter(user => user.id === id)[0]};
                
                if (!user) {
                    reject(new ResourceNotFoundError());
                    return;
                }

                resolve(this.removePassword(user));
        
            }, 250);
        });
    
    }

    save(newUser: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            reject(new NotImplementedError());
        });
    }

    update(updatedUser: User): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            reject(new NotImplementedError());
        });
    }

    deleteById(id: number): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            reject(new NotImplementedError());
        });
    }

    getUserByUsername(un: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {

            if (typeof un !== 'string' || !un) {
                reject(new BadRequestError());
                return;
            }
            
            setTimeout(function() {
                const users = {...data.filter(user => user.username === un)[0]};
                resolve(this.removePassword(user));
            }, 250);
        });
    }

    getUserByCredentials (un: string, pw: string) {

        return new Promise<User>((resolve, reject) => {

            if (!un || !pw || typeof un !== 'string' || typeof pw !== 'string') {
                reject(new BadRequestError());
                return;
            }
        
            setTimeout(() => {
        
                const user = data.filter(user => user.username === un && user.password === pw).pop();
                
                if (!user) {
                    reject(new AuthenticationError('Bad credentials provided.'));
                    return;
                }
                
                resolve(null, user);
        
            }, 250);
        })
    }
}

/*
        
        const getUserByCredentials = (un, pw, cb) => {
        
            if (!un || !pw || typeof un !== 'string' || typeof pw !== 'string') {
                cb(new errors.BadRequestError());
                return;
            }
        
            setTimeout(() => {
        
                const user = data.filter(user => user.username === un && user.password === pw).pop();
                
                if (!user) {
                    cb(new errors.AuthenticationError('Bad credentials provided.'));
                    return;
                }
                
                cb(null, user);
        
            }, 250);
        
        }
        
        const addNewUser = (newUser, cb) => {
            
            if (!newUser) {
                cb(new errors.BadRequestError('Falsy user object provided.'));
                return;
            }
        
            let invalid = !Object.keys(newUser).every(key => {
                if(key == 'id') return true;
                return newUser[key]
            });
        
            if (invalid) {
                cb(new errors.BadRequestError('Invalid property values found in provided user.'));
                return;
            }
        
            setTimeout(() => {
        
                let conflict = data.filter(user => user.username == newUser.username).pop();
        
                if (conflict) {
                    cb(new errors.ResourcePersistenceError('The provided username is already taken.'));
                    return;
                }
        
                conflict = data.filter(user => user.email == newUser.email).pop();
        
                if (conflict) {
                    cb(new errors.ResourcePersistenceError('The provided email is already taken.'));
                    return;
                }
        
                newUser.id = (data.length) + 1;
                data.push(newUser);

                mailWorker.emit('newRegister', newUser.email);
        
                cb(null, newUser);
        
            });
        
        }
        
        const updateUser = (updatedUser, cb) => {
        
            if (!updatedUser) {
                cb(new errors.BadRequestError('Falsy user object provided.'));
                return;
            }
        
            if (!updatedUser.id) {
                cb(new errors.BadRequestError('An id must be provided for update operations.'));
                return;
            }
        
            let invalid = !Object.values(updatedUser).every(val => val);
        
            if (invalid) {
                cb(new errors.BadRequestError('Invalid property values found in provided user.'));
                return;
            }
        
            setTimeout(() => {
        
                let persistedUser = data.find(user => user.id === updatedUser.id);
        
                if (!persistedUser) {
                    cb(new errors.ResourceNotFoundError('No user found with provided id.'))
                }
                
                if (persistedUser.username != updatedUser.username) {
                    cb(new errors.ResourcePersistenceError('Usernames cannot be updated.'));
                    return;
                }
        
                const conflict = data.filter(user => {
                    if (user.id == updatedUser.id) return false;
                    return user.email == updatedUser.email; 
                }).pop();
        
                if (conflict) {
                    cb(new errors.ResourcePersistenceError('Provided email is taken by another user.'));
                    return;
                }
    
                persistedUser = updatedUser;
                cb(null, true);
        
            });
        
        }
    
        return {
            getAllUsers,
            getUserById,
            getUserByUsername,
            getUserByCredentials,
            addNewUser,
            updateUser
        }

    }

    return {
        getInstance: function() {
            return !instance ? instance = init() : instance;
        }
    }

})();
*/
