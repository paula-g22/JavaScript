import React, { Component } from 'react';

class CreateUserForm extends Component {
  render(){
    return (
      <form>
        <input 
          type='text'
          placeholder='First Name' 
          />
      <button disabled={this.fieldIsEmpty} onClick={this.addUser}>Add</button>
      </form>
    )
  }
}

function DisplayUser (props){
  return(
    <h2>Users</h2>
    <ul className='user-list'>
      {props.users.map((username) => (
        <li key={userID}>{username}</li>
      )
      }
      </ul>
  )
}