import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './works.css';

class Works extends Component {
    state= {
      projects: [
                {title:"Weather API", link:"/weather", description:"1", pic:""},
                {title:"Weather API",  link:"/todo", description:"2", pic:""},
                {title:"Login", link:"/login", description:"3", pic:""},
                {title:"Loading simulator", link:"/spinners", description:"4", pic:"https://cdn3.volusion.com/ztghq.pevcc/v/vspfiles/photos/_SSPIN2(Rainbow-Zebra)-2.jpg?1517922868"},
                {title:"Frog.io", link:"/frog", description:"5", pic:"http://images.clipartpanda.com/frog-clip-art-bug-eyed-frog.svg"}
          ]}

    render() {
      return (
        <ul>
          {this.state.projects.map((elem)=>{
            return (<li className="card" key={elem.description}>
                      <div className="card-body">
                      
                        <img src={elem.pic} alt="nathin hiar" height="100%" width="100%" />
                        <h4 className="card-title">{elem.title}</h4>
                        <p className="card-text">Some example text. Some example text.</p>
                        <Link to={elem.link}>LINK</Link>
                      </div>

                  </li>)
          })}
          </ul>
      );
    }
  }

  export default  Works;