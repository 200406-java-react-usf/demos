const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);
let newPromise =  Promise(function (fulfill,reject){
    fulfill(requestFileFromServer())
    reject()
    // your promise implementation here
    

})}

// FREEBIE: request all files in "parallel" here
let promise1 = retrieveFile('file1');
let promise2 = retrieveFile('file2');
let promise3 = retrieveFile('file3');

// Hmmmm, what to do down here?

promise1.then(function(){
console.log(text)
})




// function retrieveFile(file) {
//  console.log(`Requesting: ${file}`);
//      return new Promise(resolve =>{
//     requestFileFromServer(file, relove);
// })
// 
// 
// //////.....
// 
// 
// promise1.then(text => console.log(text))
//         .then(text => console.log(text))      
 //        .then(() => promise2)
 //        .then(text => console.log(text))
 //         .then(text => console.log(text)) 
//         .filally(()=> console.log('complete'))
// 

