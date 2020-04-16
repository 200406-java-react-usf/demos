const sut = require("../repos/user-repo");

describe("userRepo", () => {
  test("should be a singleton", () => {
    let reference1 = sut.getInstance();
    expect(reference1).toBeTruthy();
    let reference2 = sut.getInstance();
    expect(reference1).toBe(reference2); // checks for exact equivalency (are they the SAME object)
    expect(reference1).toEqual(reference2); // checks for value equivalency
  });

  test("should return all users when getAllUsers is called", (done) => {
    expect.assertions(3);
    sut.getInstance().getAllUsers((err, users) => {
      expect(err).toBeFalsy();
      expect(users).toBeTruthy();
      expect(users.length).toBeGreaterThan(0);
      done();
    });
  });

  test("should return correct user when getUserById is given proper id value", (done) => {
    expect.assertions(2);
    sut.getInstance().getUserById(
      1,
      (user) => {
        expect(user).toBeTruthy();
        expect(user.id).toBe(1);
        done();
      },
      () => {}
    );
  });

  test("should throw bad request error when getUserById is given string as an id", (done) => {
    expect.assertions(2);
    sut.getInstance().getUserById(
      "a",
      () => {},
      (err) => {
        expect(err).toBeTruthy();
        expect(err).toEqual("Bad request, invalid id value provided.");
        done();
      }
    );
  });

  test("should throw bad request error when getUserById is given a decimal value as an id", (done) => {
    expect.assertions(2);
    sut.getInstance().getUserById(
      1.1,
      () => {},
      (err) => {
        expect(err).toBeTruthy();
        expect(err).toEqual("Bad request, invalid id value provided.");
        done();
      }
    );
  });

  test("should throw bad request error when getUserById is falsy value as an id", (done) => {
    expect.assertions(2);
    sut.getInstance().getUserById(
      null,
      () => {},
      (err) => {
        expect(err).toBeTruthy();
        expect(err).toEqual("Bad request, invalid id value provided.");
        done();
      }
    );
  });

  test("should throw resource not found error when getUserById is an unknown id", (done) => {
    expect.assertions(2);
    sut.getInstance().getUserById(
      100,
      () => {},
      (err) => {
        expect(err).toBeTruthy();
        expect(err).toEqual("No user found with provided id.");
        done();
      }
    );
  });

  test("should update user within the datasource when updateUser is given a valid user", (done) => {
    let updateUser = new User(
      1,
      "aanderson",
      "password",
      "Alice",
      "Anderson",
      "aanderson@revature.com",
      new Date("01/01/1995")
    );

    expect.assertions(2);
    sut.getInstance.updateUser(updateUser, (err, result) => {
      expect(err).toBeFalsy();
      expect(result).toBeTruthy();
      done();
    });
  });

  test("Should throw error when updateUser is given a falsy value", (done) => {
    expect.assertions(2);
    sut.getInstance().updateUser(null, (err, result) => {
      expect(err).toBeTruthy();
      expect(result).toBeFalsy();
      done();
    });
  });

  test("Should throw error when updateUser is given an updatedUser with a invalid id", (done) => {
    let badUser = new User(
      -1,
      "aanderson",
      "password",
      "Alice",
      "Anderson",
      "aanderson@revature.com",
      new Date("01/01/1995")
    );

    expect.assertions(2);
    sut.getInstance().updateUser(badUser, (err, result) => {
      expect(err).toBeTruthy();
      expect(result).toBeFalsy();
      done();
    });
  });

  test("Should throw error when updateUser is given an updatedUser with a conflicting username", (done) => {
    let badUsername = new User(
      1,
      "bbailey",
      "p4ssw0rd",
      "Alice",
      "Anderson",
      "bbailey@revature.com",
      new Date("01/01/1995")
    );

    expect.assertions(2);
    sut.getInstance().updateUser(badUsername, (err, result) => {
      expect(err).toBeTruthy();
      expect(result).toBeFalsy();
      done();
    });
  });

  test("Should throw error when updateUser is given an updatedUser with a conflicting email", (done) => {
    let conflictingUser = new User(
      1,
      "aanderson",
      "p4ssw0rd",
      "Alice",
      "Anderson",
      "bbailey@revature.com",
      new Date("01/01/1995")
    );

    expect.assertions(2);
    sut.getInstance().updateUser(conflictingUser, (err, result) => {
      expect(err).toBeTruthy();
      expect(result).toBeFalsy();
      done();
    });
  });

  test("Should throw error when updateUser is given an updatedUser with a improper values", (done) => {
    let imporperUser = new User(
      1,
      "aanderson",
      "",
      "Alice",
      "Anderson",
      "bbailey@revature.com",
      new Date("01/01/1995")
    );

    expect.assertions(2);
    sut.getInstance().updateUser(imporperUser, (err, result) => {
      expect(err).toBeTruthy();
      expect(result).toBeFalsy();
      done();
    });
  });
});
