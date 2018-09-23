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

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
           <Link to="/">HOMA</Link><br />
          <div className="head">
            <Icons />
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
