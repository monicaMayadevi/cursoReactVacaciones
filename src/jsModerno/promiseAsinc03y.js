/* promsea a alto nivel maneja la promesa en un bloque asincrono*/
const promise = new Promise( (resolve ) =>
{
    console.log( 'empece' )
    setTimeout ( resolve, 2000 )
})
//await no se puede usar sin async
//o si se intenta ejecutar fuera de una funcion async
const ejecutar = async () =>
{
    await promise
    console.log( 'ya termino ')
}

ejecutar()
