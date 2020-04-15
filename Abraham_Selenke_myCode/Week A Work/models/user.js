module.exports = function User(id, un, pw, fn, ln, em, dob) {
  //this. keyword
  this.id = id;
  this.username = un;
  this.password = pw;
  this.firstName = fn;
  this.lastName = ln;
  this.email = em;
  this.dateOfBirth = dob;

  /**
   * Calculates a users age in years based on provided DOB
   */
  this.age = () => {
    let ageMs = Date.now() - this.dateOfBirth.getTime();
    let ageDate = new Date(ageMs);
    let ageYrs = Math.abs(ageDate.getUTCFullYear() - 1970);
    return ageYrs;
  };
};

/*
let testUser = new User('Test', 'Password', 'Tester', 'McTesterson',
  'test@revature.com', new Date('01/01/1990'));

let testUser2 = new User('Testa', 'Password', 'Testa', 'MaTesterson',
  'testa@revature.com', new Date('07/01/1990'));

console.log(testUser);
console.log(testUser2);
console.log("------------------");
console.log(testUser.username);
console.log(testUser.age());
console.log("+----------------+");
console.log(testUser2.username);
console.log(testUser2.age());
*/
