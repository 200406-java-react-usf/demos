const requestFileFromServer = require('./request-file-from-server');

function retrieveFile(file) {
    
    console.log(`Requesting: ${file}`);

    return new Promise((resolve, reject) => {

        requestFileFromServer(file, text => {
            if(text) resolve(`Request for ${file} success! Text: ${text}`);
            else reject(`Request for ${file} failed!`);
        });

    });
    
}

//------------------------------------------------------------------

// clean async/await implementation with proper error handling (attr: Alec Batson)

// async function getFiles(...files) {

//     let getOne = async (file) => {
//         try {
//             return await retrieveFile(file);
//          } catch (e) {
//             return e;
//         }
//     }

//     let res = files.map(ele => {
//         return getOne(ele);
//     });

//     for(let i = 0; i < res.length; i++){
//         console.log(await res[i]);
//     }

//     console.log('Complete!');

// }

// getFiles('file1', 'file2', 'file3', 'file4');

//-------------------------------------------------------------------------------


/**
 * Takes in a generator function which is used to retrieve files from a server. It returns a Promise
 * containing either the text of the requested file or an error.
 * 
 * @param {Generator} generator a generator function which is used to yield Promises 
 */
let await = function (generator) {

    return new Promise((resolve, reject) => {
        
        /**
         * A function that will be ran when a Promise is done and was successfully fulfilled. The step() 
         * function is invoked, with 'value' being passed for resolution. If any errors occur, their 
         * value will be passed to reject().
         * 
         * @param {*} value the value yielded from the generator function
         */
        function fulfilled(value) {
            try { 
                step(generator.next(value)); // gets the next promise
            } catch (e) { 
                reject(e); // reject and provide reason
            } 
        }

        /**
         * A function that will be ran when a Promise is done but was rejected. The step() function
         * is invoked, with the next generator value being passed as a parameter.
         * 
         * @param {*} value the value yielded from the generator function
         */
        function rejected(value) { 
            try {
                step(generator.next(value));  // gets the next promise
            } catch (e) {
                reject(e); // reject and provide reason
            } 
        }

        generator = generator.apply(this); // this is necessary otherwise generator.next is not a function
        result = generator.next(); // gets the first file using the provided generator function

        /**
         * A function that will determine if the Promise (which is result.value) is done or not. If it is
         * then it will be passed to resolve(). Otherwise, the promise's execution is deferred until its 
         * resolution or rejection (handled by fulfilled() and rejected(), respectfully).
         * 
         * @param {*} result the result object yielded from a generator function
         */
        function step(result) {
            // console.log(result); // added for debug purposes
            result.done ? resolve(result.value) : result.value.then(fulfilled, rejected);
        }

        step(result);

    });

};

/**
 * Takes in one or more file names and requests them from the server. It prints the contents
 * of the files out as soon as possible, but only if files requested before it have already 
 * been retrieved and printed.
 * 
 * @param  {...string} files the names one or more files to request from the server
 */
function getFiles(...files) {

    /**
     * Requests the file with the provided filename from the server using await().Passes an anonymous 
     * generator that will yield a Promise returned by retrieveFile().
     * 
     * @param {string} file 
     */
    let getOne = file => await(function* () {
            return yield retrieveFile(file);
    });
    
    // Take the files provided and request them from the server, map them to the Promise returned by getOne()
    let filePromises = files.map(fileName => {
        return getOne(fileName);
    });

    /*
        Reduce the filePromises into a single Promise, while printing out the contexts of each one in the 
        proper order. After all promises have been resolved and printed, finally print 'Complete!'

        This is where the flow control is happening. Since we are iterating across the Promises in the 
        order that we requested them, we can be sure that we will print them in the corect order.

    */
    filePromises.reduce((chain, filePromise) => {

        return chain.then(() => filePromise)
                    .then(text => console.log(text));

    }, Promise.resolve())
    .finally(() => console.log('Complete!'));

}

getFiles('file1', 'file2', 'file3', 'file4');