let requestFileFromServer = require("./request-file-from-server");

let orderArray = ['one', 'two', 'three']
let counter = 0;

function getFile(file) {
  
    console.log("Requesting: " + file);

  requestFileFromServer(file, function (text) {
    
        if(text == 'This is file 1! It should print first.'){
            orderArray[0] = text;
        }
        
        if (text == 'This is file 2! It should print second.'){
            orderArray[1] = text;
        }

        if (text == 'This is file 3! It should print last.'){
            orderArray[2] = text;
        }

        counter++;

        if (counter == 3){
            printFiles();
            console.log('complete!')
        }
    })
}

function printFiles() {
    for(let i = 0; i < orderArray.length; i++){
        console.log(orderArray[i]);
    }
}

// FREEBIE: request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
