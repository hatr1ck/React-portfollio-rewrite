import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './works.css';
import ball from'./8ball/ballLogo.svg';
import ball8 from'./8ball/kill.png';
import weat from'./weather API/if.svg';
import weats from'./weather API/weather.png';
import todos from'./shoping/todo.svg';
import todo from'./shoping/todo.png';
import spin from'./spinners/loading.svg';
import spin1 from'./spinners/spin.png';
import key from'./login/key.svg';
import bg from'./login/bg.png';
import puzzle from'./Frog/puzzle.svg';
import puzzle1 from'./Frog/game.png';

class Works extends Component {
    state= {
      projects: [
                {title:"Weather API", logo:weat, info:'Test of faith', link:"/weather", kkey:"1", pic:weats},
                {title:"Todo", logo:todos, info:'Test of faith', link:"/todo", kkey:"2", pic:todo},
                {title:"Login", logo:key, info:'Test of faith', link:"/login1", kkey:"3", pic:bg},
                {title:"Spinners", logo:spin,info:'Test of faith', link:"/spinners", kkey:"4", pic:spin1},
                {title:"15 Puzzle",logo:puzzle,info:'Test of faith', link:"/frog", kkey:"5", pic:puzzle1},
                {title:"test",logo:puzzle,info:'Test', link:"/game2048", kkey:"7", pic:puzzle1},
                 {title:"Magick 8-ball", logo:ball, info:'Test of faith', link:"/8ball", kkey:"6", pic:ball8}
          ]}
    render() {
      return (
        <ul className='ele'>
        {window.innerWidth > 800 ? (
          this.state.projects.map((elem)=>{
            return (<Link to={elem.link} key={elem.kkey}><li className="carde">
  <img alt='404' src={elem.pic} className="card-banner" />
    <img src={elem.logo} height='80rem'alt='404' className="imag"  />
    <h3 id='goGreen'>{elem.title}</h3>
    <span className='goWhite'>{elem.info}</span>
</li></Link>)})) : (
        this.state.projects.splice(0, 3).map((elem)=>{
            return (<Link to={elem.link} key={elem.kkey}><li className="carde">
  <img alt='404' src={elem.pic}className="card-banner" />
    <img src={elem.logo} height='70rem'alt='404' className="imag"  />
    <h3 id='goGreen'>{elem.title}</h3>
    <p>{elem.text}</p>
</li></Link>)
          })
            )}
          </ul>

          
      );
    }
  }

  export default  Works;