
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write(req.url)
    res.end() 

}).listen(8080)