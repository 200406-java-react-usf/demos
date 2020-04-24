import { PostRepository } from './repos/post-repo';
import { UserRepository } from './repos/user-repo';

(async function() {

    let userRepo = UserRepository.getInstance();
    
    console.log(await userRepo.getAll());

})();
