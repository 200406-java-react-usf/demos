const requestFileFromServer = require('./request-file-from-server');

function getFile(file) {
    
    console.log("Requesting: " + file);

    let files = ['file1', 'file2', 'file3']

	requestFileFromServer(file, function(text) {
        // your implementation here
        //To check if file is true
        if(!file) throw new Error('File does not exist')

        for (let i = 0; i < file.length; i++) {
            if(file == 'file1'){
                console.log(files[0])
            }else if(file == 'file2'){
                console.log(files[1]);
            }else{
                console.log(files[2]);
            }
            
        }

        
    });
    
}

// FREEBIE: request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
