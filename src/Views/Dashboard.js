import React, { Component } from 'react'
import './Dashboard.css'
import ReactCardFlip from 'react-card-flip';
import img1 from '../img1.jpg'

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
        <div className='front' key="front">
          This is the front of the card.
          <img            
            src="//static.pexels.com/photos/59523/pexels-photo-59523.jpeg"
          />
          <button onClick={this.handleClick}>Click to flip</button>
        </div>

        <div classname='back' key="back">
          This is the back of the card.
          <img            
            src={img1}
          />
          <button onClick={this.handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    )
  }
}

export default Dashboard
