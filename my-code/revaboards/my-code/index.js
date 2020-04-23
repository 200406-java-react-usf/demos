const userApi = require('./repos/user-repo');
const postApi = require('./repos/post-repo');
const User = require('./models/user');


//callback function added to tell the other func what to do with the returned user
// userApi.getUserById(3, (user) => {

//     console.log(user);

// }, err => {

//     console.log(err);

// });

//as opposed to above, let cb have two parameters, one for err and one for result
// userApi.getUserByCredentials('aanderson', 'password', (err, result) =>{
//     //non gaurd operator
//     // handle error first
//     // if(err) {console.log(err); return;}
//     // console.log(result);

//     //gaurd operator

//     // if err is truthy, elvaluate the second statement

//     err && console.log(err);
//     result && console.log(result);


// });

    let user = new User(0,'test','test','test','test','test@revature.com',new Date('01/01/1997'));
    userApi.getInstance().addNewUser(user, user => console.log(user));



    //userApi.getUserByEmail(email, cb);

   // userApi.getUserByEmail('ccountryman@revature.com', user => { console.log(user);}  );

    // userApi.getUserByUsername('ddavis', user => {

    //     console.log(user);

    // });

    // userApi.getAllUsers((err,result) => {

    //     console.log(result);

    // });


    //NEW LOGIC

    //  userApi.getInstance().getAllUsers((err, result)=>{

    //     if (err) console.log(err);

    //     console.log(result);

    //  })

    // userApi.getInstance().updateUser(new User(1,'janderson','password2','John','','janderson@revature.com',''), (x) =>{

    //     console.log(x);

    // });
