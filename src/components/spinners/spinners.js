
import React, { Component } from 'react';
import './spinners.scss';

class Spinners extends Component {
state={
	val:"",
	shoosenOne:""
}
clicked = (e)=>{
	this.setState({
		val:e.target.className
	});

}

send=()=>{
	this.setState({
		shoosenOne:this.state.val
	});
	setTimeout(()=> this.setState({
		shoosenOne: "someclass"
	}),3000);
}
    render() {

      return (
      	<div>
      	<h1>So it's middle of a summer, and I'm like staring at a ventilator thinking: "should I do some spinner simulator?"</h1>
      	<h3>Choose one: </h3>
      		<div className="spinner spinner-1" onClick={this.clicked}></div>
      		<div className="spinner spinner-2" onClick={this.clicked}></div>
      		<div className="spinner spinner-3" onClick={this.clicked}></div>
      		<div className="spinner spinner-4" onClick={this.clicked}></div><br />




			
			<div className={this.state.shoosenOne}></div>
			<button onClick={this.send}> LOAD SOMETHING </button>
      	</div>
      );
    }
  }

  export default Spinners;