const userRepo = require('./repos/user-repo');

// userRepo.getInstance().getAllUsers((result, err) => 
// {
//     console.log(result);
// });

// userRepo.getInstance().getUserById(a, (result, err) => 
// {
//     console.log(result);
// });

// userRepo.getInstance().getUserByUsername('bbailey', (result, err) =>
// {
//     console.log(result);
// })

userRepo.getInstance().getUserByCredentials('bbailey', 'gh', (result, err) =>
{
    console.log(err);
});