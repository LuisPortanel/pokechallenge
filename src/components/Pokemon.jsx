// @flow
import React from 'react'
import { type Match, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { API, SAVE_SINGLE_POKEMON } from '../utils/constants'
import axios from 'axios'
import { useSpring, animated } from 'react-spring'

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
  const fade = useSpring({
    from: { opacity: 0, transform: 'scale(0.01) rotate(0deg)' },
    to: { opacity: 1, transform: 'scale(1) rotate(360deg)' },
    config: { duration: 1000 }

  })

  return (
    <div>
      <Link to="/pokelist" className="btn btn-lg btn-primary my-5">← Go back</Link>
      {pkmn && (
        <div>
          <animated.img style={fade} src={pkmn.sprites.front_default} />

          <h1>
            {pkmn.name}
          </h1>

          <h2>
            {pkmn.types[0].type.name}{pkmn.types[1] && ` / ${pkmn.types[1].type.name}`}
          </h2>

          <h4>
            # {pkmn.id}
          </h4>

          <div>Abilities: <ul>{
            pkmn.abilities.map(ability =>
              <li key={ability.ability.name}>
                {ability.ability.name}
              </li>)
          }</ul></div>

          <div>
            <h4>Base stats</h4>
            {
              pkmn.stats.map(stat => <p key={stat.stat.name}>{`${stat.stat.name}: ${stat.base_stat}`}</p>)
            }
          </div>

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
