const nombre = "Santiago"
const apellido = "rriaga"
const pais = "Mexico"

const cadena = nombre + "-" + apellido + "-" + pais
const cadena2 = `${ nombre } - ${ apellido } - ${ pais }`
//se pueden hacer otras cosas, llamar funciones, etc
const cadena3 = `${ 1 + 1 } - ${ Math.abs( -1 ) }`

console.log( cadena )
console.log( cadena2 )
console.log( cadena3 )