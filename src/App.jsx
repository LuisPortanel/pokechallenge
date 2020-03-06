import React from 'react'
import './assets/App.css'
import { Provider } from 'react-redux'

const App = ({ store }) => (

  <Provider store={store}>
    <div className="App">
      <h1>Pokemon Challenge</h1>
    </div>
  </Provider>
)

export default App
