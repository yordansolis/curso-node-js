import { createServer } from 'http';

const server = createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end('<h1> Hola Mundo mi pirmer servidor! </h1>');

    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1> Hola sobre mi 😜 </h1>');

    } else {

        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1> No encontrada 😒! </h1>');

    }
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor ejecutandose  http://localhost:3000');
})