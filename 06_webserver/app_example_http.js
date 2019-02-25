const http = require('http');

http.createServer((req, res) => {
    
    res.writeHead(200, {'Content-type': 'application/json'})
    let salida = {
        name: 'Andres',
        lastName: 'Narvaez',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log('Listen 8080 server')