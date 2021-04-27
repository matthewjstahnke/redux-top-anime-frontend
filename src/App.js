
import './App.css';
import AnimeCards from './containers/AnimeCards'
import AnimePage from './components/AnimePage'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAnimes } from './redux/actionCreators'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import FallbackPage from './components/FallbackPage';
import Footer from './components/Footer';

class App extends Component  {

  componentDidMount(){
    this.props.setAnimes()
  }

  render(){
    return (
      <>
        <Nav />
        <h1>Top Anime</h1>
        <Switch>
            <Route path="/animes/:id" component={AnimePage}/>
            <Route path="/animes" component={AnimeCards}/>
            <Route exact path="/" component={Home} />
            <Route component={FallbackPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default connect(null, { setAnimes })(App);