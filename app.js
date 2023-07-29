const http = require('node:http'); // protocolo HTTP
const fs = require('node:fs'); // file system

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Hola mundo, bienvenido a mi página web');
    }
    else if (req.url === '/imagen') {
        fs.readFile('./assets/imagen.png', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('500 Internal server error');
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'image/png');
                res.end(data);
            }
        });
    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('Hola, mi nombre es: Johny Alexander Mora Méndez');
    }
    else {
        res.statusCode = 404;
        res.end('Error 404, página no encontrada');
    }
}

// crea un servidor HTTP y le pasa como argumento la función que procesará las peticiones
const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
});