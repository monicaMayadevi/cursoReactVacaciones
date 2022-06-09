const nombre = 'Viernes 13'
const genero = 'Drama'
const clasificacion = 'A'

const pelicula =
{
    nombre: nombre,
    genero: genero,
    clasificacion: clasificacion
}

console.log( pelicula )
/* para desplegar su contenido, el obejto lo convierte en formato JSON*/
/* util para mensajes de error y bitacoras*/
console.log( JSON.stringify(pelicula) )
