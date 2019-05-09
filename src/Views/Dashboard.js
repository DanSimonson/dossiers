import React, { Component } from 'react'
import './Dashboard.css'
import ReactCardFlip from 'react-card-flip';
import ReactCardFlipper from "react-card-flipper";
import img1 from '../img1.jpg'
import butterfly from '../Images/butterfly.jpg'
import A from '../Components/Avengers.json'
import { thisTypeAnnotation } from '@babel/types';
export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false,
      Avengers: [],
      loaded: false,
      count: 0,
      id: [],
      index: []
      //name: [],
      //target: []
    }
    this.timer = null
    //this.timer = setTimeout(() => this.resetCards(currentTiles, currentScore), 3000);
  }

  componentDidMount() {
    let randomArray = this.shuffle(A)
    this.setState({ Avengers: randomArray }, () => {
      this.setState({ loaded: true })
    })
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
  incrementCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 },
      () => {
        console.log('count: ', this.state.count)
      }));
  }

  handleFrontClick = (evt) => {
    let myId;
    let myIndex;
    let i;
    for (i = 0; i <= this.state.Avengers.length - 1; i++) {
      if (this.state.Avengers[i].id === parseInt(evt.target.id)) {
        //console.log('found name: ', this.state.Avengers[i].name)
        //console.log('found id: ', this.state.Avengers[i].id)
        myId = this.state.Avengers[i].id
        myIndex = i
      }
    }//end for loop
    this.setState(prevState => ({
      id: [...prevState.id, myId],
      index: [...prevState.index, myIndex],
      count: prevState.count + 1
    }), () => {
      //console.log('callback click count: ', this.state.count)
      //console.log('callback click id array: ', this.state.id)
      /*if(this.state.count=== 2){
        document.getElementById(this.state.id[0]).click();
        document.getElementById(this.state.id[1]).click();
        this.setState({
          id: [],
          count: 0
        })

      }else if(this.state.count > 2){
       this.setState({
          id: [],
          count: 0
        })

      }*/
      //let myVar = setTimeout(this.remoteFrontClick, 3000)


    })
    let myVar = setTimeout(() => this.remoteFrontClick(), 3000)
  }


  remoteFrontClick = () => {
    let firstIndex = this.state.index[0]
    let secondIndex = this.state.index[1]

    if (this.state.count === 2) {
      console.log('index: ', this.state.index)
      if (this.state.Avengers[firstIndex].name === this.state.Avengers[secondIndex].name) {
        console.log('match found')
        this.setState({
          id: [],
          index: [],
          count: 0
        })
      } else {
        document.getElementById(this.state.id[0]).click();
        document.getElementById(this.state.id[1]).click();
        this.setState({
          id: [],
          index: [],
          count: 0
        })
      }
    } else {
      //console.log('here')
    }
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
                {/**id={avenger.id} */}
                <img id={avenger.id} onClick={(evt) => this.handleFrontClick(evt)} className='card-image' src={img1} />
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
