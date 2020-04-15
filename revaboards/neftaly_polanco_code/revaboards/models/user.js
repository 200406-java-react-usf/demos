// module.export makes this function available outside of this file(can be imported)
module.exports = function User(id, username, password, firstName, lastName, email, dob) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateOfBirth = dob;

    this.age = () => {
        let ageMs = Date.now() - this.dateOfBirth.getTime();
        let ageDate = new Date(ageMs);
        let ageYrs = Math.abs(ageDate.getUTCFullYear() - 1970);
        return ageYrs;
    }
}