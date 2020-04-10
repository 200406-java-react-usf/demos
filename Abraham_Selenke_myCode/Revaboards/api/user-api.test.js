const sut = require("./post-api");

describe("userApi", () => {
  test("Should return all users when getAllUsers is called", (done) => {
    expect.assertions(2);
    sut.getAllUsers((users) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(5);
      done();
    });
  });
});
