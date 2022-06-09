const pelicula = 
{
    nombre: 'Viernes 13', 
    genero: 'Terror', 
    clasificacion: 'B'
}

/* {estilos básicos para definir funciones} */
function imprimir({ nombre, genero, clasificacion })
{
   console.log( nombre, genero, clasificacion )
}
        
const imprimir2 = function({ nombre, genero, clasificacion })
{
    console.log( nombre, genero, clasificacion )
}
/* {más compacta prog funcional} */
const imprimir3 = ({ nombre, genero, clasificacion }) =>
{
    console.log( nombre, genero, clasificacion )
}

        
imprimir(pelicula)
imprimir2(pelicula)
imprimir3(pelicula)
       