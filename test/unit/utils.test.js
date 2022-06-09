//jest se importa automaticamente
import { expect } from 'chai'
//clase que se va a probar
import utils from '../../src/utils'

//bloque que agrupa la prueba, se indica el nombre y lo que va a regrasar o hacer
describe( 'utils', () =>
{
    describe( 'separar', () =>
    {
        //caso especial
        it( 'debe separar una cadena vacía como un arreglo vacío', () =>
        {
            const resultado = utils.separar( '')
            //verifica que exista el resultado que no sea nulo o indefinido
            expect( resultado ).to.deep.equal([])
        })

        //probar que la prueba falle
        it( 'debe fallar si recibe una cadena nula', () =>
        {
            //se debe atrapar el error
            try
            {
                utils.separar( null )
                expect.fail()
            }
            catch( error ) {}
        })
    })    

    describe( 'esperar', () =>
    {
        it('debe continuar después de 1 segundo', async () => 
        {
            //con return chai se da cuenta que es una promesa y debe esperar el tiempo 
            //que se esta esperando antes de que la promesa termine y asi se verifica que
            //la promesa se cumple y ejecuta en el tiempo correcto.
            await utils.esperar(1000)
        })
        
        it('debe fallar si pasamos intervalo 0', () => 
        {
            return utils.esperar(0)
            .then( () =>
            {
                expect.fail()
            })
            .catch( error =>
            {
                expect( error ).to.be.ok
                expect( error.message ).to.be.ok
                expect( error.message ).to.equal( 'No se pasó una espera adecuada' )
            })
        })

        it('debe fallar si pasamos intervalo 0 con async', async () => 
        {
            try 
            { 
                await utils.esperar(0)
                expect.fail()
            }
            catch( error )
            {
                expect( error ).to.be.ok
                expect( error.message ).to.be.ok
                expect( error.message ).to.equal( 'No se pasó una espera adecuada' )
            }
        })
    })
})


    describe( 'ejecutarDespues', () => 
    {
        //no es promesa solo es el timeOut
        // se debe poner done
        //it( 'debe de ejecutar despues', () =>
        it( 'debe de ejecutar despues', done => 
        {
            let variable = 0
            utils.ejecutarDespues( 100, () => 
            {
                variable++
            })
            // no se puede verificar que se ejecuto porque si se pone la verificacion, la prueba
            //va a terminar primero y no se va a ejecutar, va a fallar
            //lo pueden probar, no se puede probar a menos de que se use una promesa con
            //una variable auxiliar done

            //poner un tiempo mayor para asegurar que primero se ejecute el de arriba
            const verificacion = () =>
            {
                expect( variable ).equal( 1 )
                done()
            }
            setTimeout( verificacion, 110 )
            
        })
    })

    //////////////////////////////////////////////////////////////////////
describe('pruebas de utilerias de fechas',()=>
{
    describe('convertir una cadena a fecha',()=>
    {
        it('Envia fecha actual si la cadena esta vacía', ()=>
        {
            const fecha = utils.convertirCadenaFecha ('') 
            expect(fecha).is.ok
            expect(fecha).to.be.an.instanceof(Date)
            
        })    
        it('Envia la fecha con el formato de la cadena', ()=>
        {
        const fechaF1 = utils.convertirCadenaFecha ('2021/10/12') 
        expect(fechaF1).is.ok
        expect(fechaF1).to.be.an.instanceof(Date) 
        expect (fechaF1.getMonth()).to.equal(9)
        expect (fechaF1.getDate()).to.equal(12)
        expect (fechaF1.getFullYear()).to.equal(2021)
        })
        it('Envia fecha actual si el formato recibido es incorrecto', ()=>
        {
        const fechaF2 = utils.convertirCadenaFecha ('440/132') 
        
        expect(fechaF2).is.ok
        expect(fechaF2).to.be.an.instanceof(Date) 
        })
        it('Envia la fecha actual si recibe un null', ()=>
        {
            const fechaNull =utils.convertirCadenaFecha(null)
            expect(fechaNull).is.ok
            expect(fechaNull).to.be.an.instanceof(Date) 
        })
        it('Regresa la fecha actual si recibe caracteres sin sentido', ()=>
        {
            const fechaActual = utils.convertirCadenaFecha ('blabla') 
            expect(fechaActual).is.ok
            expect(fechaActual).to.be.an.instanceof(Date) 
        })
        it('Regresa la fecha actual si recibe indefinido', ()=>
        {         
            const fechaIndefinida = utils.convertirCadenaFecha (undefined) 
            expect(fechaIndefinida).is.ok
            expect(fechaIndefinida).to.be.an.instanceof(Date)
        })
    })

    describe('convertir una fecha a cadena',()=>
    {
        it('Convierte un Objeto Date en cadena con formato (dd/mes con letra/yyyy)', ()=>
        {
            const cadena = utils.convertirFechaCadena (new Date('2020/02/01'))   
            expect(cadena).is.ok
            expect(cadena).to.be.an ('string')                  
            const datosCadena = cadena.split('/')
            expect (datosCadena).is.ok
            expect (datosCadena).to.be.an ('array')
            expect (datosCadena.length).to.equal(3)
            expect (datosCadena[0]).to.equal('01')
            expect (datosCadena[1]).to.equal('Febrero')
            expect (datosCadena[2]).to.equal('2020')
            expect (datosCadena).to.deep.equal(['01', 'Febrero','2020'])
           
        })
    })

})

