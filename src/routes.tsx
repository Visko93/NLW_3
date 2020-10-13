import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Mapa from './pages/Mapa'
import Perfil from './pages/Perfil'
import Dados from './pages/Dados'
import NotFound from './pages/NotFound'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/mapa" component={Mapa} />
      <Route path="/perfil" component={Perfil} />
      <Route path="/dados" component={Dados} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
