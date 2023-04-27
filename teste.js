const { log } = require('console')
const http = require ('http')

const server = http.createServer((req, res) => {
 res.writeHead(200, {'Content-Type': 'text/plain'})
 res.write('Primeiro web service')
 res.end()
}).listen(8080, () => {console.log('Rodando na porta 8080');}) 