import { expect } from "chai"
import sinon from "sinon"
import PeliculasStore from '../../src/store/peliculasStore'
import servicioPeliculas from "../../src/services/servicioPeliculas"

const sandbox = sinon.createSandbox()

const listadoPrueba = [ 'Dumbo', 'Pesadilla en la calle del infierno' ]

describe( 'Peliculas store', () => 
{
    beforeEach( () =>
    {
        sandbox.stub( console, 'error' )
    })
    afterEach( () => sandbox.restore() )

    describe( 'cargarListado', () => 
    {
        it( 'debe cargar listado de peliculas', async () => 
        {
            //objeto falso, cambia la llamda real por una ficticia
            //En este caso el metodo de leerPerliculas del stoes y el 
            //Resolve nos dice por qué sustituirlo
            sandbox.stub( servicioPeliculas, 'leerPeliculas' ).resolves( listadoPrueba )
            const store = new PeliculasStore()
            await store.cargarListado()

            expect( store.listadoCargado ).to.be.true
            expect( store.errorListado ).to.be.false
            expect( store.listado ).to.deep.equal( listadoPrueba )

            sinon.assert.calledOnce(servicioPeliculas.leerPeliculas)
        })

        it( 'debe indicar que hubo un error al cargar listado de peliculas', async () => 
        {
            //cuando se mande llamar leerPeliculas se lanzará el error
            sandbox.stub( servicioPeliculas, 'leerPeliculas' ).rejects( Error('BUM') )
            const store = new PeliculasStore()
            await store.cargarListado()

            expect( store.listadoCargado ).to.be.false
            expect( store.errorListado ).to.be.true
            expect( store.listado ).to.deep.equal( [] )

            sinon.assert.calledOnce(servicioPeliculas.leerPeliculas)
        })
    } )

    describe( 'limpiar', () => 
    {
        it( 'debe limpiar el listado de peliculas', async () => 
        {
            //objeto falso, cambia la llamda real por una ficticia
            //En este caso el metodo de leerPerliculas del stoes y el 
            //Resolve nos dice por qué sustituirlo
            sandbox.stub( servicioPeliculas, 'leerPeliculas' ).resolves( listadoPrueba )
            const store = new PeliculasStore()
            await store.cargarListado()

            expect( store.listadoCargado ).to.be.true

            store.limpiar()

            expect( store.listadoCargado ).to.be.false
            expect( store.errorListado ).to.be.false
            expect( store.listado ).to.deep.equal( [] )

            sinon.assert.calledOnce(servicioPeliculas.leerPeliculas)
        })
    })
})