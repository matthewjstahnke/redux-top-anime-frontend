import React from 'react'
import { Link } from 'react-router-dom'

const ReviewCard = (props) => {
  //console.log(props, "ReviewCard Props")
  const {username, content, rating, userId } = props
  return (
    <div className="review">
      <b><Link to={`/users/${userId}`}>{username}</Link>: {rating} stars</b>
      <p>{content}</p>
    </div>
  )
}

export default ReviewCard
