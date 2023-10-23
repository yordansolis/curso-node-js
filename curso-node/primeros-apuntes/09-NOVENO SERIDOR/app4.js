const http = require('http');
const cursos = require('./curso.js'); // importamos

const path = require('path');
const { log } = require('console');

const servidor = http.createServer((req, res) =>{
 const metod = req.method;
 switch(metod){
    case 'GET':
        return mensajareSolicitudGET(req, res);
    
    case 'POST':
        return manejarSolicitudPOST(req, res);
        
    default:
            console.log(`el method no puede ser manejado por ser servidor ${metod}`); 
    }
});


function mensajareSolicitudGET(req, res){
    const path = req.url; 

    if(path === '/'){
        res.writeHead(200, {'Content-Type': 'application/json'})// esta es la cabera por si se necesita
        // res.statusCode = 200;/ // el statusCode no es tan necesrio  
        return  res.end("Welcome serve nodejs")
    }else if(path === '/cursos'){
        res.statusCode = 200; 
        res.end(JSON.stringify(cursos.infoCursos))
    }
    else if(path === '/cursos/programacion'){
        res.statusCode = 200; 
        return res.end(JSON.stringify(cursos.infoCursos.programacion))
    }
    else if(path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));

    }
    res.statusCode = 404
    return   res.end(`el recurso no existe ${res.statusCode}`)
}


function manejarSolicitudPOST(req,res){
    const path = req.url; 

    if(path === '/cursos/programacion'){


        let cuerpo = ''; 

        req.on('data', contenido =>{ 
            cuerpo += contenido.toString();
        });


        req.on('end', () =>{
            console.log(cuerpo);
            console.log(typeof cuerpo);


            cuerpo = JSON.parse(cuerpo); // cconvierte a jascript


            console.log(cuerpo.titulo);


            
            return console.log(`El servidor esta escuchando el method POST`);

        } )



        // res.statusCode = 200;
        // return console.log(`El servidor esta escuchando el method POST`);
    }
}

const PUERTO = 3000

servidor.listen(PUERTO, () =>{ 
     console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});