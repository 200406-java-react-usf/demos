//let user = new User('bob','asd','asd','asdas','asdf', new Date())
//console.log(user)
//This won't work reference errot user is not defined in this file

const User = require('./model/user')
//whatever function is exported can be imported here
let id = 1 

module.exports = [
new User(id++, "aa","password","a","a","aa@","a", new Date('01/01/1990')),
new User(id++, "bb","password","b","b","bb@","a", new Date('01/01/1990')),
new User(id++, "cc","password","c","c","cc@","a", new Date('01/01/1990')),
new User(id++, "dd","password","d","d","dd@","a", new Date('01/01/1990')),
new User(id++, "ee","password","e","e","ee@","a", new Date('01/01/1990')),
new User(id++, "ff","password","f","f","ff@","a", new Date('01/01/1990')),

]
