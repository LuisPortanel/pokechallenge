// @flow
import React from 'react'
import './assets/App.css'
import { Provider } from 'react-redux'

import { type Store as ReduxStore, type StoreEnhancer } from 'redux'
import { type State, type Action } from './redux/reducers'

type Store = ReduxStore<State, StoreEnhancer<State, Action>>

const App = ({ store }: Store) => (

  <Provider store={store}>
    <div className="App">
      <h1>Pokemon Challenge</h1>
    </div>
  </Provider>
)

export default App
