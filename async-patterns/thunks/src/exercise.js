const requestFileFromServer = require('./request-file-from-server');


function retrieveFile(file, cb) {
    cb( requestFileFromServer(file)  )
    console.log(`Requesting: ${file}`)
}





// FREEBIE: request all files in "parallel" here
let thunk1 = function(cb) {return retrieveFile('file1', cb)};
let thunk2 = function(cb) {return retrieveFile('file2', cb)};
let thunk3 = function(cb) {return retrieveFile('file3', cb)};


thunk1(function(file){
    console.log(file)
})


// function multiplyAsync(a, b, cb) {
//     setTimeout(() => {
//         cb(a * b);
//     }, 2000);
// }

// let asyncThunk = function(cb) {
//     return multiplyAsync(10, 20, cb);}

// asyncThunk(function(product) {
//     console.log(product);
// });






