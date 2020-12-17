import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddMessage extends Component {
    state = {
        message: ''
    }

    handleChange = event => {
        this.setState({ message: event.target.value, });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onMessage(this.state.message);
        this.setState({ message: ''})
    }

    isDisabled = () => {
        return this.state.message === '';
    }


    render () {
        const {message} = this.state;
        return (
            <div>
              <form className="input-group" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your message..." 
                    value={message}
                    onChange={this.handleChange}
                    />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

export default AddMessage;