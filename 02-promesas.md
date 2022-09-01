# Promesas en Javascript

## Consignas:

> 1. Transformar todas las funciones declarativas en funciones flecha.

> 2. Transformar las funciones en asíncronas con la palabra __async__.

> 3. Colocar la url correcta del método fetch teniendo en cuenta el nombre de la función que la contiene.

> 4. Luego de realizar el método fetch, implementar el método ".json()" sobre los datos obtenidos.

>5. Implementar **await** sobre todos los procesos asíncronos como consultas a la base de datos, conversión de formato json, etc.

> 6. Selecconar las funciones _*retrasar*_, _*obtenerPcias*_, _*obtenerDptos*_, _*obtenerLocalidades*_, luego cortarlas y pegarlas en el archivo funciones-exportadas que se encuentra en la carpeta _*libs*_.

> 7. Utilizar la palabra reservada **export** para exportar las funciones y que puedan ser utilizadas desde el archivo __app.js__. Pueden exportarlas una por una o como un solo objeto.

> 8. Implementar bloques try catch para el manejo de errores. 

```JS


const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
function obtenerPcias() {
    await retrasar(1800);

    const consulta = fetch('');
}

// Función que retorna los datos de departamentos
function obtenerDptos() {
    await retrasar(1391);

    const consulta = fetch('');
}

// Función que retorna los datos de localidades
function obtenerLocalidades() {
    await retrasar(900);

    const consulta = fetch('');
}




// Funcion para obtener todos los datos
function consultarDatos()=> {
    const provincias = obtenerPcias();
    const dptos = obtenerDptos();
    const localidades = obtenerLocalidades();

    console.log(provincias);
    console.log(dptos);
    console.log(localidades);
}

consultarDatos();


```