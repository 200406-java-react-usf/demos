const userApi = require('./api/user-api');
const postApi = require ('./api/post-api');
const user = require ('./models/user');

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

let myUser = new User ('user1','user1','user1','user1','user1','user1','user1', new Date());

/*  and this logic/ functionality I was going for is in the API
function createUser (){
    
    userDbArray.push(myUser)
    console.log(myUser)
}

createUser();
*/
//and finally is invoked (?) here
userApi.addNewUser(user, addedUser =>{
    userApi.getAllUsers(users => console.log(users));
});
