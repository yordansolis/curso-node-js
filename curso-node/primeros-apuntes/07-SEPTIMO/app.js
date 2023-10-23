const estatusPedido = () => {

    return Math.random() < 0.8
}



const miPedidoDePizza = new Promise((resolve, reject) => {

    setTimeout(() => {

        if (estatusPedido) {
            resolve('Pedido extitoso!')
        }else {
            reject('Ocurrio un error ')
        }
        
    } , 3000);

})


const manejorPedido =  (mensajeDeConfirmacio) => {
    console.log(mensajeDeConfirmacio);
}

const rechazarPerido = (estatusPedido)  => {
    console.log(estatusPedido);
}

miPedidoDePizza.then(rechazarPerido, manejorPedido)




/// otra forma de hacerlo 
miPedidoDePizza
.then((mensajeDeConfirmacio) => { 
    console.log(mensajeDeConfirmacio);
})
.catch((mensajeDeError)  => {
    console.log(mensajeDeError);
})