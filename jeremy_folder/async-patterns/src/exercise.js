let requestFileFromServer = require('./request-file-from-server');
let event = require('events');

const myEmitter = new event;

function getFile(file) {

    console.log("Requesting: " + file);

    requestFileFromServer(file, function(text) {
        fileReceived(file, text);
    });

}

function fileReceived(file, text) {
    if (!responses[file]) {
        responses[file] = text;
    }

    let files = ['file1', 'file2', 'file3'];

    for (let i = 0; i < files.length; i++) {
        if (files[i] in responses) {
            if (responses[files[i]])
                console.log(responses[files[i]]);
            responses[files[i]] = true;

        }
    }
}

let responses = {}
    // FREEBIE: request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");