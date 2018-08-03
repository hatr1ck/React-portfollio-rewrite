import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.scss";
import axios from 'axios';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//       login:{
//       	nick: "",
//       	email:"",
//       	password: ""
//       }
//     };
//   }
//   post=()=>{
//   	console.log("WHAT");
//   	axios.post('http://localhost:3001/adduser', this.state.nick);
//   }

//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//        login:{[event.target.id]: event.target.value}
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
// {        <FormGroup controlId="nick" bsSize="large">
//             <ControlLabel>Nickname</ControlLabel>
//             <FormControl
//               autoFocus
//               type="nick"
//               value={this.state.login.nick}
//               onChange={this.handleChange}
//             />
//           </FormGroup>}
//           <FormGroup controlId="email" bsSize="large">
//             <ControlLabel>Email</ControlLabel>
//             <FormControl
//               autoFocus
//               type="email"
//               value={this.state.login.email}
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup controlId="password" bsSize="large">
//             <ControlLabel>Password</ControlLabel>
//             <FormControl
//               value={this.state.login.password}
//               onChange={this.handleChange}
//               type="password"
//             />
//           </FormGroup>
//           <Button
//             block
//             bsSize="large"
//             disabled={!this.validateForm()}
//             type="submit"
//             onClick={this.post}
//           >
//             Login
//           </Button>
//         </form>
//       </div>
//     );
//   }

// }
// import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import "./login.scss";
// import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login:"",
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
  	axios.post('http://localhost:3001/adduser', this.state);
  	this.setState({      
  	   login:"",
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="login" bsSize="large">
            <ControlLabel>Login</ControlLabel>
            <FormControl
              autoFocus
              type="login"
              value={this.state.login}
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
      </div>
    );
  }
}