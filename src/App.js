import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Works from './components/works';
import {connect} from 'react-redux';
import Weather from './components/weather API/weather';
import Todo from './components/shoping/todo';
import Login from './components/login/login';
import Frog from './components/Frog/Frog';
import Spinners from './components/spinners/spinners';
import Magickball from './components/8ball/8ball';
import Icons from './icons/icon';
import Zb from './icons/zb.svg';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div >
        <img src={Zb} height='100%' width='100%' className='pic' alt='error' />
          <div className="head">
          
          <Link to="/">HOMA</Link><br />
            <Icons />
            <div className="sun">
    <div className="ray_box">
        <div className="ray ray1"></div>
        <div className="ray ray2"></div>
        <div className="ray ray3"></div>
        <div className="ray ray4"></div>
        <div className="ray ray5"></div>
        <div className="ray ray6"></div>
        <div className="ray ray7"></div>
        <div className="ray ray8"></div>
        <div className="ray ray9"></div>
        <div className="ray ray10"></div>
    </div>
</div>
          <ul className="boat">
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
          <div id="waveCont">
  <div id="wave1"></div>
  <div id="wave2"></div>
</div>
          </div>

          <div className="content">


          <Route path="/" exact component={Works} />
          <Route path="/weather" exact component={Weather} />
          <Route path="/todo" exact component={Todo}/>
          <Route path="/login1" exact component={Login}/>
          <Route path="/frog" exact component={Frog}/>
          <Route path="/8ball" exact component={Magickball}/>
          <Route path="/spinners" exact component={Spinners}/>

          </div>
          <div className='contacts'>
            <h1>Contacts:</h1>
          </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

// const mapStateToProps = state => { //receive full state as a argument and return wich part you choose with dot ( . )
//   return state;
// }
// const mapActionsToProps = dispatch => ({
//   changeReducer: (change) => dispatch({type:'ADD_FROM_COMPONENT', payload: change})
// });//

export default connect(props => { 
  return props;
},  
  (dispatch) => ({
  fireAction: (change) => dispatch({type:'ADD_FROM_COMPONENT', payload: change})
}))(App);
