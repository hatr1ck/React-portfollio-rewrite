import React, { Component } from 'react';
import './socket.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3300');

class Chat extends Component {
  state={
  partner:'',
  messages:[],
  message: '',
  name:''
}
componentWillUnmount(){
  socket.emit('end');
  console.log('triggered')
  socket.disconnect();
}
componentDidMount(){
    socket.on('connection', (data)=>{
      });
    socket.on('chat', (data)=>{
      this.setState({
        messages: [...this.state.messages, data],
        partner:''
      })
      });
    socket.on('typing', (data)=>{
      if(data.message === ""){
        this.setState({
          partner: ""
        })
      }
      else{
      this.setState({
        partner: data.name
      })
    }
      });
}

send=(e)=>{
  e.preventDefault();
    socket.emit('chat', {
      name: this.state.name,
      message: this.state.message
  });
    this.setState({
      message:''
    })
}

typingMsg=(e)=>{
  this.setState({
    message: e.target.value
  })
socket.emit('typing', {name:this.state.name, message: e.target.value});
}

typingName=(e)=>{
  this.setState({
    name: e.target.value
  })
  }
  render() {
    return (
    <form className='chat' onSubmit={this.send}>
      <div className='chat-window'>
        <div className='output'>
<ul>
{this.state.messages.map(msg=>{
  return <li className='msges' key={Math.random()*12}><strong>{msg.name + ': '}</strong>{msg.message}</li>
})}
</ul>
        </div>
        <div className='feedback'>
        {this.state.partner ? <div>{this.state.partner + ' is typing...'}</div> : null}
        </div>
      </div>
<input type="text" className='name' value={this.state.name} onChange={this.typingName} placeholder="Name" />
<input type="text" className='message' value={this.state.message} onChange={this.typingMsg} placeholder="Message" />
<button className='send' onClick={this.send}>Send</button>
    </form>
    );
  }
}

export default Chat;
