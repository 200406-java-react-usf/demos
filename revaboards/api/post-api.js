const postData = require('../postDb');

const getpostById = function(id, callback) {

    console.log(`You are looking for id: ${id}`)

    // using a Timeout to simulate call latency
    setTimeout(function() {

        let retrievedPost = null;
        
       
        for (post of postData) {

            // Differences between =, ==, === (strict equality)
            // 5 == '5' true
            // 5 === '5' false
            if (post.id == id) {
                retrievedPost = post;
            }
            
        }

        callback(retrievedPost);

    }, 250);
}

const getPostsByPosterId = (id, cb) => {
    setTimeout(() => {
        
        // validation to ensure we do not waste resources
        if (!id || id <= 0 ) throw Error('Oh no! You gave me bad data'); // truthy/falsy in use here

        // fetch the sought user (declarative-style logic)
        const post = postData.filter(post => post.id === id && post.password == id);

        /* 
            other "functional" methods for arrays include: 
                - filter
                - map
                - reduce
        */

        // validate that we actually obtained a user
        if (!post) throw new Error('Invalid credentials provided!');

        // invoke the provided callback function
        cb(post);

    }, 250);
}

module.exports = {
    getPostById,
    getPostsByPosterId
};