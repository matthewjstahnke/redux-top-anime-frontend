import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedAnime, unsetAnime } from '../redux/actionCreators'

class AnimePage extends Component {

  componentDidMount(){
    // get the id from the route (i.e. grab 1 from "/Animes/1")
    // we give this.props.match.params a key of id when we define "/Animes/:id" in our Route path in App.js
    const id = this.props.match.params.id
    this.props.setSelectedAnime(id)
  }

  componentWillUnmount(){
    this.props.unsetAnime()
  }

  renderPage = () => {
    const { url, title, poster, date, episodes, history, synopsis, id } = this.props
    return (
      <>
        <h1><a href={ url }>{ title }</a></h1>
        <button onClick={ history.goBack }>Go back!</button>
        <p><img src={ poster } alt={ title }/></p>
        <p>Release Date: { date }</p>
        <p>Number of Episodes: { episodes }</p>
        <p>Synopsis:</p>
        <p>{ synopsis }</p>
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
  ...state.animes.selectedAnime
})

export default connect( mapStateToProps, { setSelectedAnime, unsetAnime } )(AnimePage)