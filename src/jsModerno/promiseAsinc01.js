/* promsea a alto nivel maneja la promesa en un bloque asincrono*/
const promise = new Promise( (resolve ) =>
{
    console.log( 'empece' )
    setTimeout ( resolve, 2000 )
})

//el codigo es asincrono, y trabaja siempre con promesas y esta relacionada siempre con await
//es pera a que la promesa termine y despues continua es un then, pero sin usar then
async function ejecutar()
{
    await promise
    console.log( 'ya termino ')
}

ejecutar()
