import { inject, observer } from 'mobx-react'

import React from 'react'

class DetallePeliculaListado extends React.Component
{
    render()
    {
        /* {siempre almacena los argumentos} */
        const pelicula = this.props.datos
        return(
            
                <tr>
                <td>
                    {pelicula.nombre}                                   
                </td>
                <td>
                    {pelicula.genero}                                   
                </td>
                <td>
                    {pelicula.clasificacion}                                   
                </td>
                </tr>
            
        )
    }
}

export default inject( 'peliculas' )( observer( DetallePeliculaListado ))