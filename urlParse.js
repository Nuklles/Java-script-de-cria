const url = require('url')

const endereco = 'http://localhost8080/default.htm?year=2023&month=March'
const qr = url.parse(endereco, true)

console.log(qr.host)
console.log(qr.pathname)
console.log(qr.search)
console.log(qr.host + '/nomeDomeuCaminho')

