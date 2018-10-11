import React, { Component } from "react";
import "./Magickball.css";
import {Link} from 'react-router-dom';
import home from'../Home.svg';

export default class Magickball extends Component {
    state={
      answers:[
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes - definitely',
      'You may rely on it',
      'As I see it, yes',
      'Most likely',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy, try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful'
      ],
      somestyle:"up",
      answer:"click me"
    }
    clicked = (e)=>{
      if(this.state.somestyle === 'up'){
        this.setState({
        answer: this.state.answers[Math.floor(Math.random() * 20)],
        somestyle:"up1"
      })
      }
        else{
          this.setState({
        answer: this.state.answers[Math.floor(Math.random() * 20)],
        somestyle:"up"
        }
      )}
    }

    render(){
      return(
        <div>
      <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>

        <div className='try'>

      <div className='ball' onClick={this.clicked}>
        <div className="egrad"></div>
        <div className="ewin"> <div className={this.state.somestyle}>
  <p>{this.state.answer}</p>
      </div></div>
          
      </div>
      </div>
      </div>
    );
  }
}