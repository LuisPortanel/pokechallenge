// @flow
import { combineReducers } from 'redux'
import dummyReducer from './dummyReducer'

const reducers = {
  dummy: dummyReducer
}

export type State = typeof reducers

export type Action = {
  +type: string
}

export default combineReducers(reducers)
