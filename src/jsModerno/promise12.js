const inicializarBaseDeDatos = () => new Promise( resolve =>
    {
        console.log( 'inicializando base de datos' )
        setTimeout ( () =>
        {
           console.log( 'terminando inicialización de base de datos' ) 
           resolve()
         } , 2000 )
    })
const inicializarServidor = () => new Promise( ( resolve , reject ) =>
        {
            console.log( 'inicializando servidor' )
             setTimeout ( () =>
             {
                console.log( 'terminando inicialización de servidor' ) 
                resolve()
             }
             , 3000 )
        })
/* all ejecuta los dos metodos que regresan una promesa de manera simultánea*/
Promise.all( [inicializarBaseDeDatos(), inicializarServidor()] )
        .then( () => console.log( 'todos los sistemas han inicializado' ))
        .catch( error => 
        {
            console.error("hubo un error", error.message)
        })
        .then( () => console.log('finalizando' ))