import React from 'react'

const AnimeCard = (props) => {
  const {poster, title} = props
  return (
    <div className="card">
      <img src={poster} alt={title}/><br/>
      <p>{title}</p>
    </div>
  )
}

export default AnimeCard