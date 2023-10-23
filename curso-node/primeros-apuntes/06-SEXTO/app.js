//ejemplo basico que no se debe usar porque estas
//promesas generalemntente se usan con condiciones
const promesaCumpleda = true

const miPromesa = new Promise((resolve, reject) => { 
    
    setTimeout(() =>{

        if (promesaCumpleda) {
            resolve('¡Promesa Completada!')
        }else{
            reject('Promesa rechazada...')
        }

    } ,3000)

})

/*
miPromesa.then((valor) =>{
    console.log(valor);
})
*/

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
}

const manejarPromesaRechazada = (reazonRechazo) => {
    console.log(reazonRechazo);
}

miPromesa.then((manejarPromesaCumplida, manejarPromesaRechazada))

