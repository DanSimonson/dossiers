import React, { Component } from 'react'
import './Dashboard.css'
import ReactCardFlip from 'react-card-flip';
import ReactCardFlipper from "react-card-flipper";
import img1 from '../img1.jpg'
import butterfly from '../Images/butterfly.jpg'
import Avengers from '../Components/Avengers.json'
export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false
    }
  }
  handleClick =(e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  /*CardList = () => {
    const cardsArray = Avengers.map(avenger => (
      <div>        
        <ReactCardFlipper 
        width="300px" 
        height="550px" 
        behavior="click" 
        levitate={true}
        >
        <div className='card root'>
        <img className='card-image' src={img1}/>
        </div>
        <div className='card root'>
        <img className='card-image' src={avenger.url}/>
        </div>
        </ReactCardFlipper>
      </div>
    ));*/
 
  render() {
    const cardsArray = Avengers.map(avenger => {
      return( 
      <div className='cards' key={avenger.id}>        
        <ReactCardFlipper 
        width="300px" 
        height="550px" 
        behavior="click" 
        levitate={true}
        >
        <div className='card root'>
        <img className='card-image' src={img1}/>
        </div>
        <div className='card root'>
        <img className='card-image' src={avenger.url}/>
        </div>
        </ReactCardFlipper>
      </div>
      )
    });
    return ( 
      <div>
        {cardsArray}
      </div>    
    )    
  }
}
export default Dashboard
