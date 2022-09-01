// Promesa almacenada en una constante
// const promesa = new Promise((resolve, reject)=>{

//     ( 10 === 10)
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos');
    
//    return promesa;     
// });

// promesa
// .then(respuesta=>{
//     console.log(respuesta)
// })
// .catch(err=>console.log(err))

// Promesa dentro en una función.
// let promesaDos=(provincia)=>{

//     const promesa = new Promise( (resolve, reject)=> {
    
//             ('Formosa' === provincia)
//                ? resolve('Usted está ubicado en Formosa')
//                : reject('Error al realizar la consulta');

//     });

//     return promesa
//     .then(respuesta=>{
//         console.log(respuesta)})
//     .catch(err=>{
//     console.log(err)
// })
// }


// promesaDos('Chaco')

// let promesaTres=(valorBooleano)=>{

//     const promesa=new Promise( (resolve,reject)=> {
//         ( true === valorBooleano )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })
//     return promesa
//     .then(respuesta=>{
//         console.log(respuesta)})
//     .catch(err=>{
//     console.log(err)
// })

// }

// promesaTres(false)

let promesaCuatro=async (arguments)=>{

    return ( true === arguments) 
        ? ('Los valores son iguales')
        : ('Los valores son distintos')
    
}

promesaCuatro(false).then(respuesta=>{
    console.log(respuesta)
}).catch(err=>console.log(err))
