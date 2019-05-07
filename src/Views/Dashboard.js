import React, { Component } from 'react'
import './Dashboard.css'
import ReactCardFlip from 'react-card-flip';
import img1 from '../img1.jpg'
import butterfly from '../butterfly.jpg'

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false
    }
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (      
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
       
        <div className='example-section front' key="front">
          <img onClick={this.handleClick} src={butterfly} />
        </div>
       

        <div className='example-section back' key="back">
          <img onClick={this.handleClick} src={butterfly}/>
        </div>
      </ReactCardFlip>
    )
  }
}

export default Dashboard
