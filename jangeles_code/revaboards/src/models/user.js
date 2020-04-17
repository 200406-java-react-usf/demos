// module.exports makes this function available outside of this file (can be imported)
module.exports = function User(id, un, pw, fn, ln, email, dob) {

    this.id = id;
    this.un = un;
    this.pw = pw;
    this.fn = fn;
    this.ln = ln;
    this.email = email;
    this.dob = dob;

    /**
     * Calculates a users age in years based on provided DOB
     */
    this.age = () => {
        let ageMs = Date.now() - this.dob.getTime();
        let ageDate = new Date(ageMs);
        let ageYrs = Math.abs(ageDate.getUTCFullYear() - 1970);
        return ageYrs;
    }
}