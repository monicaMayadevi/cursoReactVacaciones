/* promsea a alto nivel maneja la promesa en un bloque asincrono*/
const promise = new Promise( (resolve ) =>
{
    console.log( 'empece' )
    setTimeout ( resolve, 2000 )
})

const ejecutar = async function()
{
    await promise
    console.log( 'ya termino ')
}

ejecutar()
