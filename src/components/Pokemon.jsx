// @flow
import React from 'react'
import { type Match } from 'react-router-dom'

type PokemonType = {
    match: Match
}
const Pokemon = ({ match }: PokemonType) => {
  const pokemonNumber = String(match.params.pokemonNumber)

  return (
    <div>
      <h1># {pokemonNumber}</h1>
    </div>
  )
}

export default Pokemon
