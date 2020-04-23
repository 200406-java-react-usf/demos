export class Post {

    id: number;
    title: string;
    body: string;
    posterId: number;

    constructor (id: number, title: string, body: string, pid: number) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.posterId = pid;
    }
    
}