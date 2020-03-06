// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Nav from '../components/Nav'
import PokeList from '../components/PokeList'
import Pokemon from '../components/Pokemon'

const Routes = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokelist" exact component={PokeList} />
      <Route path="/pokemon/:pokemonNumber" exact component={Pokemon} />
    </Switch>
  </>
)

export default Routes
