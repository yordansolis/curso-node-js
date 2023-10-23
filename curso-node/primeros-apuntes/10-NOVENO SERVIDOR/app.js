const http = require('http')

const servidor = http.createServer((req, res)=> { 

    //Proceso del servidor 

    // nos envia la respuesta el ciente
    res.end('Hola, mundo');
});


servidor.listen(3000, () =>{
    console.log('el servidor esta escuchando ...');
});