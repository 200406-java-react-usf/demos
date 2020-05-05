const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);

    // your promise implementation here
    return new Promise ((resolve, reject) => 
    {
        if (file)  
        {
            requestFileFromServer(file, function(text)
            {
                resolve(text)
            });
        };   
    });

}

// FREEBIE: request all files in "parallel" here
let promise1 = retrieveFile('file1');
let promise2 = retrieveFile('file2');
let promise3 = retrieveFile('file3');
let promise4 = retrieveFile('file4');

// Hmmmm, what to do down here?
// Promise.all([
//     promise1,
//     promise2,
//     promise3
// ]).then((messages) => 
// {
//     console.log(messages);  
// });
promise1.then((text) => {
        console.log(text);
        return promise2;
    }).then((text) => {
        console.log(text);
        return promise3;
    }).then ((text) => {
        console.log(text);  
        return promise4;     
    }).then((text) => {
        console.log('Should not print');    
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log('Complete');   
    })
