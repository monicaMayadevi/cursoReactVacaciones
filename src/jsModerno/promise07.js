
const inicializarBaseDeDatos = () => new Promise( resolve =>
    {
        console.log( 'inicializando base de datos' )
        throw Error( 'horror')
        setTimeout ( resolve, 2000 )
    })
   
const inicializarServidor = () => new Promise( resolve =>
        {
            console.log( 'inicializando servidor' )
            setTimeout ( resolve, 3000 )
        })
/* si tengo el error fuera de cualquier pronesa, imprime el stacktrace porque atrapamos el error*/
try{
    inicializarBaseDeDatos()
        .then( inicializarServidor )
        .then( () => console.log( 'todos los sistemas han inicializado' ))
}
/* imprime el error*/
catch( error )
{
    console.error("hubo un error", error.message)
}
