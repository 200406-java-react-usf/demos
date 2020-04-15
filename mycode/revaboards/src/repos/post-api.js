
//ohh ok to answer my question in the comments on postDbs,
//we didn't need to name it cuz it's just called postData here, and we're
//pulling it from postDb.js with require()

const postData = require('../postDb')



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

const getPostById = (id, cb)=> {
    setTimeout( () =>{

        if(!id||!id<=0) throw Error('Bad data');
        //fetch the sought user with declaritve style logic filter is abstracting 
        const post = postData.filter(post => postid === id).pop();
        // validation
        if(!post) throw new Error('no post with that id');

        cb(post);

    }, 250 );
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

module.exports = {
getPostById,
getPostsByPosterId
};
