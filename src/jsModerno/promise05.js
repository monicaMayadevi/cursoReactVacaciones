
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
/* se puede simplificar el codigo, ya que son funciones en si*/
inicializarBaseDeDatos()
    .then( inicializarServidor )
    .then( () => console.log( 'todos los sistemas han inicializado' ))
    
