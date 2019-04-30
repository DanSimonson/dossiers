import React, { Component } from 'react'
import './Profiles.css'
import charPoses from '../Components/CharPoses/charPoses'
import SplitText from 'react-pose-text';
import firebase from 'firebase';
import { firebaseApp } from '../FirebaseConfig'
const db = firebaseApp.firestore()
export class Profiles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      documents: [],
      loaded: false,
      change: false,
      //open: false,
      docsID: '',
      identifier: ''
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
  }

  gotData = (docData) => {
    this.setState({ documents: docData }, () => {
      this.setState({ loaded: true })
    })
  }
  changeView = (id) => {
    let documents = this.state.documents
    let doc = [];
    let i;
    window.scrollTo(0, 0);
    //toggle view
    this.setState({
      change: !this.state.change,
      docsID: id
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
    this.setState({ change: !this.state.change })
  }
  render() {
    console.log(this.state.loaded)
    return (
      <div>
        {this.state.loaded && !this.state.change ?
          this.state.documents.map((document, index) =>
            <div id="content">
              <div className='one'>
                <img src={document.url} />
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
                <button onClick={() => this.changeView(document.id.seconds)} className="butn">Intelligence Dossier: Top Secret Clearance Required</button>
              </div>
            </div>
          ) : null
        }
      </div>
    )

  }

}
export default Profiles
