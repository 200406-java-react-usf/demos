const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);
    // your thunk implementation here
    let result, thunkCB;

    requestFileFromServer(file, (text) => {
        result = text;
        if(thunkCB) {
            thunkCB(result);
        }
    });

    return function(cb){
        if (result) cb(result);
        thunkCB = cb;
    }   
}
    

// FREEBIE: request all files in "parallel" here
let thunk1 = retrieveFile('file1');
let thunk2 = retrieveFile('file2');
let thunk3 = retrieveFile('file3');

// Hmmmm, what to do down here?
thunk1(result => {
    console.log(result);
    thunk2(result => {
        console.log(result);
        thunk3(result => {
            console.log(result);  
            console.log('Complete!')        
        });
    });
});
