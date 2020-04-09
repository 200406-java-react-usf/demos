const userApi = require("./api/user-api");
const postApi = require("./api/post-api");

// when you fetch a user by id, also, grab their posts and add them to the user obj
userApi.getUserById(6, (user) => {
  postApi.getPostsByPosterId(user.id, (posts) => {
    user.posts = posts;
    console.log(user);
  });
});

userApi.getAllUsers((users) => {
  console.log(users);
});

userApi.addUser(
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
);
