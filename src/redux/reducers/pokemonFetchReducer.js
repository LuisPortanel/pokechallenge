// @flow
import { type Action } from '.'
import {
  API,
  SAVE_LIST_POKEMON,
  UPDATE_LOAD_MORE_URL,
  SAVE_SINGLE_POKEMON
} from '../../utils/constants'

const initialState = {
  next: `${API}pokemon?offset=0&limit=30`,
  loadMoreUrl: '',
  pokemonList: [],
  pokemon: {}
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

    case SAVE_SINGLE_POKEMON:
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          [action.payload.id]: action.payload
        }

      }

    default:
      return state
  }
}

export default pokemonFetchReducer
