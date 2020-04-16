let requestFileFromServer = require('./request-file-from-server');
let file3;
let file2;
let file1;
function getFile(file) {
    
    console.log("Requesting: " + file);    

	requestFileFromServer(file, function(text) {
        // your implementation here
        if(file == 'file3') file3 = text;
        if(file == 'file2') file2 = text;
        if(file == 'file1') file1 = text;
        //printing files
        if(file1 == text) console.log(file1);
        if(!!file2 && !!file1 && file2 !== true) {
            console.log(file2);
            file2 = true;
        }
        if(!!file3 && !!file1 && !!file2) {
            console.log(file3)
            console.log('Complete!');
        }       
    });
    
}

// FREEBIE: request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");