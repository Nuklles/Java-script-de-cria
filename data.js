const http = require('http')
const data = require ('./minhadata')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write("Oi, mulheres! A data de hoje é: " + data.myDateActual())
    res.end() 

}).listen(8080)