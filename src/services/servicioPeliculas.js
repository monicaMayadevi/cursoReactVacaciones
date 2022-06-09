const SERVIDOR = 'https://monicamayadevi.github.io'

const leerPeliculas = async () =>
{
    const url = `${ SERVIDOR }/peliculas2.json`
    //fetch va a regresar una promesa con el json solicitado por red
    const response = await fetch(url)

    if( response.ok )
    {
        return response.json()
    }
    else
    {
        throw Error( 'Error al leer las peliculas' )
    }
    
}

export default { leerPeliculas }