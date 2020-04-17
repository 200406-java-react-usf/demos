const requestFileFromServer = require("./request-file-from-server");

function retrieveFile(file) {
  console.log(`Requesting: ${file}`);

  let result, fn;

  requestFileFromServer(file, (text) => {
    result = text;
    if (fn) {
      fn(result);
    }
  });

  return function (cb) {
    if (result) {
      cb(result);
    } else {
      fn = cb;
    }
  };
}

// FREEBIE: request all files in "parallel" here
let thunk1 = retrieveFile("file1");
let thunk2 = retrieveFile("file2");
let thunk3 = retrieveFile("file3");

// Hmmmm, what to do down here?

thunk1((res) => {
  console.log(res);
  thunk2((res) => {
    console.log(res);
    thunk3((res) => {
      console.log(res);
      console.log('Complete!');
      
    });
  });
});
