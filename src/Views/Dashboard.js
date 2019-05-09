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
      //name: [],
      //target: []
    }
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
    let i;
    for(i=0; i<= this.state.Avengers.length -1;i++){
      if(this.state.Avengers[i].id === parseInt(evt.target.id)){
        console.log('found name: ', this.state.Avengers[i].name)
        console.log('found id: ', this.state.Avengers[i].id)
        myId = this.state.Avengers[i].id
        this.setState(prevState => ({
          id: [...prevState.id, myId ],
          count: prevState.count + 1 
        }), () => {
          if(this.state.id.length >1){
            console.log('id array to compare: ', this.state.id[0])
            console.log('id array to compare: ', this.state.id[1])
            if(this.state.id[0] === this.state.id[1]){
              console.log('match found')
            }else{
              console.log ('no match found')
            }


          }
          
        })
      }   
   }
  
  
 }

  remoteFrontClick = () => {
    console.log('check count in remote click: ', this.state.count)
    console.log('id array in remote click: ', this.state.id)
    /*if(this.state.count > 2){
      return;
    }else{ 
      document.getElementById(this.state.target[0]).click();
      document.getElementById(this.state.target[1]).click();
      this.setState({
        count: 0,
      }, () => {
        this.setState({
         
         })
      })

    }
   

    /*document.getElementById(this.state.target[0]).click();
    document.getElementById(this.state.target[1]).click();
    this.setState({
      count: 0,
    }, () => {
      this.setState({
        target: [],
        tempArray: []
       })
    })*/
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
