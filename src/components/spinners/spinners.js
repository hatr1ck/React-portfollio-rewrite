
import React, { Component } from 'react';
import './spinners.css';
import {Link} from 'react-router-dom';
import home from'../Home.svg';

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
      <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
      <div>
      		<div className="spinner spinner-1"></div>
      		<div className="cssload-spin-box6"></div>
      		<div className="spinner spinner-2"></div>
      		<div className="spinner spinner-3"></div>
      		<div className="spinner-6"></div>
      		<div className="cssload-thecube">
				<div className="cssload-cube cssload-c1"></div>
				<div className="cssload-cube cssload-c2"></div>
				<div className="cssload-cube cssload-c4"></div>
				<div className="cssload-cube cssload-c3"></div>
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
			<div className="cssload-container">
				<ul className="cssload-flex-container">
					<li>
						<span className="cssload-loading cssload-one"></span>
						<span className="cssload-loading cssload-two"></span>
						<span className="cssload-loading-center"></span>
					</li>
					</ul>
			</div>	
			<div className="cssload-clock"></div>
			<div className="cssload-container1">
				<div className="cssload-arc">
					<div className="cssload-arc-cube"></div>
				</div>
			</div>
			<div className="cssload-container2">
				<div className="cssload-tube-tunnel"></div>
			</div>
						<div className="cssload-bell">
				<div className="cssload-circle">
					<div className="cssload-inner"></div>
				</div>
				<div className="cssload-circle">
					<div className="cssload-inner"></div>
				</div>
				<div className="cssload-circle">
					<div className="cssload-inner"></div>
				</div>
				<div className="cssload-circle">
					<div className="cssload-inner"></div>
				</div>
				<div className="cssload-circle">
					<div className="cssload-inner"></div>
				</div>
</div>
<div className="cssload-loader8"></div>
<div class="cssload-container9">
<div class="cssload-loading9"><i></i><i></i></div>
</div>
<div class="cssload-spinner10"></div>
<div class="wrapper11">
	<div class="cssload-loader11"></div>
</div>
<div class="cssload-container12">
	<ul class="cssload-flex-container12">
		<li>
			<span class="cssload-loading12"></span>
		</li>
	</ul>
</div>	
<span class="cssload-loader13"><span class="cssload-loader-inner13"></span></span>
      	</div>
      	</div>
      );
    }
  }

  export default Spinners;