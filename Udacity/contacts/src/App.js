import React, { Component } from 'react'
import './App.css';
import ListContacts from './ListContacts'

const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "@karen_isgrigg",
    "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "@richardkalehoff",
    "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "@tylermcginnis",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ];

// class ContactList extends React.Component {
//   render() {
//     const people = this.props.contacts 

//     return <ol>
//       {people.map((person) => (
//         <li key={person.name}>{person.name}</li>
//       ))}
//     </ol>
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContacts contacts={contacts} okay='pepe'/>
      </div>
    );
  }
}

export default App;
