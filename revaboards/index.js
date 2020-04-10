const userApi = require('./api/user-api');
const postApi = require ('./api/post-api');
const userDB = require ('./userDb');
const postDB = require ('./postDb');
/*
userApi.getUserById(1, user =>{
    console.log(user);
}
)

//postApi.getPostbyId
*/


let myPost = new Post('post1','post1','post1','post1',)

function createPost (){
    
    postDbArray.push(myPost)
    console.log(myUser)
}
createPost();


let myUser = new User ('user1','user1','user1','user1','user1','user1','user1','user1',);

function createUser (){
    
    userDbArray.push(myUser)
    console.log(myUser)
}

createUser();