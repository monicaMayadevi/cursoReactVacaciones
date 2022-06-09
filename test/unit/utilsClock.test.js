//jest se importa automaticamente
import { expect } from 'chai'
import sinon from 'sinon'
//clase que se va a probar
import utils from '../../src/utils'

//todos los cambios se ejecutan aqui y no se propagan afuera
const sandbox = sinon.createSandbox()

//bloque que agrupa la prueba, se indica el nombre y lo que va a regrasar o hacer
describe( 'ejecutarDespues', () =>
{
    let clock = null
    beforeEach( () => 
    {
         clock = sandbox.useFakeTimers()
    })
    afterEach( () => 
    {
        clock.restore()
        sandbox.restore()
    })
    it('debe ejecutar despues', () => 
    {
        let variable = 0
        utils.ejecutarDespues( 500, () => { variable++ })
        //eo reloj se adelanta 100 ms y el timer se va a disparar
        //asi no hacemos esperar las pruebas
        clock.tick(500)
        //ya puedo hacer la verificacion
        expect( variable ).equal( 1 )
    })
    describe('ejecutar repetido', () => 
    {
        it('debe ejecutar repetidamente', () => 
        {
            let variable = 0
            utils.ejecutarRepetido( 500, () => { variable++ })
            //eo reloj se adelanta 500 ms y el timer se va a disparar
            //asi no hacemos esperar las pruebas
            clock.tick(500)
            //ya puedo hacer la verificacion
            expect( variable ).equal( 1 )
            clock.tick(500)
            //ya puedo hacer la verificacion
            expect( variable ).equal( 2 )
            
        })
    })   
})

