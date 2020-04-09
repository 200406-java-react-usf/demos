// module.exports makes this function available outside of this file (can be imported)
module.exports = function User(id, un, pw, fn, ln, email, dob) {

    this.id = id++;
    this.username = un;
    this.password = pw;
    this.firstName = fn;
    this.lastName = ln;
    this.email = email;
    this.dob = dob;

    //calculates a users age in years based on provided DOB

    this.age = () => {
        let ageMS = Date.now() - this.dob.getTime();
        let ageDate = new Date(ageMs);
        let ageYrs = Math.abs(ageDate.getUTCFullYear() - 1970);
        return ageYrs;
    }
}

// let testUser = new User('tester', 'password', 'Tester', 'McTesterson',
//                 'test@revature.com', new Date('01/01/1990'));

// let testUser2 = new User('testa', 'password', 'Testa', 'McTestersona',
//                 'test@revature.com', new Date('07/01/1990'));

// console.log(testUser);
// console.log(testUser2);
// console.log('+--------+');
// console.log(testUser.username);
// // console.log();
// console.log('+---------+');