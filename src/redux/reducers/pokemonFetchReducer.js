// @flow
import { type Action } from '.'
import {
  API,
  SAVE_LIST_POKEMON,
  UPDATE_LOAD_MORE_URL
} from '../../utils/constants'

const initialState = {
  next: `${API}pokemon?offset=0&limit=10`,
  loadMoreUrl: '',
  pokemonList: []
}

type PokemonFetchReducer = typeof initialState

const pokemonFetchReducer = (state: PokemonFetchReducer = initialState, action: Action): PokemonFetchReducer => {
  switch (action.type) {
    case UPDATE_LOAD_MORE_URL:
      return {
        ...state,
        loadMoreUrl: state.next
      }

    case SAVE_LIST_POKEMON:
      return {
        ...state,
        next: action.payload.next,
        pokemonList: [
          ...state.pokemonList,
          ...action.payload.results
        ]
      }

    default:
      return state
  }
}

export default pokemonFetchReducer
