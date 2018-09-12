import React from 'react';
import react from'./React-icon.svg';
import html5 from'./html5.svg';
import illustrator from'./Illustrator.svg';
import javascript from'./JavaScript.svg';
import mongodb from'./mongodb.svg';
import node from'./Node.svg';
import css from'./Css.svg';
import sss from'./zb.svg';
//import 'item.css';

class Icon extends React.Component {
  state = {
    techs:[
      {name:'HTML5', comp: html5},
      {name:'CSS3', comp: css},
      {name:'JavaScript', comp: javascript},
      {name:'React', comp: react}, 
      {name:'Illustrator', comp: illustrator},  
      {name:'NodeJS', comp: node}, 
      {name:'ss', comp:sss},
      {name:'MongoDB', comp:mongodb}
    ]
  }

  render() {
    return (
      <div>
      {this.state.techs.map((elem)=>{
      return (
        <span style={{display: 'inline-block', fontSize:'18px', textAlign: 'center', margin:'20px'}} key={elem.comp}>
        
        <img   src={elem.comp} height='100em' alt='error'/>
        <div  className='item'>{elem.name}</div>
        </span>)
      })}

      </div>
    );
  }
}
export default Icon;