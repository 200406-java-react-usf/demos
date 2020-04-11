var http = require('http');

http.createServer(function(request, response) {
	console.log('request received!');
	response.setHeader('Content-Type', 'text/html');
	response.writeHead(200);
	response.write('Hello World!');
	response.end();
}).listen(8080);


