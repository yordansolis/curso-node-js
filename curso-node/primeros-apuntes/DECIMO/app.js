const estatusPedido = () => {
    return Math.random() < 4.0;
    
}

const miPedidoDePizza = new Promise((resolve, reject) =>{

    setTimeout(() =>{
        if(estatusPedido()){
        resolve('pedido exitoso!')
        }else{
        reject('ocurrio un error')
        }
    }) 

})

// funciones que majen la promesa

const manejarPedidoConfirmado = (mjConfirmacion) =>{ 
    console.log(mjConfirmacion);
}

const manejarPedidoRechazado = (mjErrorr) =>{ 
    console.log(mjErrorr);
}


// miPedidoDePizza.then(manejarPedidoRechazado,manejarPedidoConfirmado )


// otra formas de hacer
miPedidoDePizza.then((mjConfirmado)=>{
    console.log(mjConfirmado);
})
.catch( (mjError) => {
console.log(mjError);
})