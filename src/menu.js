import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component
{
    render()
    {
        return(
            <div className='text-center'>
                <Link to="/"> Home </Link>  | 
                <Link to="/peliculas/A"> Peliculas Infantiles</Link>  |
                <Link to="/peliculas/B"> Peliculas Adolescentes</Link>  |
                <Link to="/peliculas/C"> Peliculas Adultos</Link>  | 
                <Link to="/mostrarDatos"> Mostrar Variables </Link>                      
            </div>
        )
    }
}

export default Menu