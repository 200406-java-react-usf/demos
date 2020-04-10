const userApi = require("./api/user-api");
const postApi = require("./api/post-api");
const User = require("./models/user");

// when you fetch a user by id, also, grab their posts and add them to the user obj
/*userApi.getUserById(6, (user) => {
  postApi.getPostsByPosterId(user.id, (posts) => {
    user.posts = posts;
    console.log(user);
  });
});*/
/*
userApi.getAllUsers((users) => {
  console.log(users);
});*/

let user = new User(
  0,
  "test",
  "test",
  "test",
  "test",
  "test",
  new Date("01/01/2000")
);
userApi.addNewUser(user, (addedUser) => {
  userApi.getAllUsers((users) => console.log(users));
});

/*
userApi.getUserByEmail("aanderson@revature.com", (user) => {
  console.log(user);
});

userApi.getUserByUsername("bbailey", (user) => {
  console.log(user);
});*/

/*userApi.addUser(
  "6",
  "newuser",
  "New",
  "User",
  "newuser@revature.com",
  "1/08/1990"
);

postApi.addPost(
  "This is a test",
  "Testing whether our addPost function works.",
  7
);*/
