import React, { Component } from 'react'
import './Profiles.css'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import charPoses from '../Components/CharPoses/charPoses'
import SplitText from 'react-pose-text';
import { CSSTransitionGroup, transitionAppear, transitionEnter, transitionLeave, transitionName, TransitionGroup, CSSTransition } from 'react-transition-group'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import firebase from 'firebase';
import { firebaseApp } from '../FirebaseConfig'
const db = firebaseApp.firestore()

const Bounce = styled.div`animation: .5s ${keyframes`${fadeIn}`} .5s`;
export class Profiles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      documents: [],
      loaded: false,
      change: false,
      openHeader: true,
      docsID: '',
      identifier: '',
      url: '',
      isVisible: false,
      seeFooter: false,
    }
  }
  componentDidMount() {
    let docData = []
    //toggle view to ensure correct view
    if (this.state.change === true) {
      this.setState({
        change: !this.state.change,
      })
    }

    db.collection("dossier").get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        docData.push(doc.data());
      })
      this.gotData(docData)
    });

    setTimeout(() => {
      this.setState({
        seeFooter: !this.state.seeFooter
      }, () => {
        console.log('seeFooter: ', this.state.seeFooter)
      });
    }, 2000);
  }

  gotData = (docData) => {
    this.setState({ documents: docData }, () => {
      this.setState({ loaded: true })
    })
  }

  changeView = (file) => {
    console.log('doc: ', file.url2)
    let documents = this.state.documents
    let doc = [];
    let i;
    window.scrollTo(0, 0);
    //toggle view
    setTimeout(() => { this.setState({ isVisible: !this.state.isVisible }) }, 2000)

    this.setState({
      openHeader: !this.state.openHeader,
      change: !this.state.change,
      seeFooter: !this.state.seeFooter,
      docsID: file.id.seconds,
      url: file.url2
    }, () => {
      switch (this.state.docsID) {
        case 1555677208:
          this.setState({
            identifier: 'iron man'
          })
          break;
        case 1555676592:
          this.setState({
            identifier: 'captain america'
          })
          break;
        case 1555756408:
          this.setState({
            identifier: 'black widow'
          })
          break;
        case 1555057404:
          this.setState({
            identifier: 'hulk'
          })
          break;
        case 1555319543:
          this.setState({
            identifier: 'thor'
          })
          break;
        default:
        // code block
      }
    })
  }

  toggle = () => {
    this.setState({
      change: !this.state.change,
      openHeader: !this.state.openHeader,
      isVisible: !this.state.isVisible,
      seeFooter: !this.state.seeFooter
    })
  }
  render() {
    return (
      <div>
        {this.state.openHeader &&
         <div> 
          <div className="header">
            <div className='title'>
              <p>Marvel's Avengers </p>
            </div>
            
          </div>
          <div className='myButton-wrapper'> 
            <Link to='/dashboard'>
              <a style={{color:'#fff'}} class="myButton">Ready To Play   Avenger's Match Game</a>
            </Link>
          </div>
      </div>
        }
        {this.state.loaded && !this.state.change ?
          this.state.documents.map((document, index) =>
            <div key={index} id="content">
              <div className='one'>
                <Zoom delay={500}>
                  <img className='img-style' src={document.url} />
                </Zoom>
              </div>
              <div className='two'>
                <p>
                  <h3>{document.name}</h3>
                </p>
                <p>
                  <h2>alias: {document.alias}</h2>
                </p>
                <p>
                  <span>Place of Birth: {document.birthplace}</span>
                </p>
                <p>
                  <span>Citizenship: {document.citizenship}</span>
                </p>
                <button onClick={() => this.changeView(document)} className="butn">Intelligence Dossier: Top Secret Clearance Required</button>
              </div>
            </div>
          ) : null
        }
        {this.state.change &&
          <div>
            {this.state.identifier === 'iron man' &&
              <div>
                <div className='my-url'>
                  <Fade delay={300} duration={3000}>
                    <Bounce><img className='img-style' src={this.state.url} /></Bounce>
                  </Fade>
                </div>

                {this.state.isVisible && <div className="container">
                  <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    Tony Stark is a genius inventor capable of conceiving and building scientific advancements far ahead of cutting edge technology. His Iron Man suit has impenetrable armor protection with refined flight capability. The reactor powers both his pacemaker and the metal alloy suit. His weapons include energy beam repulsors and smart missiles
                </SplitText>
                </div>}
              </div>
            }
            {this.state.identifier === 'captain america' &&
              <div>
                <div className='my-url'>
                  <Fade delay={300} duration={3000}>
                    <Bounce><img className='img-style' src={this.state.url} /></Bounce>
                  </Fade>
                </div>
                {this.state.isVisible && <div className="container">
                  <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    Captain America is a superior soldier. Due to Super Soldier Serum, Roger's is the first enhanced human being - body and mind. All physical attributes as well as cognitive abilities have been heightened to peak efficiency. He can self-heal. All these attributes along with his proficiency in most martial arts and his uniquely designed shield makes him one of earth's finest human combatants.
                </SplitText>
                </div>
                }
              </div>
            }
            {this.state.identifier === 'black widow' &&
              <div>
                <div className='my-url'>
                  <Fade delay={300} duration={3000}>
                    <Bounce><img className='img-style' src={this.state.url} /></Bounce>
                  </Fade>
                </div>
                {this.state.isVisible && <div className="container">
                  <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    Black Widow is highly trained in various martial arts. An expert acrobat, Olympic class gymnast, athlete and aerialist, excelling at marksmanship and knife throwing as well as being a master interrogator and tactician. Talented hacker, seductress and assassin. she has mastered skills in espionage infiltration, disguise and demolition.
                </SplitText>
                </div>
                }
              </div>
            }
            {this.state.identifier === 'hulk' &&
              <div>
                <div className='my-url'>
                  <Fade delay={300} duration={3000}>
                    <Bounce><img className='img-style' src={this.state.url} /></Bounce>
                  </Fade>
                </div>
                {this.state.isVisible && <div className="container">
                  <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    When Bruce Banner becomes the Hulk, he is an unstoppable beast of near unlimited strength, power, and destruction. He is able to leap great distances and is incredibly fast and can run great distances at extreme speeds. He generally travels by jumping. The hulk is nearly impervious to most forms of damage. when the Hulk is damaged, he heals quickly.
                </SplitText>
                </div>
                }
              </div>
            }
            {this.state.identifier === 'thor' &&
              <div>
                <div className='my-url'>
                  <Fade delay={300} duration={3000}>
                    <Bounce><img  className='img-style' src={this.state.url} /></Bounce>
                  </Fade>
                </div>
                {this.state.isVisible && <div className="container">
                  <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    Thor has superhuman strength, speed, and endurance. He Wields the enchanted Uru-forged hammer Mjolnir, which grants mastery over the elements of thunder and lightning, as well as the ability to fly and open interdimensional gateways. He possesses superhuman healing in addition to his near invulnerability to injury.
                </SplitText>
                </div>
                }
              </div>
            }
            {this.state.isVisible && <div className='button-wrapper'>
              <div>
                <Link to='/dashboard'>
                  <a style={{color:'#fff'}} class="myButton">Avenger's Match Game</a>
                </Link>
                <button onClick={this.toggle} className="butnn">Return To Dossiers</button>
              </div>
              <div className='wrap-foot'>
                <div className='foot'>
                  <footer>
                    <p>&copy;2019 <a href="https://mariposaweb.net" target="_blank">@mariposaweb.net</a>.</p>
                  </footer>
                </div>
              </div>
            </div>
            }
          </div>
        }
        {this.state.seeFooter &&
          <Footer />

        }
      </div>
    )
  }
}
/*<div className='foot'>
            <footer>
              <p>&copy;2019 <a href="https://mariposaweb.net" target="_blank">@mariposaweb.net</a>.</p>
            </footer>
           </div>*/
export default Profiles
