
import React, { Component } from 'react';
import './spinners.css';

class Spinners extends Component {
state={
	val:"",
	shoosenOne:""
}
clicked = (e)=>{
	console.log(e.target.className);
	this.setState({
		val:e.target.className
	});

}
    render() {

      return (
      	<div>
      	<h1>So it's middle of a summer, and I'm like staring at a ventilator thinking: "should I do some spinner simulator?"</h1>
      	<h3>Choose one: </h3>
      		<div className="spinner spinner-1" onClick={this.clicked}></div>
      		<div className="spinner spinner-2" onClick={this.clicked}></div>
      		<div className="spinner spinner-3" onClick={this.clicked}></div>
      		<div className="spinner spinner-4" onClick={this.clicked}></div>
      		<div className="spinner spinner-5" onClick={this.clicked}></div>
      		<div className="spinner-6" onClick={this.clicked}></div>
      		<div className="cssload-thecube" onClick={this.clicked}>
				<div className="cssload-cube cssload-c1" onClick={this.clicked}></div>
				<div className="cssload-cube cssload-c2" onClick={this.clicked}></div>
				<div className="cssload-cube cssload-c4" onClick={this.clicked}></div>
				<div className="cssload-cube cssload-c3" onClick={this.clicked}></div>
			</div>
			<div className="windows8">
				<div className="wBall" id="wBall_1">
					<div className="wInnerBall"></div>
				</div>
				<div className="wBall" id="wBall_2">
					<div className="wInnerBall"></div>
				</div>
				<div className="wBall" id="wBall_3">
					<div className="wInnerBall"></div>
				</div>
				<div className="wBall" id="wBall_4">
					<div className="wInnerBall"></div>
				</div>
				<div className="wBall" id="wBall_5">
					<div className="wInnerBall"></div>
				</div>
			</div>
      	</div>
      );
    }
  }

  export default Spinners;