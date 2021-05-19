import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/animes">Anime List</Link></li>
                    <li><a onClick={this.props.logout}>Logout!</a></li>                   
                    {/* <li><Link to="/animes/new">Add Anime</Link></li> */}
                </ul>
            </div>
        )
    }
}

export default connect(null, { logout })(Nav);