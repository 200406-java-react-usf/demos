const userRepo = require('./repos/user-repo');
const userPostRepo = require('./repos/post-repo');
const User = require(`./models/post`);

// const userData = require('../userDb');


// when you fetch a usesr id, also, grab their post and add them to the user object
// userRepo.getUserById(1, function(user) {
//     console.log(user);
// })

// userPostRepo.getPostById(1, function(user) {
//     console.log(user);

// })

// userPostRepo.gitPosterId(2, function(post) {
//     console.log(post);

// })


 userRepo.addNewUser('gabby', 'password', 'gabber', 'gab', 'gabby@revature.com', new Date('09/01/1994'), function(user) {
    console.log(user);

})

//userRepo.getAllUsers();

/*userRepo.addUser('gabby', 'password', 'gabber', 'gab', 'gabby@revature.com', new Date('09/01/1994'), function(user) {
    console.log(user);

})*/

userPostRepo.addPost("Child called it", "this was such a great book yea yea", 7, new Date(), function(post) {
    console.log(post);

})