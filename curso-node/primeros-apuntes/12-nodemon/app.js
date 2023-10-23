const http = require('http')


const  servidor =  http.createServer((req, res) => {

    res.end('hola mundos. aprendiendo nodes ');
});

const PUERTO = 3000

servidor.listen(PUERTO, () => { 
    console.log(`Servidor esta escuchando  desde el puerto ${PUERTO}`);
});