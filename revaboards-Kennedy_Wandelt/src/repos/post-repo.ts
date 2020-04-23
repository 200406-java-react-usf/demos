import data from '../data/post-db';
import { Post } from '../models/post';
import { CrudRepository } from './crud-repo';
import { 
    BadRequestError, 
    ResourceNotFoundError,
    ResourcePersistenceError,
    NotImplementedError
} from '../errors/errors';

export class PostRepository implements CrudRepository<Post> {

    getAll(): Promise<Post[]> {

        return new Promise((resolve, reject)  => {

            setTimeout(() => {

                let posts: Post[] = [];

                for(let post of data) {
                    posts.push({...post});
                }

                if(posts.length === 0) {
                    reject(new ResourceNotFoundError());
                    return;
                }

                resolve(posts);
                
            }, 1000);

        });
    }

    getById(id: number): Promise<Post> {
    
        return new Promise<Post>((resolve, reject) => {

            if (typeof id !== 'number' || !Number.isInteger(id) || id <= 0) {
                reject(new BadRequestError());
                return;
            }

            setTimeout(function() {
        
                const post: Post = {...data.filter(post => post.id === id)[0]};

                if(!post) {
                    reject(new ResourceNotFoundError());
                    return;
                }

                resolve(post);
                
            }, 250);

        });
    }

    save(newPost: Post): Promise<Post> {
        return new Promise<Post>((resolve, reject) => {
            reject(new NotImplementedError());
        });
    }

    update(updatedPost: Post): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            reject(new NotImplementedError());
        });
    }

    deleteById(id: number): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            reject(new NotImplementedError());
        });
    }

    getPostsByPosterId(pid: number): Promise<Post[]> {
        return new Promise<Post[]>((resolve, reject) => {

            if (typeof pid !== 'number' || !Number.isInteger(pid) || pid <= 0) {
                reject(new BadRequestError());
                return;
            }

            setTimeout(function() {
                const posts = data.filter(post => post.posterId == pid);
                resolve(posts);
            }, 250);

        });
    }
}