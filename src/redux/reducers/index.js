// @flow
import { combineReducers } from 'redux'
import pokemonFetchReducer from './pokemonFetchReducer'

const reducers = {
  pokemonFetch: pokemonFetchReducer
}

export type State = typeof reducers

export type Action = {
  +type: string,
  loadMoreUrl: string,
  payload: {
    id: number,
    next: string,
    previous: string,
    results: Array<string>
  }
}

export default combineReducers(reducers)
