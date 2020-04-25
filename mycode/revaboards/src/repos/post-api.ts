
//ohh ok to answer my question in the comments on postDbs,
//we didn't need to name it cuz it's just called postData here, and we're
//pulling it from postDb.js with require()


import data from '../data/postDb'
import{ CrudRepository } from './crud-repo'
import { Post } from '../models/post'
import { 
    BadRequestError, 
    ResourceNotFoundError,
    ResourcePersistenceError,
    NotImplementedError
} from '../errors/errors';

export class PostRepository implements CrudRepository<Post>{
    getAll(): Promise<Post[]>{
        return new Promise<Post>((resolve,reject)=>{
            setTimeout(()=>{
                
                let posts: Post[] =[]

                for(let post of data){
                    posts.push({...post})
                }
            }, 1000)
        });
    }
    
   getById (id: number): Promise<Post> {

    return new Promise((resolve,reject)=> {
        setTimeout( () =>{

        if(!id||!id<=0) {
            reject (new BadRequestError());
            return;
        }

        let post = postData.filter(post => postid === id).pop();
        let result = {...post};

        // validation
        if(!post) {reject (new BadRequestError());
            return;}

        resolve(result)

    }, 250 );
    })
    
}

    save(newPost: Post): Promise<Post> {
        return new Promise<post>((resolve,reject)=>{
            reject (new NotImplemented)
        }
    }

    update()

    deleteById()
}




const getPostsByPosterId  = (posterId, cb)=> {
    setTimeout(() =>{


        //fetch the sought user with declaritve style logic filter is abstracting away from 
        const posts = postData.filter(post => post.posterId === posterId);
        // validation
        if(!posts) throw new Error('No poster with that ID');

        cb(posts);

    }, 250 );
}





/*

this would be the imperative style
const getPostbyID = function(id, callback){
    setTimeout(function(){
        //const user = userData
        
        let retrievedPost = null;
        //imperative logic right here
        for (post in postData) {
            if (post.id === id) {
                retrievedPost = post;
            }
        }
        callback(retrievedPost);
    }, 250);
}
*/