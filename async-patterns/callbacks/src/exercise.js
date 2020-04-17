const requestFileFromServer = require('./request-file-from-server');

let responses = {}

    

function getFile(file) {
    
    console.log("Requesting: " + file);

	requestFileFromServer(file, function(text) {
        if (getFile(file) == 'file1'){
            console.log(text)
            
        } else {}

        if (getFile(file) != 'file2'){
            return;
        } else console.log(text)


        
    });
    
}

function filesRecieved(file, text){
//have we recieved files yet?
    if(!responses[file]){
        responses[file] = text;
    }


let files = ['file1','file2', 'file3']
for(i=0;i<files.length;i++){
if(files[i] in responses){
    if(responses[files[i]]){
        console.log(responses[files[i]])
    }
}
}

}





// FREEBIE: request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
