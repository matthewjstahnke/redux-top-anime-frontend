import React from 'react'

const AnimeCard = (props) => {
  const {poster, title, date} = props
  return (
    <div className="card">
      <img src={poster} alt={title}/><br/>
      <p>{title}</p> 
      <p>Release Date: {date}</p>
    </div>
  )
}

export default AnimeCard