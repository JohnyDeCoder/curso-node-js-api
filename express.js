const express = require('express'); // framework para crear servidores HTTP
const cult = require('./cult-of-the-lamb/flock-cult.json'); // commonJS modules (node.js)

const PORT = process.env.PORT ?? 3000;

const app = express();
app.disable('X-Powered-By'); // deshabilita el header X-Powered-By: Express (por seguridad)

app.use(express.json()); // middleware para parsear el body de las peticiones con Content-Type: application/json

app.get('/cult-of-the-lamb/flock-cult', (req, res) => {
    res.json(cult);
});

app.post('/cult-of-the-lamb', (req, res) => {
    // req.body es el body de la petición parseado por el middleware express.json()
    res.status(201).json(req.body);
});

// la última a la que va a llegar
app.use((req, res) => {
    res.status(404).send('<h1>404, no encontrado</h1>');
});

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
});