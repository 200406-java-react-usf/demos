import { Post } from '../models/post'
let id = 1 ;

 

   export default [
    new Post(id++, 'hello world!', 'This is my first post! Huzzah!', 1),
    new Post(id++, 'this is cool', 'NodeJS is so awesome! It uses the same JS engine as Google Chrome: V8', 1),
    new Post(id++, 'no limits', 'NodeJS is a runtime environment that lets JS run outside of the browser', 2),
    new Post(id++, 'in the cloud', 'the ability to run JS outside the browser has made NodeJS popular for "serverless" apps', 3),
    new Post(id++, 'single-threaded?', 'I\'ve heard that JS is single-threaded, is this true?', 4),
];


/* my attempt included having to name this array 
inorder to reference it like this: postDbArray.push()
Wezley didn't seem to have to do that let's find out how
    module.exports = [postDbArray = [
    new Post(id++, "aa","body a", 1 ),
    new Post(id++, "bb"," body b",  2),
    new Post(id++, "cc","body c", 3),
    new Post(id++, "dd", "passworddddd@a", 4 ),
    new Post(id++, "ee", "passwordeeee@a", 5  ),
    new Post(id++, "ff","passwordffff@a", 6 ),
    
    ]
    
    ]

    */    //working example from Wezley i.e no naming the Array, just exporting it, perhaps "assigning" elsewhere"
  
  


