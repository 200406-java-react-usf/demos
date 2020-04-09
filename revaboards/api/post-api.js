const userData = require('../postDb')

const getPostbyID = function(id, callback){
    setTimeout(function(){
        //const user = userData
        
        let retrievedPost = null;
        //very imperitive style
        for (post in postData) {
            if (post.id === id) {
                retrievedPost = post;
            }
        }
        callback(retrievedPost);
    }, 250);
}