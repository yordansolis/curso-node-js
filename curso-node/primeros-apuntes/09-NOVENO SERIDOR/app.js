const http = require('http')
const puerto = 3000

const servidor = http.createServer((req, res)=> { 

    //Proceso del servidor 

    // nos envia la respuesta el ciente
    const suma = 1 + 3;
    console.log(suma);
    console.log('Solicitud nueva');
    res.end("Hola, Mundo");
});


servidor.listen(puerto, () =>{
    console.log(`El servidor esta escuchando en http://localhost:${puerto} `);
});