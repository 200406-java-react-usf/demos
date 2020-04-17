const userRepo = require('./repos/user-repo');
const User = require('./models/user');

// userRepo.getInstance().getAllUsers((err, result) => {
//     err && console.log(err);
//     result && console.log(result);
// })

// userRepo.getInstance().updateUser(1, 'id', 'jangelef01@gmail.com', user =>
// {
//     console.log(user);
// })

    userRepo.getInstance().addNewUser()