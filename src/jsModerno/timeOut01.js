/* en js no existen los hilos, sino los timeout */

const imprimir = () =>
{
    console.log( 'hola mundo' )
}
/* espera dos segundos y despues ejecuta la funcion almacenada en la variable */
setTimeout( imprimir, 2000 )

