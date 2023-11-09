import { createServer } from 'http';

const server = createServer((req, res) => {
   // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1> Hola Mundo mi pirmer servidor! </h1>');
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor ejecutandose  http://localhost:3000');
})