import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import home from'../Home.svg';
import Chat from './chat.js';
import Chats from './chat1.js';

class Sockets extends Component {

  render() {
    return (
      <div>
      <Link to='/'><img alt='404' src={home} height='100rem' className='imge'/></Link>
      <div style={{textAlign: 'center'}}>
      <Chat />
      <Chats />
      </div>
      </div>
    );
  }
}

export default Sockets;
