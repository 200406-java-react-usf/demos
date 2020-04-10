const userData = require("../userDb");

//Add the user information
//const User = require("../models/user");

const getAllUsers = (cb) => setTimeout(() => cb(userData), 250);

const getUserById = function (id, callback) {
  //console.log(`You are looking for id: ${id}`);

  // using a Timeout to simulate call latency
  setTimeout(function () {
    let retrievedUser = null;

    // very imperative-style logic
    // look intop the difference between for..in and for..of
    for (user of userData) {
      // Differences between =, ==, === (strict equality)
      // 5 == '5' true
      // 5 === '5' false
      if (user.id == id) {
        retrievedUser = user;
      }
    }

    callback(retrievedUser);
  }, 250);
};

const getUserByCredentials = (un, pw, cb) => {
  setTimeout(() => {
    // validation to ensure we do not waste resources
    if (!un || !pw) throw Error("Oh no! You gave me bad data"); // truthy/falsy in use here

    // fetch the sought user (declarative-style logic)
    const user = userData
      .filter((user) => user.username === un && user.password == pw)
      .pop();

    /* 
            other "functional" methods for arrays include: 
                - filter
                - map
                - reduce
        */

    // validate that we actually obtained a user
    if (!user) throw new Error("Invalid credentials provided!");

    // invoke the provided callback function
    cb(user);
  }, 250);
};

/*
const addUser = function (un, pw, fn, ln, email, dob) {
  let id = null;
  id = userData.length + 1;
  userData.push(new User(id, un, pw, fn, ln, email, dob));
};*/

const addNewUser = (newUser, cb) => {
  //Validate the use
  if (!newUser) throw Error("Oh no! You gave me bad data!");

  try {
    const checkRepeat = userData.filter((user) => {
      if (user.username === newUser.username || user.email === newUser.email) {
        throw Error();
      }
    });
    //get the next id (would not be necessary with a real DB)
    newUser.id = userData.length + 1;
    //add user user to data
    userData.push(newUser);
    cb(newUser);
  } catch (error) {
    console.log("Username or email is already in exist.");
  }
};
Number.in

const getUserByEmail = (email, cb) => {
  setTimeout(() => {
    if (!email) throw Error("Data is wrong");

    const retrievedEmail = userData
      .filter((user) => user.email === email)
      .pop();
    if (!retrievedEmail) throw Error("Invalid email");

    cb(retrievedEmail);
  }, 250);
};

const getUserByUsername = (un, cb) => {
  setTimeout(() => {
    if (!un) throw Error("Data is wrong");

    const getUsername = userData.filter((user) => user.username === un).pop();

    cb(getUsername);
  }, 250);
};

module.exports = {
  getUserByUsername,
  getUserByEmail,
  getUserById,
  getUserByCredentials,
  addNewUser,
  getAllUsers,
};
