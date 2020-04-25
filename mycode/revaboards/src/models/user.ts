// assign it's properties with vaules with this
// module.exports makes this func available outside of this file for import
export class User{

id: number;
username:string
password:string
firstName: string 
lastName: string
email: string
dob: string

constructor(id, un, pw, fn, ln, email, dob){

    this.id = id;
    this.username = un;
    this.password = pw;
    this.firstName = fn;
    this.lastName = ln;
    this.email = email;
    this.dob = dob;
}}


// calculate users age in years based on provided information
//   age() = function (){
//         let ageMs = Date.now() - this.dob.getTime();
//         let ageDate = new Date(ageMs);
//         let ageYrs = Math.abs(ageDate.getUTCFullYear() - 1970);
//         return ageYrs;
//     }

// }


//let testUser = new User('tester','password','tester','testy','test@testy.com', new Date('01/01/1990'));

//let testUser2 = new User('testing','password','testing','Mctest','testing@testy.com', new Date('07/01/1990'));

//console.log(testUser);

//console.log(testUser2);
