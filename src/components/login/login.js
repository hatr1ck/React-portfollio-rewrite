import React, { Component } from "react";
import "./login.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import home from'../Home.svg';
import google from './g+.svg';

export default class Login extends Component {
      state = {
      username1:"",
      password1:"",
      Err: [],
      username:"",
      email: "",
      password: "",
      data: "",
      password2: "",
      signUp: 'butn',
      signIn:'signIn',
      list:[],
      switch: false
    };
componentDidMount(){
          axios.get('http://localhost:3300/auth/allusers')
            .then( (response)=> {
if(response.data.current){
                this.setState({
                  data:'Logged-in as: '+ response.data.current,
                  list:response.data.list
              });
}
else{
  this.setState({
                  list:response.data.list
              });
}
            })
}


handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
handleLog = event => {
    this.setState({
     username1: event.target.value
    });
  }
handlePass = event => {
    this.setState({
      	password1:event.target.value
  })
}

post=(e)=>{
  	e.preventDefault();
  	axios.post('http://localhost:3300/auth/addnew', this.state).then((res)=>{ 	
  		this.setState({
      Err: res.data
    });
  })};
google=()=>{
	axios.get('http://localhost:3300/auth/google');
}
logout=(e)=>{
  	e.preventDefault();
	axios.get('http://localhost:3300/auth/logout').then(()=>{
		this.setState({
			data: ''
		})
	});
}
log=(e)=>{
  	e.preventDefault();
	axios.post('http://localhost:3300/auth/login', {username: this.state.username1,password: this.state.password1}).then((data)=>{
    this.setState({
			data: "Logged-in as " + data.data,
      username1:'',
      password1:''
		})
	}).catch(err=> {this.setState({
		data:"Wrong username/password"
	})});
}
signUp=()=>{
  this.setState({
    switch:true,
    signIn: 'butn',
    signUp: 'signUp'
  })
}
signIn=()=>{
  this.setState({
    switch:false,
    signIn: 'signIn',
    signUp: 'butn'
  })
}
  render() {
    return (
    	<div>
      <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
      <div className='ins'>
      <div className='goGrey'>
<div className={this.state.signUp} onClick={this.signUp}>Sign Up</div>
<div className={this.state.signIn} onClick={this.signIn}>Log In</div>
{this.state.switch ? <form  onSubmit={this.post}>   
      <h2 >Sign Up for Free</h2>
      <input type="text" 
      placeholder="Username" id="username" onChange={this.handleChange} />
      <input type="text" 
      placeholder="Email Address" id="email" onChange={this.handleChange} />

      <input type="password"  name="password" 
      placeholder="Password" required="" id="password" onChange={this.handleChange}  />
      <input type="password"  name="password2" 
      placeholder="Confirm password" required="" id="password2" onChange={this.handleChange}  />      
      <div className='signIn' type="submit" onClick={this.post}>Sign up</div>  
      <div className='googl'>
      <a className='an'  href='http://localhost:3300/auth/google'>
      <img height='40px' alt='404' src={google} />Sign In with google</a>
      </div>
    {this.state.Err.length > 0 && Array.isArray(this.state.Err) ? (this.state.Err.map(er=>{
    return <div className='erar' key={er.msg} >{er.msg}</div>})) : 
this.state.Err==="Success"? <div id='goGreen'>Success</div>: this.state.Err.length > 0 ? <div>{this.state.Err}</div> : null} 
    </form>
 
    :
  this.state.data.slice(0,12) !== 'Logged-in as'?
<form  onSubmit={this.log}>    
      <h2 >Welcome Back!</h2>
      <input type="text"  name="username"
      placeholder="Username" onChange={this.handleLog} />
      <input type="password"  name="password" 
      placeholder="Password" required="" onChange={this.handlePass}  />{/*     
      <label className="checkbox">
        <input type="checkbox" value="remember-me" name="rememberMe"  /> Remember me
      </label>*/}
      <div className='signIn' type="submit" onClick={this.log}>Log In</div>
      <div className='googl'>
      <a className='an'  href='http://localhost:3300/auth/google'>
      <img height='40px' alt='404' src={google} />Sign In with google</a>
      </div>
{this.state.data === 'Wrong username/password' ? <div className='erar'>{this.state.data}</div> : null}   
    </form>
    : <div><h2>{this.state.data}</h2>
      <div className='signIn' onClick={this.logout}>Log Out</div>
      </div>}
  </div>
  </div>
  <div className='reg'>
		<div className='Registered'><h2>Registered users:</h2>{this.state.list.map((name)=>{
		    	return <div id='why' className='list-group-item' style={{color:'black'}} key={Math.random() * 12}>{name}</div>
		    })}</div>
  </div>
  </div>
    );
  }
}