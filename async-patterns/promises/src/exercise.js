const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);

    

   return new Promise(function(resolve,reject){
       requestFileFromServer(file, text => {;

       if(text){
          resolve(text);
       }
       else{ reject('failed')}
    });
   });

}

// FREEBIE: request all files in "parallel" here
let promise1 = retrieveFile('file1');
let promise2 = retrieveFile('file2');
let promise3 = retrieveFile('file3');

// Hmmmm, what to do down here?
promise1.then(text=>{
    console.log(text);
    return promise2
}).then(text=>{
    console.log(text);
    return promise3
}).then(text=>{
    console.log(text);
    console.log('complete')
})

    