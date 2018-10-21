import React, { Component } from "react";
import "./login.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import home from'../Home.svg';
import google from './g+.svg';

export default class Login extends Component {
constructor(props){
    super(props);
    this.state.load();
  }
    state = {
      username1:"",
      password1:"",
      Err: [],
      username:"",
      email: "",
      password: "",
      data: "",
      password2: "",
      list:[],
      load:()=>{
          axios.get('http://localhost:3300/auth/allusers')
            .then( (response)=> {
              this.setState({
                  list:response.data
              });
            })}
    };

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
  		this.state.load();
  })};
google=()=>{
	axios.get('http://localhost:3300/auth/google');
}
logout=(e)=>{
  	e.preventDefault();
	axios.get('http://localhost:3300/auth/logout').then((data)=>{
		this.setState({
			data: ''
		})
	});
}
log=(e)=>{
  	e.preventDefault();
	axios.post('http://localhost:3300/auth/login', {username: this.state.username1,password: this.state.password1}).then((data)=>{
		this.setState({
			data: "Logged-in as " + data.data 
		})
	}).catch(err=> {this.setState({
		data:"Wrong username/password"
	})});
}
  render() {
    return (
    	<div>
      <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
  <ul>
<li className='li'>
    <form className="form-signin" onSubmit={this.post}>   
      <ul>
  {this.state.Err.length > 0 && Array.isArray(this.state.Err) ? (this.state.Err.map(er=>{
  	return <li className='alert alert-danger' key={er.msg} >{er.msg}</li>})) : this.state.Err==="Success"? <li className='alert alert-success'>Success</li>: this.state.Err.length > 0 ? <li className='alert alert-info'>{this.state.Err}</li> : null}
    </ul>    
      <h2 className="form-signin-heading">Sign Up {Array.isArray(this.state.Err)}</h2>
      <input type="text" className="form-control"
      placeholder="Username" id="username" onChange={this.handleChange} />
      <input type="text" className="form-control" 
      placeholder="Email Address" id="email" onChange={this.handleChange} />

      <input type="password" className="form-control" name="password" 
      placeholder="Password" required="" id="password" onChange={this.handleChange}  />
      <input type="password" className="form-control" name="password2" 
      placeholder="Confirm password" required="" id="password2" onChange={this.handleChange}  />      
      <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.post}>Sign up</button>   
    </form>
	<form className="form-signin" onSubmit={this.log}>  
{this.state.data.length>0 ? <div className='alert alert-danger'>{this.state.data}</div> : null}     
      <h2 className="form-signin-heading">Login</h2>
      <input type="text" className="form-control" name="username"
      placeholder="Username" onChange={this.handleLog} />
      <input type="password" className="form-control" name="password" 
      placeholder="Password" required="" onChange={this.handlePass}  />{/*     
      <label className="checkbox">
        <input type="checkbox" value="remember-me" name="rememberMe"  /> Remember me
      </label>*/} 
      <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.log}>Log In</button>
      <button className="btn btn-lg btn-warning btn-block" type="submit" onClick={this.logout}>Log Out</button>
      <button className="btn btn-lg btn-danger btn-block" onClick={this.logout}>Log Out</button>
    <a style={{with:'400px', float:'left'}} className='btn btn-danger' href='http://localhost:3300/auth/google'><img style={{height:'40px'}} alt='404' src={google} />Sign In with google</a>
    </form>
    </li>
    <li className='li'>
		<ul>Registered users:{this.state.list.map((name)=>{
		    	return <li id='why' className='list-group-item' style={{color:'black'}} key={Math.random() * 12}>{name}</li>
		    })}</ul>
	</li>
    </ul>
  </div>
    );
  }
}