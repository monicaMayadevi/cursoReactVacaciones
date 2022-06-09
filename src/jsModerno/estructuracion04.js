const nombre = 'Viernes 13'
const genero = 'Drama'
const clasificacion = 'A'
const fecha = '2000'

const director = 
{
    nombreDirector: "Juan Perez",
    paisDirector: 'EUA',
    fecha: '1950'
}
/* { la pripiedades de objeto de adentro sobreescribe a las del bjeto de afuera }*/
const pelicula = { nombre, genero, fecha, clasificacion, director }
/* { la pripiedades de objeto de adentro sobreescribe a las del bjeto de afuera }*/
const pelicula2 = { nombre, genero, fecha, clasificacion, ...director }
/* { se hace una copia del objeto y son objetos diferentes} */
const peliculaCopia = { ...pelicula2 }

console.log( pelicula )
console.log( JSON.stringify(pelicula) )

console.log( pelicula2 )
console.log( JSON.stringify(pelicula2) )

console.log( pelicula2 == peliculaCopia )