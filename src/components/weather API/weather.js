import home from'../Home.svg';
import React, { Component } from 'react';
import './weather.css';
import axios from 'axios';
import Term from './term';
import {Link} from 'react-router-dom';

class Weather extends Component {
    state={
        city: "",
        temp: 0
    }
    weatherRequest = (val)=>{
      this.setState({
          city: val.target.value
      });
    }
  send = (event)=> {
    event.preventDefault();
    axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&APPID=abce00147b0566534c2aa99ed56b6cd5")
    .then((response)=> {
      let newtemp = 0;
      let inter = setInterval(()=>{
        if(Math.round(response.data.main.temp-273,15) > 0){
         newtemp++;
         }
         else{
          newtemp--;
         }
        if(newtemp>=Math.round(response.data.main.temp-273,15)*20  && newtemp > 0){
          clearInterval(inter);
        }
        else if (newtemp<=Math.round(response.data.main.temp-273,15)*20 && newtemp < 0){
          clearInterval(inter);
        }
        this.setState({
            temp:newtemp
        })}, 10);
        
    });
  }
    render() {
      return (<div>
              <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
            <form  onSubmit={this.send}  className='wet border border-info'>
              <div className='block'><Term some={Math.round(this.state.temp/20)} val={1200+this.state.temp} /></div>
              <h1>{Math.round(this.state.temp/20)}</h1>
              <input className='form-control' onChange={this.weatherRequest.bind(this)} />
            </form>
            </div>
      );
    }
  }

  export default Weather;