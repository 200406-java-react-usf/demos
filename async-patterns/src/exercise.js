let requestFileFromServer = require('./request-file-from-server');

function getFile(file) {

    console.log("Requesting: " + file);    

	requestFileFromServer(file, function(text) {

        fileRecieved(file,text);

    });
}

function fileRecieved(file, text){

    // have we recieved this file already?
   if(!responses[file]) {
       responses[file] = text;
   }

   let files = ['file1','file2','file3'];

   //loop thru responses for rendering
   for(let i = 0; i < files.length; i++){

       //repsonse recieved?
       if (files[i] in responses){

           // have we printed already?
           if(responses[files[i]] !== true){

               console.log(responses[files[i]]);
               responses[files[i]] = true;

           }

       }else{

           return false;

       }

   }

   console.log('complete');

}    

let responses = {};


// FREEBIE: request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");


/*

let array = ['one', 'two','three'];

let counter = 0;

    if(text == 'This is file 1! It should print first.'){
            array[0] = text;
        }

        if (text == 'This is file 2! It should print second.'){
            array[1] = text;
        }

        if (text == 'This is file 3! It should print last.'){
            array[2] = text;
        }

        counter++;

        if (counter == 3){
            printFiles();
            console.log('complete!')
        }

function printFiles(){

    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }

}


*/