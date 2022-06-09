import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Footer from './footer'
import Encabezado from './encabezado'
import Menu from './menu'

import Home from './home'
import ListadoPeliculas from './peliculas/listado'
import MostrarDatos from './peliculas/mostrarDatos'
import PeliculasStore from './store/peliculasStore'


const peliculas = new PeliculasStore()

ReactDOM.render
(
  //Se pasan las peliculas como argumento.
  <Provider peliculas={ peliculas }>
    <HashRouter>
      <div className='container-fluid text-center'>
        <Encabezado />
        <Menu />
        <Switch>
          <div className='text-center'>             
              <Route exact path="/" component={ Home }/>
              <Route exact path="/peliculas/:clasificacion" component={ ListadoPeliculas }/>
              <Route exact path="/mostrarDatos" component={ MostrarDatos }/>
          </div>
        </Switch>        
        <Footer />
      </div>
    </HashRouter> 
  </Provider>  
  ,
  document.getElementById('base')
)
