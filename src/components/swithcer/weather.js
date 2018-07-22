import React, { Component } from 'react';
import './weather.scss';

class weather extends Component {
state={
    time:"eclipse2",
    daylight:"canvas2",
    star:"star2",
    land:"land2",
    tr:false
}


    changetime = () => {
        console.log("zulal");
    }

render(){
    
    return(
        <div className="row">
            <div className="col-md-4"></div>
        <div className="wrapper col-md-4">
          <div className="toggle">
            <input className="toggle-input" type="checkbox"  disabled={"tr"} onClick={this.changetime}/>
            <div className="toggle-bg"></div>
            <div className="toggle-switch">
              <div className="toggle-switch-figure"></div>
              <div className="toggle-switch-figureAlt"></div>
            </div>  
          </div>
        </div>
        <div className="col-md-4">I FEEL YOUR MIND</div>
        
        
        <div className={this.state.daylight}  className="col-md-6">
            <div className="cloud"></div>
            <div className="cloud a"></div>
            <div className="cloud b"></div>
            <div className="cloud c"></div>
            <div className={this.state.land}>
                <div className="tree"></div>
                <div className="tree a"></div>
                <div className="tree b"></div>
                <div className="tree c"></div>
                <div className="tree d"></div>
            </div>
            <div className={this.state.star}></div>
            <div className={this.state.star}  className="a"></div>
            <div className={this.state.star}  className="b"></div>
            <div className={this.state.star}  className="c"></div>
            <div className={this.state.star}  className="d"></div>
            <div className={this.state.star}  className="e"></div>
            <div className={this.state.star}  className="f"></div>
            <div className={this.state.star}  className="g"></div>
            <div className={this.state.star}  className="h"></div>
            <div className={this.state.star}  className="k"></div>
            <div className={this.state.star}  className="j"></div>
            <div className={this.state.star}  className="p"></div>
            <div className={this.state.star}  className="m"></div>
            <div className={this.state.star}  className="z"></div>
            <div className={this.state.star}  className="x"></div>
            <div className={this.state.star}  className="s"></div>
            <div className="wind"></div>
        <div className="swirly-wind">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="swirly-wind a"></div>
        <div className="swirly-wind b"></div>
            <div className={this.state.time}>
                <div className="sun"></div>
                <div className="sun a"></div>
                <div className="moon"></div>
                <div className="moon a"></div>
            </div>
        </div>
        </div>);
}

}

export default  weather;