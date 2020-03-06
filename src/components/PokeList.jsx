// @flow
import React from 'react'
import { API, SAVE_LIST_POKEMON, UPDATE_LOAD_MORE_URL } from '../utils/constants'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

type ListGroupType = {
    pokemonList: any,
    loadMoreUrl: string,
    next: string,
    saveListPokemon: any,
    updateLoadMoreUrl: any,
  }

const PokeList = ({ pokemonList, loadMoreUrl, next, saveListPokemon, updateLoadMoreUrl }: ListGroupType) => {
  if (loadMoreUrl) {
    if (loadMoreUrl === next) {
      axios.get(loadMoreUrl)
        .then(res => {
          saveListPokemon(res.data)
        })
        .catch(err => console.error(err))
    }
  } else {
    updateLoadMoreUrl()
  }

  return (
    <div>
      <div className="row row-cols-3 row-cols-md-5 row-cols-lg-6 mt-5">
        {pokemonList.map(pkmn => <div key={pkmn.name} className="col card">
          <Link to={pkmn.url.replace(API, '')} className="card-body">{pkmn.name}</Link>
        </div>)}
      </div>
      <button type="button" className="btn btn-primary btn-lg btn-block my-5" onClick={updateLoadMoreUrl}>Load more</button>
    </div>)
}
const mapStateToProps = state => ({
  pokemonList: state.pokemonFetch.pokemonList,
  loadMoreUrl: state.pokemonFetch.loadMoreUrl,
  next: state.pokemonFetch.next
})

const mapDispatchToProps = dispatch => ({
  saveListPokemon: payload => dispatch({ type: SAVE_LIST_POKEMON, payload }),
  updateLoadMoreUrl: () => dispatch({ type: UPDATE_LOAD_MORE_URL })
})

export default connect<any, any, any, any, any, any>(mapStateToProps, mapDispatchToProps)(PokeList)
