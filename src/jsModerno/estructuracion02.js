const nombre = 'Viernes 13'
const genero = 'Drama'
const clasificacion = 'A'
/* {si nombre coincide con el nombre de la variable se omite }*/
const pelicula = { nombre, genero, clasificacion }

console.log( pelicula )
console.log( JSON.stringify(pelicula) )
