/**
 * A fake implementation representing a request for a file from a server (simulated latency is
 * randomized)
 * 
 * @param {string} url fake url (ex: 'file1', 'file2', etc.)
 * @param {function} cb callback invoked when file is retrieved
 */
module.exports = function requestFileFromServer(url, cb) {
    
    let fakeResponses = {
		file1: 'This is file 1! It should print first.',
		file2: 'This is file 2! It should print second.',
		file3: 'This is file 3! It should print last.'
    };
    
	let randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	setTimeout(function(){
		cb(fakeResponses[url]);
    },randomDelay);
    
}