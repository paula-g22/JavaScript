import React, { Component } from 'react';

class CreateUserForm extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: ''
    },
    userExists: false
  }

  fieldIsEmpty = () => {
    return this.state.user.firstName === '' || this.state.user.lastName === '' || this.state.user.username === ''
  }

  contactExists = currUsername => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    return false;
  };

  handleChange = () => {
    if (contactExists === 'true') 
      return <p className = 'error'>The username already exists. Please select a new username.</p>
    else 
      this.setState((currentState) => ({
        user: {
          firstName: 
        }
      }))
  }

  render(){
    const {user: {firstName, lastName, username}} = this.state
    return (
      <form>
        <input 
          type='text'
          placeholder='Enter First Name' 
          name='firstName'
          value={firstName}
          onChange={}
          />
          <input
            type='text'
            placeholder='Enter Last Name'
            value={lastName}
            onChange={}
            />
          <input 
            type='text'
            placeholder='Enter a username'
            value={username}
            onChange={}
            />
      <button disabled={this.fieldIsEmpty()} onClick={this.handleChange}>Add</button>
      </form>
    )
  }
}

function UserList (props){
  return(
    <>
    <h2>Users</h2>
    <ul className='user-list'>
      {props.users.map((username) => 
      <li key={userID}>{username}</li>
      )}
      </ul>
  </>
  )
}

function DisplayGames (props){
  return(
    <div>
      <p>This user has played {users.gamesplayed} games.</p>
    </div>
  )
}