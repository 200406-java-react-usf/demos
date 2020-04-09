//module.exports make this function available outside of this file(can be imported)
const userData = require('../userDB')

 module.exports = function User (id ,un, pw, fn, ln, email, dob) {
    
    this.id = id;
    this.username = un;
    this.password = pw;
    this.firstname = fn;
    this.lastname = ln;
    this.email = email;
    this.dateofbirth = dob;

    this.age = () => {
        let ageMs = Date.now() - dob.getTime();
        let ageDate = new Date(ageMs);
        let ageYrs = Math.abs(ageDate.getUTCFullYear - 1970);
        return ageYrs;
    }
}


