const userApi = require('./repos/user-api');
const postApi = require ('./repos/post-api');
const User = require ('./models/user');




















/*
userApi.getUserById(1, user =>{
    console.log(user);
}
)

//postApi.getPostbyId
*/

/* here's wehre I attempted the stuff for the challenge of adding posts/users...
maybe it was actually just to add users and I got confused or maybe haven't 
gotten there in the git hub review yet

let myPost = new Post('post1','post1','post1','post1',)

function createPost (){
    
    postDbArray.push(myPost)
    console.log(myUser)
}
createPost();

*///aha nope here we go, declaring user here

// let newUser = new User ('aa','user1','user1','user1','user1','user1','user1', new Date());

// /*  and this logic/ functionality I was going for is in the API
// function createUser (){
    
//     userDbArray.push(myUser)
//     console.log(myUser)
// }

// createUser();
// */
// //and finally is invoked (?) here
// userApi.addNewUser(newUser, addedUser =>{
//     userApi.getAllUsers(users => console.log(users));
// });


// userApi.getUserByEmail('aa@a', user => {
// console.log(user);})

// userApi.getUserByEmail('aa@a', (err,result) => {
// handle error (if present)
// if err{
//     console.log(err);
//     return;
// }}
// // gaurd operator
// err&&console.log(err)
// result&&console.log(result)


// userApi.getAllUsers(users =>{
    
// })