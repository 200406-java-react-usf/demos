const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {

    console.log(`Requesting: ${file}`);

    // your promise implementation here

        return new Promise((resolve, reject) => {
            requestFileFromServer(file, text => {

                    if (text) {
                        resolve(text);
                    }
                    else{
                        resolve('error')
                    }
                //return;
            })
        })
    
    //return;

}

// FREEBIE: request all files in "parallel" here
let promise1 = retrieveFile('filxe1');
let promise2 = retrieveFile('file2');
let promise3 = retrieveFile('file3');

// Hmmmm, what to do down here?

promise1.then(text => {
    //if(text){
    console.log(text);
    //}
    return promise2;
}).then(text => {
    //if(text){
        console.log(text);
    //}
    return promise3;
}).then(text => {
    //(text){
        console.log(text);
    //}
}).catch(err => {
    console.log(err)
})



// promise1.then(result => {
//     console.log(result);
//     return promise2;
// }, reason => {
//     console.log(reason)
//     return promise2
// }).catch(err => console.log(err))
//     .then(result => {
//         console.log(result);
//         return promise3;
//     }, reason => {
//         console.log(reason);
//         return promise3;
//     }).catch(err => {
//         console.log(err)
//         return promise3;
//     })
//     .then(result => {
//         console.log(result);
//         console.log('Complete')
//     }).catch(err => {
//         consolelog(err)
//     })