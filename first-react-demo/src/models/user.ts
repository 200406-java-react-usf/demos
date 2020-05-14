export class User {

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;

    constructor(id: number, un: string, pw: string, fn: string, ln: string, email: string, role: string) {
        this.id = id;
        this.username = un;
        this.password = pw;
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.role = role;
    }

}
