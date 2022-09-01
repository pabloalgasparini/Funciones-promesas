const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
let obtenerPcias= async ()=>{
    await retrasar(1800);

     const consulta =await fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then(respuesta=>respuesta.json())
    .then(datos=>datos);
    return consulta;
}
obtenerPcias();
// Función que retorna los datos de departamentos
async function obtenerDptos() {
    await retrasar(1391);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/departamentos')
    .then(respuesta=>respuesta.json())
    .then(datos=>datos);
    return consulta;
}

// Función que retorna los datos de localidades
async function obtenerLocalidades() {
      await retrasar(900);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/localidades')
    .then(respuesta=>respuesta.json())
    .then(datos=>datos);
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
