import React, { Component } from 'react';
import axios from 'axios';
import './todo.css';
import trash from'./trash.svg';
import {Link} from 'react-router-dom';
import home from'../Home.svg';

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
          axios.get('http://localhost:3300/list/add')
            .then( (response)=> {
              this.setState({
                  list:response.data
              });
            })}}
posting = (e)=>{
  e.preventDefault();
  if(this.state.item !== ""){
    axios.post('http://localhost:3300/list/adduser', {nickname:this.state.item})
    .then( (response)=> {
      console.log(response);
      this.state.load();
      this.setState({
        item:""
      })
    })
  }
}

delete = (val)=>{
  axios.delete('http://localhost:3300/list/delete/'+val)
    .then( (response)=> {
      this.state.load();
    }).catch((err)=> console.log(err));
    
}
inputed = (str) =>{
  this.setState({
    item:str.target.value
  });
}
  render() {
    return (
      <div>
      <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
      <form  onSubmit={this.posting} className="Ap border border-primary" >
<button className="btn btn-info" onClick={this.posting.bind(this)}>Add item</button>
<input className="input" value={this.state.item} onChange={this.inputed.bind(this)} />
<ul className='ul'>{this.state.list.map(val=>{
   return (<li value="SEXXXX"  key={val._id} className="li border border-info">{val.nickname}<img alt='404' height='50rem' src={trash} className="btn" onClick={this.delete.bind(this, val._id)} /></li>)
})}</ul>
      </form>
   </div>
    );
  }
}


export default Todo;
