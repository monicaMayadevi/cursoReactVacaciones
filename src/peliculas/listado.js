import { inject, observer } from 'mobx-react'
import React from 'react'
import DetallePeliculaListado from './detallePeliculaListado'

class ListadoPeliculas extends React.Component
{
    constructor(props)
    {
        super(props)
        const { peliculas } = props
        if( ! peliculas.listadoCargado )
          peliculas.cargarListado()
    }
    renombrarPelicula()
    {
        this.props.peliculas.cambiarNombre("Bambi")
        this.props.peliculas.cambiarGenero("Infantil")
    }
    renombrarPeliculaListado(nombre,genero,clasificacion,indice)
    {
        this.props.peliculas.cambiarListado(nombre,genero,clasificacion,indice)
    }
    render()
    {
        //peliculas la recibe como parámetro el componente.
        /* {no usar button submit porque recarga la página}*/
        const { peliculas } = this.props
        const clasificar=this.props.match.params.clasificacion
        const peliculasFiltradas = peliculas.listado.filter( pelicula => pelicula.clasificacion == clasificar )
//otro ejemplo de filtrado
        const peliculasAyA = peliculas.listado.filter( pelicula => pelicula.clasificacion != 'A' ) 

        return(
            
            <div className='text-center'>
                 <hr />
               {
                    peliculas.errorListado && 
                    (
                        <div class="alert alert-danger"
                          onClick={ () => peliculas.errorListado = false }>
                            Hubo un error al solicitar las peliculas<br />
                            Mientasela a tu administrador
                        </div>
                    )
                }
                <h2>Listado de peliculas</h2>    
                { peliculas.nombre }  
                <br />
                { peliculas.genero }    
                <br />
                
                <button type="button" onClick={ () => this.renombrarPelicula() }
                >Cambiar Pelicula</button>  
               
                <hr />
                <div>		
                Películas  {clasificar=="A"?"Infantil":(clasificar=="B"?"Adolescentes":"Adultos")}		 
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='text-center' colSpan={10}> Peliculas </th>
                            </tr>
                            <tr>
                                <th className='text-center'> Nombre </th>
                                <th className='text-center'> Genero </th>
                                <th className='text-center'> Clasificacion </th>
                            </tr>
                        </thead>
                        <tbody> 
                            { peliculasFiltradas.map(pelicula => (
		                        <DetallePeliculaListado datos={ pelicula }/>
		                    ))}
                         </tbody>    
                    </table> 
                 </div>
       
            </div>
        )
    }
}
//si hubieran mas se separarian por comas
//va a observar al componente ListadoPeliculas y le inyecta el listado de peliculas
export default inject( 'peliculas' )( observer( ListadoPeliculas ))
