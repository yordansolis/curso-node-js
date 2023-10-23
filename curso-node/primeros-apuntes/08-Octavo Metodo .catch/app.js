function obtenerNombreUsuarioPorID(userID) {

    return new Promise((resolv, rejec) => {
        
      // Simulamos una petición al servidor (en este caso, con datos estáticos)
        setTimeout(()=>{

         const usuarios = {
            1 : 'jordan',
            2 : 'ana',
            3 : 'pablo' 
         };

         const nombre = usuarios[userID];
         if(nombre){
            console.log('Procesando respuesta...');
            resolv(nombre);
         }else{
            rejec('Usuario no encontrado');
         }
        }, 3000)
    })
}


// Uso de la función para obtener el nombre de un usuario por su ID
// const userID = 1
// obtenerNombreUsuarioPorID(userID)
// .then(nombre => { 
//     setTimeout(() =>{ 
//         console.log(`El nombre del usuario es "${nombre}" ID "${userID}"`);
//     }, 2000)
// })
// .catch(err => {
//     console.log(`Error: ${err}`)
// })

async function obtenerNombreUser(userID){
    try{
        const nombre = await obtenerNombreUsuarioPorID(userID);
        setTimeout(()=>{
            console.log(`El nombre del usuario es "${nombre}" ID "${userID}"`);

        }, 3000)
    
    } catch (err){
        console.log(`Error: ${err}`);
    }
}

const userID = 1
obtenerNombreUser(userID);