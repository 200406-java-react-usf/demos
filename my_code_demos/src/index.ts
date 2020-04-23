import { PostRepository } from './repos/post-repo';

let postRepo = new PostRepository();

let postPromise = postRepo.getAll();

postPromise.then(console.log).catch(console.log);
