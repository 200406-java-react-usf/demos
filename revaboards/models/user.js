//module.exports makes this function available outside of this file. (allows it to be imported)
module.exports = function User(id, un, pw, fn, ln, email, dob) {
    
    this.id = id;
    this.username = un;
    this.password = pw;
    this.firstName = fn;
    this.lastName = ln;
    this.email = email;
    this.dob = dob;

    /**
     * Calcualtes a user's age in years provided dob
     */
    this.age = () => {  //Anonymous function, doesn't have a name. Assigned to this.age to be accessed. 
                        //"() => is **almost** equivalent to "function". "() =>" will inherit this from its parent.
        let ageMs = Date.now() - this.dob.getTime();
        let ageDate = new Date(ageMs);
        let ageYrs = Math.abs(ageDate.getUTCFullYear() - 1970);
        return ageYrs;
    }
}

