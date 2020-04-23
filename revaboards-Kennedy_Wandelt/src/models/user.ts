export class User {

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: Date;
    age: number;

    constructor(id: number, username: string, pw: string,
        fn: string, ln: string, email: string, dob: Date) {

        this.id = id;
        this.username = username;
        this.password = pw;
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.dob = dob;
        this.age = Math.abs(new Date(Date.now() - this.dob.getTime()).getUTCFullYear() - 1970);
    }


}