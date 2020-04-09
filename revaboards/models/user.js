//module.exports makes this function available outside of this file (can be imported)
module.exports = function User(id, un, pw, fn, ln, email, dob){

    this.id 
    this.username = un;
    this.password = pw;
    this.firstName = fn;
    this.lastName = ln;
    this.email = email;

    if(!dob){
        throw Error('You need to provide a DOB');
    }

    this.dob = dob;

    /*
     * Calculates a users age in years based on provided DOB
     */
    this.age = function(){
        let ageMs = Date.now() - this.dob.getTime();
        let ageDate = new Date(ageMs);
        let ageYrs = Math.abs(ageDate.getUTCFullYear() - 1970);
        return ageYrs;
    }
}

let testUser = new User('tester', 'password', 'Tester', 'McTesterson',
                         'test@revatures.com', new Date('01/01/1990'));

let testUser2 = new User('tester', 'password', 'Testa', 'McTesterson',
                         'test@revatures.com', new Date('07/01/1990'));

console.log(testUser);
console.log(testUser2);

console.log(testUser.username);
console.log(testUser.age());
console.log('+-------------------+');
console.log(testUser2.username);
console.log(testUser.age());