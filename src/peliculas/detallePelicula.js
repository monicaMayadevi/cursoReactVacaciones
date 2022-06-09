import React from 'react'

class DetallePelicula extends React.Component
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
                </tr>
            
        )
    }
}

export default DetallePelicula