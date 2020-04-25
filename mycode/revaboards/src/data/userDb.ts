//let user = new User('bob','asd','asd','asdas','asdf', new Date())
//console.log(user)
//This won't work reference errot user is not defined in this file

// class User{

// constructor(id, un, pw, fn, ln, email, dob) {
//     this.id = id
//     this.username = un;
//     this.password = pw;
//     this.firstName = fn;
//     this.lastName = ln;
//     this.email = email;
//     this.dob = dob;
// }

// age() {
//     return Math.abs(new Date(Date.now() - this.dob.getTime()) - 1970);
// }

// }

import {User} from'../models/user'
//const User = require('../models/user');
let id = 1;

export default [
    new User(id++, 'aanderson', 'password', 'Alice', 'Anderson', 'aanderson@revature.com', '01/01/1995'),
    new User(id++, 'bbailey', 'password', 'Bob', 'Bailey', 'bbailey@revature.com', '01/01/1983'),
    new User(id++, 'ccountryman', 'password', 'Charlie', 'Countryman', 'ccountryman@revature.com', '01/01/1990'),
    new User(id++, 'ddavis', 'password', 'Daniel', 'Davis', 'ddavis@revature.com', '07/01/1990'),
    new User(id++, 'eeinstein', 'password', 'Emily', 'Einstein', 'eeinstein@revature.com', '09/01/1993')
];
