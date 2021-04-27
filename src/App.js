
import './App.css';
import AnimeCards from './containers/AnimeCards'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAnimes } from './redux/actionCreators'

class App extends Component  {

  componentDidMount(){
    this.props.setAnimes()
  }

  render(){
    return (
      <>
        <h1>Top Anime</h1>
        <AnimeCards/>
      </>
    );
  }
}

export default connect(null, { setAnimes })(App);