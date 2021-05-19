import React, { Component } from 'react'

class About extends Component {
  state = {
    likesCount: 0,
    countVal: 0
  }

  addLike = () =>{
    this.setState({likesCount: this.state.likesCount + 1 })
  }

  subLike = () =>{
    this.setState({likesCount: this.state.likesCount - 1 })
  }

  handleChange = (value) =>{

    this.setState({likesCount: parseInt(value)})
  }


  //name: e.target.name, value: e.target.value

  render() {
    return (
      <div>
        <h5>This About Is wonderfull!</h5>
        <p>this is not so wonderfull</p>
        <button onClick={this.addLike}>Likes {this.state.likesCount}</button>
        <button onClick={this.subLike}>Subtract Like</button>
        <br></br>
        <input type="number"  value={this.state.likesCount} onChange={e => this.handleChange(e.target.value)} />
        
        
      </div>
    )
  }
}

export default About
