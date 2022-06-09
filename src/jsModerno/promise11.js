const inicializarBaseDeDatos = () => new Promise( resolve =>
    {
        console.log( 'inicializando base de datos' )
       // throw Error( 'horror')
        setTimeout ( resolve, 2000 )
    })
const inicializarServidor = () => new Promise( ( resolve , reject ) =>
        {
            console.log( 'inicializando servidor' )
            //se manda a llamar la funcion sin hacer un throw
           // setTimeout ( reject( Error('falle')), 1000 )
            setTimeout ( resolve, 3000 )
        })
/* all ejecuta los dos metodos que regresan una promesa de manera simultánea*/
Promise.all( [inicializarBaseDeDatos(), inicializarServidor()] )
        .then( () => console.log( 'todos los sistemas han inicializado' ))
        .catch( error => 
        {
            console.error("hubo un error", error.message)
        })
        .then( () => console.log('finalizando' ))