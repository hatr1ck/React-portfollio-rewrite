import React, { Component } from 'react';
import './puzzle.css';
import {Link} from 'react-router-dom';
import home from'../Home.svg';



class Puzzle extends Component {
state ={
        arr:[ 14, 10, 12,
             4, 8, 15, 13,
             9, 2, 11,6,
             7,1,5,"oops",3],
        date: new Date()
    }
    clicked=(e)=>{
      let arr1 = [...this.state.arr];
      let ind = arr1.indexOf("oops");
      let ind1 = arr1.indexOf(e);
      if(ind1-4 === ind || ind1+4 === ind || ind1+1 === ind || ind1-1 === ind){
            if(e !== "oops"){
            arr1.splice(ind1, 1, "oops");
            arr1.splice(ind, 1, e);
              }
          }

      this.setState({
        arr:[...arr1]
      })
    }
    getScore=()=>{
      let val = ((new Date() - this.state.date) / 1000);
      return val;
    }
    reset=()=>{
      let arr1 = this.state.arr.sort(()=>{return 0.5-Math.random()});
      this.setState({
        arr:arr1
      })
    }

    render(){
        return(<div>
      <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
          <div className='gamewrap'>
          <div className='game'>
          <ul className='game1'>
            {this.state.arr.map(numb=>{return <li style={{display: 'inline-block',
              fontSize: '40px',
              width: '80px',
              textAlign: 'center',
              margin:'2px',
              background:'#009999',
              cursor: 'default',
              border: '3px solid #6699ff'}} className={numb} key={numb} onClick={()=>{this.clicked(numb)}}>{numb}</li>})}
            </ul>
            <button className='btn btn-warning bat' onClick={this.reset}>RESET</button>
            {this.state.arr.toString()===[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11, 12,13,14,15,"oops"].toString()?
             (<div className='somebody'>{'Your time is:  ' + Math.floor(Math.floor(((new Date() - this.state.date)/1000)/60))+" min "+Math.round((new Date() - this.state.date)/1000%60)+' sec'}</div>) : null} 
            
        </div>
        </div>
        </div>);
    }
    
    }
    
    export default  Puzzle;

