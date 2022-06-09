/* asi es el manejo asincrono a partir de js 6 */
/* objeto que encapsula la respuesta de una funcion asincrona */
/* resolve se invoca cuando la promesa se cumple (cualquier condiciones asincrona)*/
const promise = new Promise( (resolve ) =>
{
    console.log( 'empece' )
    setTimeout ( resolve, 2000 )
})
/* Puedo definir que cuando se haga la promesa se realice otra acción*/

promise.then( () => console.log( 'ya termino' ))

/* es el uso de promise mas simple*/