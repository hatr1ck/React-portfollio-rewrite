
import React, { Component } from 'react';
import './weather.css';
import axios from 'axios';
import Term from './term';

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

  send = ()=> {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&APPID=abce00147b0566534c2aa99ed56b6cd5")
    .then((response)=> {
      let newtemp = 1;
      let inter = setInterval(()=>{
        
        newtemp++
        if(newtemp>=(Math.round(response.data.main.temp-273,15)*20)){
          clearInterval(inter);
        }
        this.setState({
            temp:newtemp
        })}, 10);
        
    })
    .catch((res)=>console.log(res));
  }
  
    render() {
      return (
            <div>
              <Term val={1200+this.state.temp} />
              <h1>{Math.round(this.state.temp/20)}</h1>
              <input onChange={this.weatherRequest.bind(this)} />
                <button type="submit" onClick={this.send} className="btn btn-info">Get Weather</button>
                
            </div>
      );
    }
  }

  
  export default Weather;