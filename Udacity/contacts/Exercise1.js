import React, { Component } from 'react';

class CreateUserForm extends Component {
  render(){
    return (
      <form>
        <input 
          type='text'
          placeholder='Enter First Name' 
          />
          <input
            type='text'
            placeholder='Enter Last Name'
            />
          <input 
            type='text'
            placeholder='Enter a username'
            />
      <button disabled={this.fieldIsEmpty} onClick={this.addUser}>Add</button>
      </form>
    )
  }
}

function UserList (props){
  return(
    <h2>Users</h2>
    <ul className='user-list'>
      {props.users.map((username) => 
        <li key={userID}>{username}</li>
      </ul>
  ))}
}

function DisplayGames (props){
  return(

  )
}