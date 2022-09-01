const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
let obtenerPcias= async ()=>{
    await retrasar(1800);

     const consulta =await fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then(respuesta=>respuesta.json())
    .then(datos=>console.log(datos.provincias));
    return consulta;
}
// Función que retorna los datos de departamentos
let obtenerDptos=async()=>{
    await retrasar(1391);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/departamentos?campos=completo&max=1000')
    .then(respuesta=>respuesta.json())
    .then(datos=>console.log(datos.departamentos));
    return consulta;
}

// Función que retorna los datos de localidades
let obtenerLocalidades=async()=>{
      await retrasar(900);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/localidades?campos=completo&max=4200')
    .then(respuesta=>respuesta.json())
    .then(datos=>console.log(datos.localidades));
    return consulta;
}
// Funcion para obtener todos los datos
const consultarDatos=()=> {
    const provincias = obtenerPcias();
    const dptos = obtenerDptos();
    const localidades = obtenerLocalidades();

    console.log(provincias);
    console.log(dptos);
    console.log(localidades);
}

consultarDatos();
