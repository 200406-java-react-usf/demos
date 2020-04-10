const userData = require('../postDb')

/*
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


const getPostById = (id, cb)=> {
    setTimeout(() =>{

        if(!id||!id<=0) throw Error('Bad data');

        //fetch the sought user with declaritve style logic filter is abstracting away from 
        const user = userData.filter(user => user.username === un &&user.password === pw).pop();
        // validation
        if(!user) throw new Error('bad username');

        cb(user);

    }, 250 );
}


const getUserByPosterId  = (posterId, cb)=> {
    setTimeout(() =>{

        if(!un||!pw) throw Error('Bad data');

        //fetch the sought user with declaritve style logic filter is abstracting away from 
        const user = userData.filter(user => user.username === un &&user.password === pw).pop();
        // validation
        if(!user) throw new Error('bad username');

        cb(user);

    }, 250 );
}

module.exports = {
getUserById,
getUserByCredentials
};
*/