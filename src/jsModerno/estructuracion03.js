const nombre = 'Viernes 13'
const genero = 'Drama'
const clasificacion = 'A'

const director = 
{
    nombreDirector: "Juan Perez",
    paisDirector: 'EUA',
    fecha: '1950'
}
/* { director esta anidado, no está en el mismo nivel que las otras variables o propiedades }*/
const pelicula = { nombre, genero, clasificacion, director }
/* {todos estan en el mismo nivel de anidación, las propiedades se integran al objeto actual} */
const pelicula2 = { nombre, genero, clasificacion, ...director }

console.log( pelicula )
console.log( JSON.stringify(pelicula) )

console.log( pelicula2 )
console.log( JSON.stringify(pelicula2) )
