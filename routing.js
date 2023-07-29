const http = require('node:http');

// commonJS modules (node.js)
const cultJSON = require('./cult-of-the-lamb/flock-cult.json');

const processRequest = (req, res) => {
    const { url, method } = req;

    switch (method) {
        case 'GET':
            switch (url) {
                case '/cult-of-the-lamb/flock-cult':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8');
                    return res.end(JSON.stringify(cultJSON));
                default:
                    res.statusCode = 404;
                    return res.end('<h1>Error 404, página no encontrada</h1>');
            }
        case 'POST':
            switch (url) {
                case '/cult-of-the-lamb': {
                    const body = '';

                    // escuchar el evento 'data' del request stream (flujo de datos) y concatenar el chunk a la variable body
                    req.on('data', chunk => {
                        body += chunk.toString();
                    });
                    break;
                }
                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    return res.end('<h1>Error 404, página no encontrada</h1>');
            }
    }
}

// crea un servidor HTTP y le pasa como argumento la función que procesará las peticiones
const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log('Server listening on port http://localhost:3000');
});