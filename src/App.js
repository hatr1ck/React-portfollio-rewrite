import React, { Component,lazy ,  Suspense} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Icons from './icons/icon';
import aqua from './icons/aqua1.svg';
import './App.css';
import footer from './icons/algaesCC.svg';
import Weather  from './components/weather API/weather';
import Todo from'./components/shoping/todo';
import Login from './components/login/login';
import Puzzle from'./components/Puzzle/puzzle';
import Spinners from'./components/spinners/spinners';
import Magickball from'./components/8ball/8ball';
import Pixabay from'./components/pixabay/pixabay.js';
import Tetris from'./components/tetris/tetris.js';
import Socket from'./components/socket/socket.js';
import Canvas from'./components/canvas/canvas.js';
import Works from './components/works';
// const Works =  lazy(()=> import('./components/works'));


class App extends Component {
    render() {
        return (
            <BrowserRouter>
        <div className="App">
          <div className="head">
          <h1>Vitalii 'HaTr1ck' Ovodovskiy</h1>
          <h3 id='goGreen'>Web Developer</h3>
          I enjoy bringing ideas to life in the browser.
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
           {/*<Suspense fallback={<div className="cl"><div className="clock cssload-clock"></div></div>}>*/}
          <Route path="/" exact component={Works} />
           {/*</Suspense>*/}
          <Route path="/weather" exact component={Weather} />
          <Route path="/todo" exact component={Todo}/>
          <Route path="/login1" exact component={Login}/>
          <Route path="/puzzle" exact component={Puzzle}/>
          <Route path="/8ball" exact component={Magickball}/>
          <Route path="/game2048" exact component={Pixabay}/>
          <Route path="/spinners" exact component={Spinners}/>
          <Route path="/tetris" exact component={Tetris}/>
          <Route path="/socket" exact component={Socket}/>
          <Route path="/canvas" exact component={Canvas}/>
         
          </div>
          <img className='footer'  src={footer} alt='error'/>
        </div>
      </BrowserRouter>
        );
    }
}

export default App;