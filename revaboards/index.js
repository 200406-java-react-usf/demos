const userApi = require('./api/user-api');
const userPostApi = require('./api/post-api');
const User = require(`./models/user`);

// const userData = require('../userDb');


// when you fetch a usesr id, also, grab their post and add them to the user object
// userApi.getUserById(1, function(user) {
//     console.log(user);
// })

// userPostApi.getPostById(1, function(user) {
//     console.log(user);

// })

// userPostApi.gitPosterId(2, function(post) {
//     console.log(post);

// })


userApi.addUser('gabby', 'password', 'gabber', 'gab', 'gabby@revature.com', new Date('09/01/1994'), function(user) {
    console.log(user);

})

userPostApi.addPost("Child called it", "this was such a great book yea yea", 7, new Date(), function(post) {
    console.log(post);

})