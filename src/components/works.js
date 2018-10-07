import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './works.css';

class Works extends Component {
    state= {
      projects: [
                {title:"Weather API", link:"/weather", description:"1", pic:""},
                {title:"Weather API",  link:"/todo", description:"2", pic:""},
                {title:"Login", link:"/login1", description:"3", pic:""},
                {title:"Loading simulator", link:"/spinners", description:"4", pic:""},
                {title:"Frog.io", link:"/frog", description:"5", pic:""},
                 {title:"Magick 8-ball",info:'a quest of faith', link:"/8ball", description:"6", pic:""}
          ]}

    render() {
      return (
        <ul className='ele'>
        {window.innerWidth > 800 ? (
          this.state.projects.map((elem)=>{
            return (<Link to={elem.link}><li className="carde" key={elem.description}>
  <div className="card-banner">
    <div className="card-profile"></div>
    <h3 id='goGreen'>{elem.title}</h3>
    <span className='goWhite'>{elem.info}</span>
  </div>
</li></Link>)})) : (
        this.state.projects.splice(0, 3).map((elem)=>{
            return (<Link to={elem.link}><li className="carde" key={elem.description}>
  <div className="card-banner">
    <div className="card-profile"></div>
    <h3 id='goGreen'>{elem.title}</h3>
    <p>{elem.text}</p>
  </div>
</li></Link>)
          })
            )}
          </ul>

          
      );
    }
  }

  export default  Works;