
const inicializarBaseDeDatos = () => new Promise( resolve =>
    {
        console.log( 'inicializando base de datos' )
        throw Error( 'horror')
        setTimeout ( resolve, 2000 )
    })
//reject es el segundo argumento que maneja los errores en la promesa
const inicializarServidor = () => new Promise( ( resolve , reject ) =>
        {
            console.log( 'inicializando servidor' )
            //se manda a llamar la funcion sin hacer un throw
            setTimeout ( reject( Error('falle')), 1000 )
            setTimeout ( resolve, 3000 )
        })
/* el catch se maneja como metodo*/
    inicializarBaseDeDatos()
        .then( inicializarServidor )
        .then( () => console.log( 'todos los sistemas han inicializado' ))
        /* lo que esta entre parentesis se vuelve una funcion */
        /* funciona sin importar cual de las promesas fallo */
        .catch( error => 
        {
            console.error("hubo un error", error.message)
        })
        /*es la manera correcta de hacerlo */
