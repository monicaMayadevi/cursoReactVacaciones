/* si solo recibe un argumento se pueden omitir los parentesis*/
const promise = new Promise( resolve =>
{
    console.log( 'empece' )
    setTimeout ( resolve, 2000 )
})
/* Puedo definir que cuando se haga la promesa se realice otra acción*/

promise.then( () => console.log( 'ya termino' ))

/* es el uso de promise mas simple*/