const pelicula =
{
    nombre: 'Viernes 13',
    genero: 'Terror'
}

function imprimir( { nombre, genero, clasificacion } )
{
    //renombro una propiedad extraida del obje
    const miNombre = nombre
    console.log( miNombre, genero,clasificacion )
}
//hago el renombrado desde los parámetros, lo agrego a la variable miNombre
function imprimir2( { nombre: minombre, genero, clasificacion } )
{
    console.log( miNombre, genero,clasificacion )
}