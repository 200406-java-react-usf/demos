const User = require('./models/user');
let id = 1;

module.exports = [
    new User(id++, 'aanderson', 'password', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'))
]