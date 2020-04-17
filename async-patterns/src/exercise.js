let requestFileFromServer = require('./request-file-from-server');

//let files = [null, null, null];

function getFile(file) {
    
    console.log("Requesting: " + file);

    requestFileFromServer(file, function(text) {
            // your implementation here

            // if(file == "file1") {
            //     files[0] = file;
            // }
            // else if(file == 'file2') {
            //     files[1] = file;
            // }
            // else if(file == 'file3') {
            //     files[2] == file;
            // }
            
            // console.log(files);
            console.log(text)
    });  
}

/*
function thunk(cb) {
return getFile("file1"), getFile("file2"), getFile("file3");
}
*/


let getFiles = function(cb) {
    getFile('file1');
    getFile('file2');
    getfile('file3');
    
}

// let getFile2 = function(cb) {
//     return(getFile("file2"), cb)
// }
// let getFile3 = function(cb) {
//     return(getFile("file3"), cb)
// }
// console.log("Complete!")



// FREEBIE: request all files at once in "parallel"
getFiles(function(fileReturn) {
    console.log(fileReturn);
});
// getFile2(function(fileReturn) {
//     console.log(fileReturn);
// });
// getFile3(function(fileReturn) {
//     console.log(fileReturn);
// });
