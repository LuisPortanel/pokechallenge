// @flow
import React from 'react'
import { type Match } from 'react-router-dom'
import { connect } from 'react-redux'
import { API, SAVE_SINGLE_POKEMON } from '../utils/constants'
import axios from 'axios'

type PokemonType = {
    match: Match,
    pokemon: any,
    saveSinglePokemon: any
  }

const Pokemon = ({ match, pokemon, saveSinglePokemon }: PokemonType) => {
  const pokemonNumber = String(match.params.pokemonNumber)
  let pkmn = ''

  if (!(pokemonNumber in pokemon)) {
    axios.get(`${API}pokemon/${pokemonNumber}`)
      .then(res => {
        saveSinglePokemon(res.data)
      })
      .catch(err => console.error(err))
  } else {
    pkmn = pokemon[pokemonNumber]
  }

  return (
    <div>{pkmn && (
      <div>
        <h1>{pkmn.name}</h1>
        <h4># {pkmn.id}</h4>
      </div>
    )
    }</div>
  )
}
const mapStateToProps = state => ({
  pokemon: state.pokemonFetch.pokemon
})

const mapDispatchToProps = dispatch => ({
  saveSinglePokemon: payload => dispatch({ type: SAVE_SINGLE_POKEMON, payload })
})
export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)
