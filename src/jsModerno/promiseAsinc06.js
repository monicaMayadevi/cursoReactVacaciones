/* equivalente al ejemplo de promesas con then*/
const inicializarBaseDeDatos = () => new Promise( resolve =>
    {
        console.log( 'inicializando base de datos' )
        throw Error('horror')
        setTimeout ( resolve, 2000 )
    })
   
const inicializarServidor = () => new Promise( resolve =>
        {
            console.log( 'inicializando servidor' )
            setTimeout ( resolve, 3000 )
        })

//codigo mas limpio si se declara y se invoca codigo ninya
async () =>
{   
    //con esta sintaxis si ve las promesas a pesar de que es un codigo asincrono
// que se ejecuta en distintos hilos de ejecucion
    try
    {
        await Promise.all( [ inicializarBaseDeDatos(), inicializarServidor() ] )
        console.log( 'todos los sistemas han inicializado' )
    }
    catch( error )
    {
        console.error("hubo un error", error.message)
    }

}    
