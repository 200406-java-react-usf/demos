//need to export the info, add module.exports
//now can be used in other files, but need to import first


module.exports = function User(id,un, pw, fn, ln, email, dob){
    //function to create users
    // kind of like making a class

    //function is like a constructor for a user obj

    //this refers to the obj created when function is ran
    //creates a property called username
    // not same as var, this makes a property tied to an obj
    this.id = id;
    this.username = un;
    this.password = pw;
    this. firstname = fn;
    this.lastname = ln;
    this.email = email;
    this.dob = dob;

// could also do this.age = () => {...} to create function (arrow notation)

    this.age = function(){
        //calculates age based on dob input
        //subtracts current milliseconds from jan 1 1970 from their dob ms
        let ageMs = Date.now() - this.dob.getTime();
        //pass ageMs into a date obj
        let ageDate = new Date(ageMs);
        //take the year of the ageDate, and subtract from 1970
        let ageYrs = Math.abs(ageDate.getUTCFullYear() - 1970);

        return ageYrs;
    }

}
