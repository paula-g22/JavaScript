import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddMessage extends Component {
    state = {
        message: ''
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };


    render () {
        return (

        )
    }
}

export default AddMessage;