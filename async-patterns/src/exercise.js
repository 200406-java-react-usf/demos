let requestFileFromServer = require('./request-file-from-server');

function getFile(file) {
    
    console.log("Requesting: " + file);

	requestFileFromServer(file, function(text) {
        // your implementation here
        /*const fl = require(file)
        fl.readFile(file, (err, data) => {
            if (err) throw err
            console.log(data)
        })*/



        // Promise
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(text)
                resolve()
                },
            )
        
    })
    
});
    console.log("Complete!")
}
/*
function fileRecieved(file, text) {

}
let responses = {};
*/
/*
function getAll(){
    getFile("file1")
    .then(() => {
        return getFile("file2")
    })
    .then (() =>{
        return getFile("file3")
    })
    
}*/
/*
function getAll() {
    getFile("file1", () => {
        getFile("file2", () => {
            getFile("file3", () => {
            })
        })
    })
console.log("Complete!");
}*/

// FREEBIE: request all files at once in "parallel"
getFile("file1")
getFile("file2");
getFile("file3");

//getAll;