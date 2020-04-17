const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log("Requesting: " + file);

    requestFileFromServer(file, function(text) {
		// your implementation here
    });
    
}

// Request all files in "parallel"
