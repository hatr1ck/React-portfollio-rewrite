import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
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
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Login</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.post}
          >
            Login
          </Button>
        </form>
        <a href='http://localhost:3100/auth/google'>meee</a>
        <button onClick={this.google}>Google+</button>
        <button onClick={this.google1}>get data</button>
      </div>
    );
  }
}