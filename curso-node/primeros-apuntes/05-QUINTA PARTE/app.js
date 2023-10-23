// Si trabajó con JavaScript en el navegador, sabe cuánto de la interacción del usuario se maneja a través de eventos: clics del mouse, pulsaciones de botones del teclado, reacciones a los movimientos del mouse, etc.

// En el lado del backend, Node.js nos ofrece la opción de construir un sistema similar usando el EventEmitter .

// on escucha el evento 
// emit lo emite

const eventEmitter = new EventEmitter();
eventEmitter.on('start', () => {

   console.log('Procesando evento');
 });

 eventEmitter.emit('start');



// const EventEmitter = require('events')
// console.log(EventEmitter);





/*
emisorProductos.on('compra', ()=> {
   console.log('Se realizo una compra'); 
})

//emite el evento
emisorProductos.emit('compra')
emisorProductos.emit('compra')
//si no se emite no se ejecuta compra
*/




