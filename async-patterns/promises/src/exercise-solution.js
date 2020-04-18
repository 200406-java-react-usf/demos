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

async function multiRetrieve(...files) {

    let getOne = async (file) => {
        try {
            return await retrieveFile(file);
         } catch (e) {
            return e;
        }
    }

    let res = files.map((ele)=>{
        return getOne(ele);
    });

    for(let i =0; i < res.length; i++){
        console.log(await res[i]);
    }

    console.log('Complete!');

}

multiRetrieve('file1', 'file2', 'file3', 'file4');