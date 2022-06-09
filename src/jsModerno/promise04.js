/* haremos algo mas similar a lo que se ve en un programa*/
const inicializarBaseDeDatos = () => new Promise( resolve =>
    {
        console.log( 'inicializando base de datos' )
        setTimeout ( resolve, 2000 )
    })
   
const inicializarServidor = () => new Promise( resolve =>
        {
            console.log( 'inicializando servidor' )
            setTimeout ( resolve, 3000 )
        })
    
inicializarBaseDeDatos()
    .then( inicializarServidor() )
    .then( () => console.log( 'todos los sistemas han inicializado' ))
    
