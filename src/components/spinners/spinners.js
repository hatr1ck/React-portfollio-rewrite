
import React, { Component } from 'react';
import './spinners.css';

class Spinners extends Component {
state={
	val:"",
	shoosenOne: ""
}
clicked = (e)=>{
	this.setState({
		val:e.target.className
	});
	console.log(e.target);

}
send=()=>{
	let shoosen = this.state.val;
	this.setState({
		shoosenOne:shoosen
	});
}
    render() {

      return (
      	<div>
      	<h1>So it's middle of a summer, and I'm like staring at a ventilator thinking: "should I do some loader/spinner simulation?"</h1>
      		<div className='spinner1 sp' onClick={this.clicked}></div>
			<div className='spinner2 sp' onClick={this.clicked}></div>
			<div className='spinner3 sp' onClick={this.clicked}></div>
			<div className='spinner4 sp' onClick={this.clicked}></div>
			<div className='spinner5 sp' onClick={this.clicked}></div>
			<div className='spinner6 sp' onClick={this.clicked}></div>
			<div className='spinner7 sp' onClick={this.clicked}></div>
			<div className='spinner8 sp' onClick={this.clicked}></div>
			
			<div className={this.state.shoosenOne}></div>
			<button onClick={this.send}> MAKE A REQUEST </button>
      	</div>
      );
    }
  }

  export default  Spinners;