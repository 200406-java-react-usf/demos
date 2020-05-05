const requestFileFromServer = require('./request-file-from-server');

function getFile(file) {
    
    console.log("Requesting: " + file);

	requestFileFromServer(file, function(text) {
        let files = [null, null, null];
		console.log(text);        
    }); 
}

let thunk = function(cb)
{
    return (getFile('file1'),cb);
}


// FREEBIE: request all files at once in "parallel"
// getFile("file1");
// getFile("file2");
// getFile("file3");

thunk (function(file1)
{
    console.log(file1);   
})
