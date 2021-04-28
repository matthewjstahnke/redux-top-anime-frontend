import React from 'react'

const ReviewCard = (props) => {
  const {username, content, rating} = props
  return (
    <div className="review">
      <b>{username}: {rating} stars</b>
      <p>{content}</p>
    </div>
  )
}

export default ReviewCard
