import { PostRepository } from './repos/post-repo';
import { UserRepository } from './repos/user-repo';

let postRepo = new PostRepository();
let userRepo = new UserRepository();

let postPromise = postRepo.getAll();
let userPromise = userRepo.getAll();

postPromise.then(console.log).catch(console.log);
userPromise.then(console.log).catch(console.log)
