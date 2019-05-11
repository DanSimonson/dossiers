import React from 'react'
import './Modal.css'
import styled, { keyframes } from 'styled-components';
import { wobble } from 'react-animations';
import { AnimateOnChange } from 'react-animation'
const wobbleAnimation = keyframes`${wobble}`;
const wobblyDiv = styled.div`
  animation: 1s ${wobbleAnimation};
`;
export default class Modal extends React.Component {
	onClose = (e) => {
		//if onClose props true, then close modal
		this.props.onClose && this.props.onClose(e)
	}


	render() {
		return (
			<div className="bg-modal">
				<wobblyDiv><div className="modal-contents">
					<div onClick={(e) => { this.onClose(e) }} className="close">+</div>
					<h1>{this.props.title}</h1> 
					{this.props.children}					
				</div>
				</wobblyDiv>	
			</div>
		)
	}
}



