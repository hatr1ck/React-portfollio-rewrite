import React, { Component } from 'react';
//import {connect} from 'react-redux';
import axios from 'axios';
import './todo.css';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state.load();
  }
    state = {
        list:[],
        item:"",
        delID: "",
        load:()=>{
          axios.get('http://localhost:3001/add')
            .then( (response)=> {
              // console.log(response);
              this.setState({
                  list:response.data
              });
            })
      }
    }



posting = ()=>{
  console.log("SS");
  axios.post('http://localhost:3001/add', {nickname:this.state.item})
    .then( (response)=> {
      console.log(response);
      this.state.load();
      this.setState({
        item:""
      })
    })
}

delete = (val)=>{
  axios.delete('http://localhost:3001/delete/'+val)
    .then( (response)=> {
      console.log(response);
      this.state.load();
    }).catch((err)=> console.log(err));
    
}
inputed = (str) =>{
  console.log(str);
  this.setState({
    item:str.target.value
  });
}
  render() {
    return (
 
      <div className="Ap">
<input className="input" onChange={this.inputed.bind(this)} />
<button className="post" onClick={this.posting.bind(this)}>POST</button>
<ul>{this.state.list.map(val=>{
   return (<li value="SEXXXX"  key={val._id} className="li">{val.nickname}<button className="btn btn-danger" onClick={this.delete.bind(this, val._id)}>del</button></li>)
})}</ul>
      </div>
   
    );
  }
}


export default Todo;
