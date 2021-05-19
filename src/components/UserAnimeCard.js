import React from 'react'
import { Link } from 'react-router-dom'

const UserAnimeCard = (props) => {
  const {poster, title, date, id} = props
  return (
    <div className="userCard">
      <img src={poster} alt={title}/><br/>
      <p><Link to={`/animes/${id}`}>{title}</Link></p> 
    </div>
  )
}

export default UserAnimeCard