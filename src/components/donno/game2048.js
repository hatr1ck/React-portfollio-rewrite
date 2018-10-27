import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './game2048.css';
import home from'../Home.svg';

class Game2048 extends Component {
    state= {
      arr9:[0,0,0,2,
            0,0,0,0,
            0,2,0,0,
            0,0,0,0]
    }
// down(e){
//   arr1=[...this.state.arr9]
//   arr1.map(el=>{
//     if(el>0){
//       if()
//     }
//   })

//   this.setState({
//     arr9:arr1
//   })
// }

    render() {
      return (
        <div>
      <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>


      <ul className='gam'>
        {this.state.arr9.map(elem=>{
          return <li key={Math.random()*13} className='alert alert-info tem'>{elem}</li>
        })}
      </ul>
      <button onClick={this.down}>down</button>
          </div>

          
      );
    }
  }

  export default  Game2048;