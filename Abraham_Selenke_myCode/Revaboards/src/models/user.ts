export class User {

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: Date;

    constructor(id: number, un: string, pw: string, fn: string, ln: string, email: string, dob: Date) {
        this.id = id;
        this.username = un;
        this.password = pw;
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.dob = dob;
    }

};