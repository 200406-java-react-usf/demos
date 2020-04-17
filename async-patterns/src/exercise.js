let requestFileFromServer = require('./request-file-from-server');
let recieved = [0, 0, 0]
function getFile(file) {
    
    console.log("Requesting: " + file);

    requestFileFromServer(file, function (text) {
        // your implementation here


        
    });
}

// FREEBIE: request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");

