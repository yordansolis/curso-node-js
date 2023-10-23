const http = require('http'); 

const servidor = http.createServer((req, res) =>  {
console.log(' ==> req (solicitud)');
// console.log(req);
// console.log(req.url);
console.log(req.method);
console.log(req.headers);

console.log('===> Objeto req (solicitud)');
// console.log(res);
// console.log(res.statusCode); // 200 ok 
// console.log(res.statusCode);  // not fout

// res.statusCode = 404;
// console.log(res.statusCode);

res.setHeader('content-type', 'application/json');
console.log(res.getHeaders());

res.end('Hola, mundo');

})

const PUERTO = 3000;

servidor.listen(PUERTO, () => { 
console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
})