import React from 'react'
import { connect } from 'react-redux'
import AnimeCard from '../components/AnimeCard'

const AnimeCards = (props) => {
  console.log(props.animes,"in AnimeCards")
  return(
  <div className="cards">
    {props.animes.map(anime => <AnimeCard key={anime.id} {...anime} />)}
  </div>
  )
}

const msp = (state) => ({
  animes: state.animes.animes
})

export default connect(msp)(AnimeCards)