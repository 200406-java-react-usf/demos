const userRepo = require('./repos/user-repo');
const User = require('./models/user');

// userRepo.getInstance().getAllUsers((err, result) => {
//     err && console.log(err);
//     result && console.log(result);
// })
let improperUser = new User(1, 'aanderson', '', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'))
userRepo.getInstance().updateUser(improperUser, (err, result) => {
    console.log(err);
    console.log('------------------------------------------');
    
    console.log(result);
});


let properUser = new User(1, 'aanderson', 'jake', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'))
userRepo.getInstance().updateUser(properUser, (err, result) => {
    console.log(err);
    console.log('------------------------------------------');
    console.log(result);
});