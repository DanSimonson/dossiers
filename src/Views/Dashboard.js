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
      Avengers: [],
      tempArray: [],
      loaded: false,
      count: 0,
      id: [],
      name: []
    }
  }

  componentDidMount() {
    //let i;
    /*for(i=0;i< A;i++){
    }
    let clone = A.slice(0)
    let newArray = A.concat(clone);*/
    let randomArray = this.shuffle(A)
    //console.log('Avengers: ', newArray)
    //await this.setStateAsync({ipAddress: ip})
    this.setState({ Avengers: randomArray }, () => {
      this.setState({ loaded: true })
      //console.log('avengers: ', this.state.Avengers)
    })
  }
  /*setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }*/

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

  handleFrontClick = (evt, avenger) => {
    console.log('avenger: ', avenger)
    console.log('avenger name: ', avenger.name)
    console.log('A: ', A)
    let i;

    //this.setState({ myArray: [...this.state.myArray, 'new value'] }
    //if count less than one, first element, just store it to compare later
    if (this.state.count < 1) {
      
      this.setState({
        count: this.state.count + 1,
        tempArray: [avenger]
      }, () => {
        console.log('count less than 1 state temp: ', this.state.tempArray)
        
      })
    /** if count equal one array has two items, compare them. if match,
     * highlight cards and disable clicking them. if no match found,
     * call remoteFrontClick with tempArray and close both cards
     */
    } else if (this.state.count === 1) {
     
      this.setState((prevState) => ({
        count: prevState.count + 1,
        tempArray: prevState.tempArray.concat(avenger)
      }), () => {
        console.log('count equal 1 state temp: ', this.state.tempArray)
        if(this.state.tempArray[0].name === this.state.tempArray[1].name){
          console.log('match')
        }else{
          this.remoteFrontClick(this.state.tempArray)
        }

      })
    }
  }

  remoteFrontClick = (arr) => {
    console.log('id array: ', arr)
    //console.log('id array first: ', arr[0])

    document.getElementById(arr[0].id).click();
    document.getElementById(arr[1].id).click();
  }
  render() {
    let cardsArray = [];
    const { Avengers } = this.state

    //console.log('avengers array: ', Avengers)

    if (this.state.loaded) {
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
                <img id={avenger.id} onClick={(evt) => this.handleFrontClick(evt, avenger)} className='card-image' src={img1} />
              </div>
              <div id="myBackFlip" className='card root'>
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
