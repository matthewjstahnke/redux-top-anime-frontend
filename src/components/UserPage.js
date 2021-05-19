import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserAnimeCard from '../components/UserAnimeCard'
import { onlyUnique } from '../redux/actionCreators'
// import ReviewCard from '../components/ReviewCard'
// import ReviewForm from '../components/ReviewForm'


class UserPage extends Component {

  componentDidMount(){
    // console.log(this.props, "Props")
    // console.log(paramsId, "ID from params")
    // console.log(userIndex, "Index number")
    // console.log(this.props.users.users[userIndex], "Loaded Users")   
  }

  // componentWillUnmount(){
  //   this.props.unsetUser()
  // }



  render(){


    console.log(this.props, "Props in render")
    const paramsId = this.props.match.params.id
    const userIndex = paramsId - 1
    const pageUser = this.props.users.users[userIndex]
    // const userReviews = pageUser.reviews
    const userAnime = pageUser.anime
    //console.log(pageUser, "On render")
    //console.log(userReviews, "On render")
    //console.log(pageUser.reviews)
    const { username, id } = pageUser
    const { history } = this.props
    // const [anime1, anime2, ...others  ] = userAnime
    // console.log(anime1.title)
    // console.log(this.state)
    console.log(this.props.users.users.length , "TESTING")
   //const uniqueAnime = userAnime.filter(onlyUnique)
   const uniqueAnime = [];
   const map = new Map();
   for (const item of userAnime) {
     if(!map.has(item.id)){
       map.set(item.id, true);    // set any value to Map
           uniqueAnime.push({
             title: item.title,
             poster: item.poster,
             id: item.id
            });
          }
        }
        // if (this.props.users.users.length = 0) {
        //   console.log(pageUser, "Load State")
        //   return <span>Loading...</span>
        // }
        
        //console.log(uniqueAnime, "Filtered Anime")
        return(
      <>
        <h3>{username}'s Page</h3>
        <p>Id number {id} </p>

        <h3>{username}'s Reviewed Anime</h3>
        <div className="cards">
          {uniqueAnime.map(anime => <UserAnimeCard key={anime.id}  {...anime}/>)}
        </div>
        <button onClick={ history.goBack }>Go back!</button>
      </>
    )
  }

}

const mapStateToProps = (state) => ({
  users: state.users,
  animes: state.animes
})

export default connect (mapStateToProps) (UserPage)