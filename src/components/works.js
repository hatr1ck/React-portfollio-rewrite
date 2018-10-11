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

class Works extends Component {
    state= {
      projects: [
                {title:"Weather API",logo:weat, link:"/weather", kkey:"1", pic:weats},
                {title:"Todo",logo:todos,  link:"/todo", kkey:"2", pic:todo},
                {title:"Login", link:"/login1", kkey:"3", pic:""},
                {title:"Spinners",logo:spin, link:"/spinners", kkey:"4", pic:spin1},
                {title:"Frog.io", link:"/frog", kkey:"5", pic:""},
                 {title:"Magick 8-ball", logo:ball, info:'Test of faith', link:"/8ball", kkey:"6", pic:ball8}
          ]}

    render() {
      return (
        <ul className='ele'>
        {window.innerWidth > 800 ? (
          this.state.projects.map((elem)=>{
            return (<Link to={elem.link} key={elem.kkey}><li className="carde">
  <img alt='404' src={elem.pic} className="card-banner" />
    <img src={elem.logo} height='70rem'alt='404' className="imag"  />
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