let requestFileFromServer = require('./request-file-from-server');

function getFile(file) {
    
    console.log("Requesting: " + file);

	requestFileFromServer(file, function(text) {
		fileReceived(file, text);
    });
    
}

function fileReceived(file, text) {

    // have we recieved this file yet?
    if(!responses[file]) {
        responses[file] = text;
    }

    let files = ['file1', 'file2', 'file3'];

    // loop through responses in order for printing
    for(let i = 0; i < files.length; i++) {
        
        // response received?
        if(files[i] in responses) {
            
            // have we already printed this file?
            if(responses[files[i]] !== true) {
                console.log(responses[files[i]]); // the text of the file
                responses[files[i]] = true;
            }

        }
        
        else {
            return;
        }

    }

    console.log('Complete!');

}

let responses = {};

// FREEBIE: request all files at once in "parallel"
getFile('file1');
getFile('file2');
getFile('file3');