
import './App.css';
import AnimeCards from './containers/AnimeCards'
import AnimePage from './components/AnimePage'
import UserPage from './components/UserPage'
import About from './components/About'
import Login from './components/Login'
import Nav from './components/Nav';
import Home from './components/Home';
import FallbackPage from './components/FallbackPage';
import Footer from './components/Footer';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAnimes, setUsers, logout, autoLogin } from './redux/actionCreators'
import { Switch, Route } from 'react-router-dom'

class App extends Component  {

  componentDidMount(){
    localStorage.token && this.props.autoLogin()
    this.props.setAnimes()
    this.props.setUsers()
  }

  render(){
    return (
      <>
        <Nav />
        <h1>Top Anime</h1>
        {this.props.user.id
        ?
          <>
          <button onClick={this.props.logout}>Logout!</button>
          <Switch>
            <Route path="/animes/:id" component={AnimePage}/>
            <Route path="/users/:id" component={UserPage}/>
            <Route path="/animes" component={AnimeCards}/>
            <Route path="/about" component={About}/>
            <Route exact path="/" component={Home} />
            <Route component={FallbackPage} />

          </Switch>
          <Footer />
          </>
        :
          <Login/>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, { setAnimes, setUsers, logout, autoLogin })(App);