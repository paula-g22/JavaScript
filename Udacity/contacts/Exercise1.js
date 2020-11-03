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

  render(){
    return (
      <form>
        <input 
          type='text'
          placeholder='Enter First Name' 
          name='firstName'
          value={firstName}
          />
          <input
            type='text'
            placeholder='Enter Last Name'
            />
          <input 
            type='text'
            placeholder='Enter a username'
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