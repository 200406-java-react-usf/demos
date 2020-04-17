let requestFileFromServer = require('./request-file-from-server');

let res = [];
let filenames = ['file1','file2','file3'];
let keys = [];
function getFile(file) {
    
    console.log("Requesting: " + file);

	requestFileFromServer(file, function(text) {
        fileReceived(file, text);
        //  if(text.includes('file 1')){
        //      res[0] = text;
        //  }
        //  else if(text.includes('file 2')){
        //     res[1] = text;
        //  }
        //  else if(text.includes('file 3')){
        //     res[2] = text;
        //  }
        //  res.filter((x) =>{ return !x })
        //     console.log(res);
        //     console.log('Complete!');

         
    });
    
}
function fileReceived( file, text){

}
// FREEBIE: request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
