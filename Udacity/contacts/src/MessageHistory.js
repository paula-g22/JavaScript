import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MessageHistory extends Component {

    render () {
        const { messages, user} = this.props;
        return (
           <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === user.username ? 'message-sender' : 'message-recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul> 
        )
    }
}

export default MessageHistory;