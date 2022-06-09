
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
/* el catch se maneja como metodo*/
    inicializarBaseDeDatos()
        .then( inicializarServidor )
        .then( () => console.log( 'todos los sistemas han inicializado' ))
        /* lo que esta entre parentesis se vuelve una funcion */
        .catch( error => 
        {
            console.error("hubo un error", error.message)
        })
        /*es la manera correcta de hacerlo */
