import React, { Component } from 'react';
import './spinners.css';
import {Link} from 'react-router-dom';
import home from'../Home.svg';
import arrowL from '../../icons/arrowL.svg';
import arrowR from '../../icons/arrowR.svg';

class Spinners extends Component {
	state={
		first:0,
		last:3,
		arr:['bt spinner spinner-1', "bt cssload-spin-box6", 'bt spinner spinner-2','bt spinner spinner-3','bt spinner-6',
		'bt cssload-thecube', 'bt windows8',  'bt cssload-container',
 'bt cssload-clock',
 'bt cssload-container1',
 'bt cssload-container2',
 'bt cssload-bell',
 'bt cssload-loader8',
 'bt cssload-container9',
 'bt cssload-spinner10',
 'bt wrapper11',
 'bt cssload-container12',
 'bt cssload-loader13'],
 		arr1:['bt spinner spinner-1', "bt cssload-spin-box6", 'bt spinner spinner-2','bt spinner spinner-3','bt spinner-6',
		'bt cssload-thecube', 'bt windows8',  'bt cssload-container',
 'bt cssload-clock',
 'bt cssload-container1',
 'bt cssload-container2',
 'bt cssload-bell',
 'bt cssload-loader8',
 'bt cssload-container9',
 'bt cssload-spinner10',
 'bt wrapper11',
 'bt cssload-container12',
 'bt cssload-loader13']
	}

moveLeft=()=>{
	if(this.state.first !== 0){
	let some = this.state.arr1.slice();
	let arr2 = some.slice(this.state.first, this.state.last).map(elem=>{
		console.log(elem.slice(2,elem.length))
		return elem.slice(3,elem.length);
	})
	let arr3=this.state.arr1.slice();
	arr3.splice(this.state.first, 3, ...arr2)
	console.log(arr3, this.state.arr1)

	this.setState({
		arr:arr3,
		first: this.state.first -3,
		last: this.state.last -3
	})
}
}
moveRight=()=>{
	if(this.state.last !== this.state.arr.length){
	let some = this.state.arr1.slice();
	let arr2 = some.slice(this.state.first, this.state.last).map(elem=>{
		console.log(elem.slice(2,elem.length))
		return elem.slice(3,elem.length);
	})
	let arr3=this.state.arr1.slice();
	arr3.splice(this.state.first, 3, ...arr2)
	console.log(arr3, this.state.arr1)

	this.setState({
		arr:arr3,
		first: this.state.first +3,
		last: this.state.last +3
	})
	}
}
    render() {
      return (
      	<div className='gowhite'>
      <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
      <div className='arws'>
      	    <img className='arrow' alt='404' width='50px'src={arrowL} onClick={this.moveLeft} />
          <span>{"3/"+ this.state.arr.length}</span>
           <img className='arrow' alt='404' width='50px' src={arrowR} onClick={this.moveRight} />
           </div>
       <div>
      		<div className={this.state.arr[0]}></div>
      		<div className={this.state.arr[1]}></div>
      		<div className={this.state.arr[2]}></div>
      		<div className={this.state.arr[3]}></div>
      		<div className={this.state.arr[4]}></div>
      		<div className={this.state.arr[5]}>
				<div className="cssload-cube cssload-c1"></div>
				<div className="cssload-cube cssload-c2"></div>
				<div className="cssload-cube cssload-c4"></div>
				<div className="cssload-cube cssload-c3"></div>
			</div>
			<div className={this.state.arr[6]}>
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
			<div className={this.state.arr[7]}>
				<ul className="cssload-flex-container">
					<li>
						<span className="cssload-loading cssload-one"></span>
						<span className="cssload-loading cssload-two"></span>
						<span className="cssload-loading-center"></span>
					</li>
					</ul>
			</div>	
			<div className={this.state.arr[8]}></div>
			<div className={this.state.arr[9]}>
				<div className="cssload-arc">
					<div className="cssload-arc-cube"></div>
				</div>
			</div>
			<div className={this.state.arr[10]}>
				<div className="cssload-tube-tunnel"></div>
			</div>
						<div className={this.state.arr[11]}>
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
<div className={this.state.arr[12]}></div>
<div className={this.state.arr[13]}>
<div className="cssload-loading9"><i></i><i></i></div>
</div>
<div className={this.state.arr[14]}></div>
<div className={this.state.arr[15]}>
	<div className="cssload-loader11"></div>
</div>
<div className={this.state.arr[16]}>
	<ul className="cssload-flex-container12">
		<li>
			<span className="cssload-loading12"></span>
		</li>
	</ul>
</div>	
<span className={this.state.arr[17]}><span className="cssload-loader-inner13"></span></span>
      	</div>      	</div>
      );
    }
  }

  export default Spinners;