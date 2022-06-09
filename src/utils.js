
//=== verifica sin convertir cadenas a numeros y viceversa, sino se usa ==
//metodo separar
const separar = texto => texto === '' ? [] : texto.split(':')
//metodo esperar
const esperar = milis => 
{
    if( !milis )
    {
        //si no se pasa nada, regresa una promesa fallida
        return Promise.reject( Error("No se pasó una espera adecuada") )
    }
    return new Promise( resolve =>
    {
        setTimeout( resolve, milis )
    })
}
//no es promesa solo es el timeOut
const ejecutarDespues = ( milis, accion ) =>
{
    setTimeout( accion, milis ) 
}

const ejecutarRepetido = ( milis, accion ) =>
{
    setInterval( accion, milis ) 
}

//////////////////////////////////////////////////
const convertirCadenaFecha = texto => 
{
    let fecha = new Date(texto)
    if(fecha == 'Invalid Date')
    {
       return new Date()
    }
    else
        return fecha != 'Invalid Date' ? new Date(texto) : new Date()
}

const convertirFechaCadena = date => 
{ 

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    if (date instanceof Date)
        return `${date.getDate()<10 ? '0'+date.getDate() : date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`
    else
       return "Fecha invalida"    
}

export default { ejecutarDespues, separar, esperar, convertirCadenaFecha, convertirFechaCadena, ejecutarRepetido }