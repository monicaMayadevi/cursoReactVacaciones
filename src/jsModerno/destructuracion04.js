const pelicula = 
{
    nombre: 'Viernes 13', 
    genero: 'Terror'
}

/* {Valores por defecto en caso de que no se envie la clasificacion} */
function imprimir({ nombre, genero, clasificacion = 'A' })
{
   console.log( nombre, genero, clasificacion )
}
        
const imprimir2 = function({ nombre, genero, clasificacion = 'B' })
{
    console.log( nombre, genero, clasificacion )
}
/* {aqui clasificacion sera indefinido} */
const imprimir3 = ({ nombre, genero, clasificacion }) =>
{
    console.log( nombre, genero, clasificacion )
}
        
imprimir(pelicula)
imprimir2(pelicula)
imprimir3(pelicula)
       