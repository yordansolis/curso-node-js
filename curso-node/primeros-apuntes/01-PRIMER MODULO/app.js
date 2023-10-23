const {  saludar, saludarHolaMundo } = require("./saludos.js")
console.log(saludar("freecodecamp"));
console.log(saludarHolaMundo());


// console.log('Hola, mundo');
// console.warn('Ocurrio un error!...');
// console.error(new Error("Ocurrio un error"));



// console.log(process);
//  console.log(process.env);
//


// console.log(process.argv);
//console.log(process.memoryUsage());




// const os =  require('os')
// console.log(os.type())
// console.log(os.homedir())

// console.log(os.uptime())
// console.log(os.userInfo())





/*

function mostrarTema(tema){
    console.log(`Estoy aprendoendo ${tema}`);
}

setTimeout(mostrarTema, 5000, 'Node.js')
*/





/*
function sumar(a, b){
    console.log(a + b);
}
setTimeout(sumar, 3000, 15 , 5)
*/






/*

function mostrarTema(tema){
    console.log(`2... Estoy aprendoendo ${tema}`);
}
console.log('1... Antes de setImmediate()...');

setImmediate(mostrarTema, 'Nodes.js')

console.log('3..Despues de setImmediate()');
*/





/*
function mostrarTema(tema){
    console.log(`2... Estoy aprendoendo ${tema}`);
}
console.log('1... Tenemos que para la ejecución ')

setInterval(mostrarTema, 3000 ,'Nodes.js')
*/







/***************Metodos files */
// abre un documento en la console
// const fs = require('fs')
// const { threadId } = require('worker_threads')

// fs.readFile ('index.html', 'utf-8', (err, contenido) =>{
//      if (err) {
//         // throw temina la ejecución y nos da mas detalle del err
//     throw err        
//    }else{
//     console.log(contenido);
// }

// })





/*
// cambiar nombre de archivo 
const fs = require('fs')

fs.rename('index.html', 'main.html', (err) => {

    if (err) {
        throw err
    }
    console.log('nombre cambiado con exito');
})
*/





// Agregar contenido al final del archivo
// const fs = require('fs')
// fs.appendFile('index.html', '<p> hola mundo</p>', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log(' archivo actualizado');
// })






/*
const fs = require('fs')
//remplazar todo el contenido del archivo

fs.writeFileSync('index.html','Contenido nuevo', (err)=>{

    (err)?console.log('error al intentar'):console.log('success');
})
*/



/*
//eliminar archivos
const fs = require('fs')
fs.unlinkSync('main.html', (err)=>{
    if (err) {
        throw err;
    }
    console.log('archivo eliminado');
})
*/



/** este codigo sin sincrono  
 * para volverlo asincrono ese le pole 
 * Sync ejemplo: 
 * unlinkSync
 */