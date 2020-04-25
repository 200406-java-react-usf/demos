export class Post{

    id:number;
    title:string;
    body:string;
    posterid:number

constructor (id, title, body, pid){

    this.id = id
    this.title = title
    this.body = body
    this.posterid = pid
   

}}

//let testpost = new Post('t',' testing', 'test','tester')

//console.log(testpost)