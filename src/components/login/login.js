import React, { Component } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.scss";
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:"",
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 6;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  post=()=>{
  	console.log("WHAT");
  	axios.post('http://localhost:3100/auth/addnew', this.state).then(
  	this.setState({
  	   username:"",
      email: "",
      password: ""
    }));
  }
google=()=>{
	axios.get('http://localhost:3100/auth/google');
}
google1=()=>{

	//axios.get('http://localhost:3100/auth/google');
}
  render() {
    return (
      <div className="Login">

      </div>
    );
  }
}