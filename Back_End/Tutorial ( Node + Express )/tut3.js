const http = require('http');
const fs= require('fs');
const filecontent = fs.readFileSync('tut') // file name


const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(filecontent)
})

server.listen(8000, '127.0.0.1', () =>{
    console.log("listening on port 8000")
})

// serving html file using node //