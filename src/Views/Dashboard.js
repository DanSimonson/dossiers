import React, { Component } from 'react'
import './Dashboard.css'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import ReactCardFlip from 'react-card-flip';
import ReactCardFlipper from "react-card-flipper";
import img1 from '../img1.jpg'
import butterfly from '../Images/butterfly.jpg'
import A from '../Components/Avengers.json'
import Modal from '../Components/Modal/Modal';
import Backdrop from '../Components/Backdrop/Backdrop';
import Flip from 'react-reveal/Flip';
import { AnimateOnChange, HideUntilLoaded   } from 'react-animation'


export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false,
      Avengers: [],
      loaded: false,
      count: 0,
      id: [],
      rememberMe:[],
      index: [],
      showModal: false,
      foundMatch: 0
    }
  }


  componentDidMount() {
    let randomArray = this.shuffle(A)
    this.setState({ Avengers: randomArray }, () => {
      this.setState({ loaded: true })
    })

    //document.body.classList.add('bodyClass');
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
        myId = this.state.Avengers[i].id
        myIndex = i
      }
    }//end for loop
    this.setState(prevState => ({
      rememberMe: [...prevState.id, myId],
      id: [...prevState.id, myId],
      index: [...prevState.index, myIndex],
      count: prevState.count + 1
    }), () => {
      let myVar = setTimeout(() => this.remoteFrontClick(), 3000)
    })
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
          count: 0,
          foundMatch: this.state.foundMatch + 1
        }, () => {
          if (this.state.foundMatch === 5) {
            let myModal = setTimeout(() => this.modalHandler(), 1000)
          }

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
    }
  }
  
  modalHandler = () => {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal
    });
  }
  startOver = () => {
    //window.location.reload(); 
    this.props.history.push('/dashboard')  
  }

  render() {
    let cardsArray = [];
    const { Avengers } = this.state

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
   //<AnimateOnChange animationIn="popIn" animationOut="popOut">...</AnimateOnChange>
    return (
      <div>

        <div className='wrapper'> 
        <div className="box-top">
        <HideUntilLoaded
        animationIn="bounceIn"      
        > 
         Match The Memory
         </HideUntilLoaded>
         
        </div>
        <div className="box-bottom">
        <HideUntilLoaded
        animationIn="slideIn"
        >
         Marvel Avenger's Match Game 
        </HideUntilLoaded>
                
        </div>
        <div className='button-div'>
        <button onClick={this.startOver} className='custom-button'>Start Over <i className="fa fa-refresh"></i>
        </button>
        <Link to='/'>
        <button className='custom-button'>Home <i className="fa fa-home"></i>
        </button>
        </Link>
        </div>
        </div>
        <HideUntilLoaded
        animationIn="bounceIn"      
        > 
        <div className='wrap-cards'>
        <div className='grid-container'>         
        <div className='cards'>
          {cardsArray}
        </div>      
        </div>
        </div>
        </HideUntilLoaded> 
        
        {this.state.showModal &&
        <Modal
          onClose={this.modalHandler}
          title="Congratulations"
        >
        you have won the match game        
        </Modal>          
        }
        <div className='wrapFooter'> 
        <Footer/> 
        </div>     
      </div>
    )
  }
}
export default Dashboard
