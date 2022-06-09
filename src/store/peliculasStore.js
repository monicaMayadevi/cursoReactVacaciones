import { makeAutoObservable } from 'mobx'
import servicioPeliculas from '../services/servicioPeliculas'

export default class PeliculasStore
{   
    constructor()
    {
        makeAutoObservable(this)
    }    
    //cada vez que cambie nombre, REACT lo va a detectar y se va a cambiar 
    nombre = "Pesadilla en la calle del infierno"
    genero = "Terror"

    listado = []
    listadoCargado = false
    errorListado = false

    async cargarListado()
    {
        try
        {
            this.listado = await servicioPeliculas.leerPeliculas()
            this.listadoCargado = true
        }
        catch( error )
        {
            console.error( error )
            this.listadoCargado = false
            this.errorListado = true            
        }
    }

    limpiar()
    {
        this.listado = []
        this.listadoCargado = false
        this.errorListado = false
    }

   cambiarListado( nombre, genero, clasificacion, indice )
   {
            this.listado[indice].nombre = nombre
        	this.listado[indice].genero = genero
        	this.listado[indice].clasificacion = clasificacion
   }

cambiarNombre( nombre )
    {
        this.nombre = nombre
    }

    cambiarGenero( genero )
    {
        this.genero = genero
    }
}
