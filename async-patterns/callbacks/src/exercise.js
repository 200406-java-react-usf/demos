const requestFileFromServer = require('./request-file-from-server');

let responses = [null, null, null];
file1Printed = false;
file2Printed = false;
file3Printed = false;

function getFile(file) {
    
    console.log("Requesting: " + file);

    requestFileFromServer(file, function(text) {

        if(!text)throw new Error('File not found.');
        
        //fills files array to store files
        if(file == 'file1') {
            responses[0] = text;
        } else if(file == 'file2'){
            responses[1] = text;
        } else if(file == 'file3') {
            responses[2] = text;
        }


        if(responses[0] && !file1Printed) {
            console.log(responses[0])
            file1Printed = true;
        }if(responses[0] && responses[1] && !file2Printed){
            console.log(responses[1]);
            file2Printed = true;
        }if(responses[0] && responses[1] && responses[2] && !file3Printed){
            console.log(responses[2]);
            file3Printed = true;
        }if(file1Printed && file2Printed && file3Printed){
            console.log('Complete!')
        }
    
    });  
}




// FREEBIE: request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");

