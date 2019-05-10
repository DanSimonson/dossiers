import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
	onClose = (e) => {
		//if onClose props true, then close modal
		this.props.onClose && this.props.onClose(e)
	}


	render() {
		return (
			<div className="bg-modal">
				<div className="modal-contents">
					<div onClick={(e) => { this.onClose(e) }} className="close">+</div>
					<h1>{this.props.title}</h1>
					{this.props.children}
				</div>
			</div>
		)
	}
}



