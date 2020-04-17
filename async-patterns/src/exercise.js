let requestFileFromServer = require('./request-file-from-server');

//hint: use a global var for something
let array = ['', '',''];

let counter = 0;

function getFile(file) {
    
    console.log("Requesting: " + file);    

	requestFileFromServer(file, function(text) {

        if(text == 'This is file 1! It should print first.'){
            array[0] = text;
        }
        
        if (text == 'This is file 2! It should print second.'){
            array[1] = text;
        }

        if (text == 'This is file 3! It should print last.'){
            array[2] = text;
        }
        if(array[0]){
            console.log(array[0])
            if(array[1]){
                console.log(array[1])
                if (array[3]){
                    console.log(array[3])
                }
            }
        }
        counter++;

        // if (counter == 3){
        //     printFiles();
        //     console.log('complete!')
        // }

    });

   
}

// function printFiles(){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }



// FREEBIE: request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
