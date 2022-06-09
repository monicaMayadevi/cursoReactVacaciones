
import React from 'react'

import DetallePelicula from './detallePelicula'

class MostrarDatos extends React.Component
{
    render()
    {
        const usuario = { nombre: 'Santiago', email: 'santiago@server.com', edad: 20}
        const titulos = [ 'Viernes 13', 'Bambi', 'XXX' ]

        /* {programacion funcional sin uso de variables, todo constante no mutable} */
        const arreglo3 = titulos.map( titulo => ( <td>{ titulo }</td>) )
        const arreglo2 = []
        const arreglo = []

        const peliculas = 
        [
           { nombre: 'Viernes 13', genero: 'Terror', clasificacion: 'B' },
           { nombre: 'Bambi', genero: 'Infantil', clasificacion: 'A' },
           { nombre: 'XXX', genero: 'Accion', clasificacion: 'C' } 
        ]

        const peliculasAdolescentesYAdultos = peliculas.filter( pelicula => pelicula.clasificacion != 'A')
        const peliculasInfantiles = peliculas.filter( pelicula => pelicula.clasificacion == 'A')
        const peliculasAdolescentes = peliculas.filter( pelicula => pelicula.clasificacion == 'B')
        const peliculasAdultos = peliculas.filter( pelicula => pelicula.clasificacion == 'C')

        titulos.forEach( titulo => 
            arreglo2.push( <td>{ titulo }</td> )
            )

        for( const titulo of titulos )
            arreglo.push( <td>{ titulo }</td> )
            
        return(
            <div className='row' >
                <h2>Mostrar Datos</h2>
               <br />
                <div class="col-sm-4"></div>
                <div class="col-sm-4 bg-dark text-white">
                <h3>(componente con argumentos)</h3>
                <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center' colSpan={10}> Peliculas </th>
                            </tr>
                            <tr>
                                <th className='text-center'> Nombre </th>
                                <th className='text-center'> Genero </th>
                            </tr>
                        </thead>
                        <tbody> 
                                { peliculas.map( pelicula => (
                                    <DetallePelicula datos={ pelicula }/>
                                ))}
                             
                        </tbody>    
                    </table> 
                    <br/>
                    <h3>Mostrar datos</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center'>Nombre</th>
                                <th className='text-center'>Email</th>
                                <th className='text-center'>Edad</th>
                                <th className='text-center'>Rango</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ usuario.nombre.toUpperCase() }</td>
                                <td>{ usuario.email }</td>
                                <td>{ usuario.edad }</td>
                                <td>{ usuario.edad > 50 ? 'VIEJO' : 'JOVEN' }</td>
                            </tr>                        
                        </tbody>
                    </table>
                    <br/>
                    <h3>OPCION 6 (usando filtro)</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center' colSpan={10}> Peliculas de Adolescentes y Adultos</th>
                            </tr>
                            <tr>
                                <th className='text-center'> Nombre </th>
                                <th className='text-center'> Genero </th>
                            </tr>
                        </thead>
                        <tbody> 
                                { peliculasAdolescentesYAdultos.map( pelicula => (
                                    <tr>
                                    <td>
                                        {pelicula.nombre}                                   
                                    </td>
                                    <td>
                                        {pelicula.genero}                                   
                                    </td>
                                    </tr>
                                ))}
                             
                        </tbody>    
                    </table> 
                    <br/>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center' colSpan={10}> Peliculas Infantiles</th>
                            </tr>
                            <tr>
                                <th className='text-center'> Nombre </th>
                                <th className='text-center'> Genero </th>
                            </tr>
                        </thead>
                        <tbody> 
                                { peliculasInfantiles.map( pelicula => (
                                    <tr>
                                    <td>
                                        {pelicula.nombre}                                   
                                    </td>
                                    <td>
                                        {pelicula.genero}                                   
                                    </td>
                                    </tr>
                                ))}
                             
                        </tbody>    
                    </table> 
                    <br/>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center' colSpan={10}> Peliculas Adolescentes</th>
                            </tr>
                            <tr>
                                <th className='text-center'> Nombre </th>
                                <th className='text-center'> Genero </th>
                            </tr>
                        </thead>
                        <tbody> 
                                { peliculasAdolescentes.map( pelicula => (
                                    <tr>
                                    <td>
                                        {pelicula.nombre}                                   
                                    </td>
                                    <td>
                                        {pelicula.genero}                                   
                                    </td>
                                    </tr>
                                ))}
                             
                        </tbody>    
                    </table> 
                            
<br/>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center' colSpan={10}> Peliculas Adultos</th>
                            </tr>
                            <tr>
                                <th className='text-center'> Nombre </th>
                                <th className='text-center'> Genero </th>
                            </tr>
                        </thead>
                        <tbody> 
                                { peliculasAdultos.map( pelicula => (
                                    <tr>
                                    <td>
                                        {pelicula.nombre}                                   
                                    </td>
                                    <td>
                                        {pelicula.genero}                                   
                                    </td>
                                    </tr>
                                ))}
                             
                        </tbody>    
                    </table> 
                    <br/>
                    
                    <h3>OPCION 5 (arreglo de objetos)</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center' colSpan={10}> Peliculas </th>
                            </tr>
                            <tr>
                                <th className='text-center'> Nombre </th>
                                <th className='text-center'> Genero </th>
                            </tr>
                        </thead>
                        <tbody> 
                                { peliculas.map( pelicula => (
                                    <tr>
                                    <td>
                                        {pelicula.nombre}                                   
                                    </td>
                                    <td>
                                        {pelicula.genero}                                   
                                    </td>
                                    </tr>
                                ))}
                             
                        </tbody>    
                    </table> 
                    <br/>
                    <h3>OPCION 4 (sin variables programación funcional)</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center'>Titulo </th>
                                <th className='text-center'>Titulo</th>
                                <th className='text-center'>Titulo</th>
                            </tr>
                        </thead>
                        <tbody>                              
                            <tr> { titulos.map( titulo => ( <td>{ titulo }</td>) ) } </tr>                             
                        </tbody>
                    </table>
                    <br/>
                    <h3>OPCION 3</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center'>Titulo </th>
                                <th className='text-center'>Titulo</th>
                                <th className='text-center'>Titulo</th>
                            </tr>
                        </thead>
                        <tbody>                              
                            <tr> { arreglo2 } </tr>                             
                        </tbody>
                    </table>
                    <br/>
                    <h3>OPCION 2</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center'>Titulo </th>
                                <th className='text-center'>Titulo</th>
                                <th className='text-center'>Titulo</th>
                            </tr>
                        </thead>
                        <tbody>                              
                            <tr> { arreglo2 } </tr>                             
                        </tbody>
                    </table>
                    <br/>
                    <h3>OPCION 1</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center'>Titulo </th>
                                <th className='text-center'>Titulo</th>
                                <th className='text-center'>Titulo</th>
                            </tr>
                        </thead>
                        <tbody>                              
                            <tr> { arreglo } </tr>                             
                        </tbody>
                    </table>
                </div>
                <div class="col-sm-4 "></div>
                
            </div>
        )
    }
}

export default MostrarDatos