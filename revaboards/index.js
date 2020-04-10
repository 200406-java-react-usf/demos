const userApi = require('./api/user-api');
const postApi = require('./api/post-api');
const User = require('./models/user');


//callback function added to tell the other func what to do with the returned user
// userApi.getUserById(1, (user) => {

//     postApi.getPostsByPosterId(user.id, posts => {

//         //use callback to use the poster id to find the posts by this author

//         user.posts = posts;
//         console.log(user);

//     })

// });

    let user = new User(0,'aanderson','test','test','test','test',new Date('01/01/1997'));
    userApi.addNewUser(user, user => console.log(user));



    //userApi.getUserByEmail(email, cb);

   // userApi.getUserByEmail('ccountryman@revature.com', user => { console.log(user);}  );

    // userApi.getUserByUsername('ddavis', user => {

    //     console.log(user);

    // });



//when you fetch a user by ID, also fetch their posts and add them to the user obj

