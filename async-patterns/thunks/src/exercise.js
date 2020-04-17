const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);
    // your thunk implementation here
    let fn, result;
    requestFileFromServer(file, (text) =>{
        result = text;
         if(fn){
             fn(result);
         }
    })

    return function(cb){
        if(result){
            cb(result);     
        }
        fn = cb;
    }
    
}

// FREEBIE: request all files in "parallel" here
let thunk1 = retrieveFile('file1');
let thunk2 = retrieveFile('file2');
let thunk3 = retrieveFile('file3');

// Hmmmm, what to do down here?

thunk1((result) => {
    console.log(result);
    thunk2((result) => {
        console.log(result);
        thunk3((result) => {
            console.log(result);
            console.log('Complete.');
        })
    })
})