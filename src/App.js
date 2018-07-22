import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Works from './components/works';
import {connect} from 'react-redux';
import Weather from './components/weather API/weather';
import Todo from './components/shoping/todo';
import Goodreads from './components/sites/goodreads/goodreads';
import Frog from './components/Frog/Frog';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="head">
          <Link to="/">HOMA</Link><br />Hi! I want to be a web-dev! Currently Im mostly rewriting web sites in MERN stack
          </div>
          <div className="content">
          <Route path="/" exact component={Works} />
          <Route path="/weather" exact component={Weather} />
          <Route path="/todo" exact component={Todo}/>
          <Route path="/goodreads" exact component={Goodreads}/>
          <Route path="/frog" exact component={Frog}/>
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
