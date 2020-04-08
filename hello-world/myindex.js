var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('<h1>Welcome to my page</h1>');
    res.write('<p>This is a paragrapth</p>');
    return res.end();
}).listen(8080);