module.exports = class User {

    constructor(id, un, pw, fn, ln, email, dob) {
        this.id = id
        this.username = un;
        this.password = pw;
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.dob = dob;
    }

    age() {
        return Math.abs(new Date(Date.now() - this.dob.getTime()) - 1970);
    }

}