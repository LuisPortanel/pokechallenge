// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Nav from '../components/Nav'
import PokeList from '../components/PokeList'

const Routes = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokelist" exact component={PokeList} />
    </Switch>
  </>
)

export default Routes
