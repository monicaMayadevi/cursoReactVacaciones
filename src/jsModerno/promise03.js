/* {queremos que la segunda promesa se ejecute despues de la que primera termine }*/
const promise = new Promise( resolve =>
{
    console.log( 'empece' )
    setTimeout ( resolve, 2000 )
})
/* { Puedo definir que cuando se haga la promesa se realice otra acción }*/
promise
.then( () => 
{
    //es el return de la funcion () */
    return new Promise( resolve =>  
    {
    console.log( 'continuo' )
    setTimeout ( resolve, 3000 )
    })
})
.then( () => console.log( 'ya termino' ))

/*{ es como se usa el codigo asincrono en js }*/