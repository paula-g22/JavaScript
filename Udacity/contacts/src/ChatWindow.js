import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddMessage from './AddMessage';
import MessageHistory from './MessageHistory';


class ChatWindow extends Component {

    onMessage = message => {
        this.props.onMessage(this.props.user.username, message);
    }

    render () {
        const { user, messages } = this.props
        
        return (
            <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
            <MessageHistory 
                messages={messages}
                user={user}
            />
            <AddMessage onMessage={this.onMessage}/>
            </div>
        );
    }
}

export default ChatWindow;