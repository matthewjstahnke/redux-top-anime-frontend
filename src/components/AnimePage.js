import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import { setSelectedAnime, unsetAnime } from '../redux/actionCreators'

class AnimePage extends Component {

  componentDidMount(){
    // get the id from the route (i.e. grab 1 from "/Animes/1")
    // we give this.props.match.params a key of id when we define "/Animes/:id" in our Route path in App.js
    const id = this.props.match.params.id
    this.props.setSelectedAnime(id)
    //console.log(this.props.id, "props on load")
  }

  componentWillUnmount(){
    this.props.unsetAnime()
  }

  renderPage = () => {
    //console.log(this.props.id, "props.id on pagerender")
    //console.log(this.props, "props on pagerender")
    const { title, poster, date, episodes, history, synopsis, id, reviews } = this.props
    return (
      <>
        <h3>{ title }</h3>
        <div className="poster">
          <p><img src={ poster } alt={ title }/></p>
        </div>
        <p>Release Date: { date }</p>
        <p>Number of Episodes: { episodes }</p>
        <p>Synopsis:</p>
        <p>{ synopsis }</p>
        <div className="reviews">
          <p>____________________________________________________________________</p>
          {this.props.user.id && <ReviewForm anime_id={id}/>}
          <p>____________________________________________________________________</p>
          {reviews.map(review => <ReviewCard key={review.id}  {...review}/>)}
        </div>
        <button onClick={ history.goBack }>Go back!</button>
      </>
    )
  }

  renderSpinner = () => <div classtitle="loader"></div>

  render(){
    return(
      <div classtitle="show">
        {this.props.id ? this.renderPage() : this.renderSpinner()}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  ...state.animes.selectedAnime,
  user: state.user
})

export default connect( mapStateToProps, { setSelectedAnime, unsetAnime } )(AnimePage)