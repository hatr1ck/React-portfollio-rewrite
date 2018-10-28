import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Works from './components/works';
import Weather from './components/weather API/weather';
import Todo from './components/shoping/todo';
import Login from './components/login/login';
import Frog from './components/Frog/Frog';
import Spinners from './components/spinners/spinners';
import Magickball from './components/8ball/8ball';
import Icons from './icons/icon';
import aqua from'./icons/aqua1.svg';
import Game2048 from'./components/donno/game2048.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="head">
          <h1>Vitalii 'HaTr1ck' Ovodovskiy</h1>
          <h3 id='goGreen'>Web Developer</h3>
          I enjoy bringing ideas to life in browser.
          </div>
          <div className='about'>
          
            <h3 id='goGreen'>About me:</h3><br />
            <img src={aqua} height='300rem' className='img' alt='404'/>
          <div className='info'>
          At summer of 2017 I started to learn how to code, at that time I have a full time job
          and it was mostly like a hobby. My first programming language was Java,
           because... you know... Java requires updates on you windows
            machine so I thought that it's a thing. Then I tryed a couple more technologies like
            Python and PHP, after those I thought that it dosent metter witch one to choose,
            the concept will be the same (atleast for most popular ones), so I decided stick to 
            the JavaScript, because this language have browser runtime environment that makes it
            more visualy adapted and interesting to learn. So its ___ now and Im gonna launght 
            that portfolio.
         </div>
         <h3 id='goGreen'>Tech stack I use:</h3>
          <Icons />
          </div>
          <div className="content">
           <h3 id='goGreen'> My works:</h3><br />
          <Route path="/" exact component={Works} />
          <Route path="/weather" exact component={Weather} />
          <Route path="/todo" exact component={Todo}/>
          <Route path="/login1" exact component={Login}/>
          <Route path="/frog" exact component={Frog}/>
          <Route path="/8ball" exact component={Magickball}/>
          <Route path="/game2048" exact component={Game2048}/>
          <Route path="/spinners" exact component={Spinners}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
