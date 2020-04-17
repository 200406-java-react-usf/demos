const requestFileFromServer = require("./request-file-from-server");

function retrieveFile(file) {
  console.log(`Requesting: ${file}`);

  // your promise implementation here
  let newPromise = new Promise(function (resolve, reject) {
    requestFileFromServer(file, (text) => {
      if (text) {
        resolve(text);
      } else {
        reject("Request Fail");
      }
    });
  });
  return newPromise;
}

// FREEBIE: request all files in "parallel" here
//let promise1 = retrieveFile("file1").catch(reason => console.log(reason));
//let promise2 = retrieveFile("file2").catch(reason => console.log(reason));
//let promise3 = retrieveFile("file3").catch(reason => console.log(reason));
//let promise4 = retrieveFile("file4").catch(reason => console.log(reason));

// Hmmmm, what to do down here?
/*promise1
  .then((text) => {
    console.log(text);
    return promise2;
  })
  .then((text) => {
    console.log(text);
    return promise3;
  })
  .then((text) => {
    console.log(text);
    return promise4;
  })
  .then((text) => {
    console.log(text);
  })
  .finally(() => {
    console.log("Complete");
  });
  */

  async function getFiles() {
      let files = [retrieveFile('file1'), retrieveFile('file2'), retrieveFile('file3') ]
      for (a of files){
          console.log(await a);
      }
  }
getFiles();