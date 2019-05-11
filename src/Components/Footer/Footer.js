import React, { Component } from 'react'
import './Footer.css'
import posed, { PoseGroup } from 'react-pose';

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

export class Footer extends Component { 
  constructor(props) {
    super(props)
    /*this.state = {
      isVisible: false
    }*/
  } 
  
  render(){
    return (      
      <div className='foot'>               
         <footer>
         <p>&copy;2019 <a href="https://mariposaweb.net" target="_blank">@mariposaweb.net</a></p>
         </footer>
        </div>         
      )
  }  
}
export default Footer
