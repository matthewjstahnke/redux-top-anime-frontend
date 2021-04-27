import React from 'react'
import { Link } from 'react-router-dom'

const AnimeCard = (props) => {
  const {poster, title, date, id} = props
  return (
    <div className="card">
      <img src={poster} alt={title}/><br/>
      <p><Link to={`/animes/${id}`}>{title}</Link></p> 
      <p>Release Date: {date}</p>
    </div>
  )
}

export default AnimeCard