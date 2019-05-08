import React, { Component } from 'react'
import './Dashboard.css'
import ReactCardFlip from 'react-card-flip';
import ReactCardFlipper from "react-card-flipper";
import img1 from '../img1.jpg'
import butterfly from '../Images/butterfly.jpg'
import A from '../Components/Avengers.json'
export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false,
      Avengers: '',
      loaded: false
    }
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  componentDidMount(){
    let clone = A.slice(0)
    let newArray = A.concat(clone);
    newArray = this.shuffle(newArray)
    console.log('Avengers: ', newArray)
    //await this.setStateAsync({ipAddress: ip})
    this.setState({Avengers: newArray}, () => {
      this.setState({loaded: true})
    })
  }
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  shuffle = (arr) => {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

  render() {  
    let cardsArray = [];  
    const {Avengers} = this.state

    console.log('avengers array: ', Avengers)
    
    /*return(
      <h1>test</h1>
    )*/
    if(this.state.loaded){
    cardsArray = Avengers.map((avenger, index) => {
      return (
        <div key={index} >
          <ReactCardFlipper
            width="100px"
            height="150px"
            behavior="click"
            levitate={false}
          >
            <div className='card root '>
              <img className='card-image' src={img1} />
            </div>
            <div className='card root'>
              <img className='card-image' src={avenger.url} />
            </div>
          </ReactCardFlipper>
        </div>

      ) 
    });
  }
    
    return (      
      <div className='grid-container'>
        <div className='cards'>
          {cardsArray}        
        </div>
      </div>    
    )
    
  }
}
export default Dashboard
