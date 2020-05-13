export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(id: number, un: string, pw: string, fn: string, ln: string) {
        this.id = id;
        this.username = un;
        this.password = pw;
        this.firstName = fn;
        this.lastName = ln;
    }
}
