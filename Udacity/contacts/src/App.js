import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
// import ListContacts from './ListContacts'

class App extends Component {
  state = {
    value1: this.ranNum(),
    value2: this.ranNum(),
    value3: this.ranNum(),
    numQuestions: 0,
    numCorrect: 0
  }
  ranNum() {
    return Math.floor(Math.random() * 100)
  }
  
  proposedAnswer = Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
    
  forOnClick = (answer, bool) => {
    if ((answer === this.proposedAnswer && bool === 'true') || 
    (answer !== this.proposedAnswer && bool === 'false')){
      this.setState(() => ({
        numCorrect: this.state.numCorrect + 1,
        numQuestions: this.state.numQuestions + 1
      })) 
    }
    else {
      this.setState(() => ({
        numQuestions: this.state.numQuestions + 1
      }))
    }
  }


  render() {
    const { value1, value2, value3, numQuestions, numCorrect } = this.state;
    const ans = value1 + value2 + value3;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${this.proposedAnswer}`}</p>
          </div>
          <button 
            onClick={() => this.forOnClick(ans, 'true')} name='true'>
            True
          </button>
          <button
            onClick={() => this.forOnClick(ans, 'false')} name='false'>
            False
            </button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;


// const contacts = [
//   {
//     "id": "karen",
//     "name": "Karen Isgrigg",
//     "handle": "@karen_isgrigg",
//     "avatarURL": "http://localhost:5001/karen.jpg"
//   },
//   {
//     "id": "richard",
//     "name": "Richard Kalehoff",
//     "handle": "@richardkalehoff",
//     "avatarURL": "http://localhost:5001/richard.jpg"
//   },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "handle": "@tylermcginnis",
//     "avatarURL": "http://localhost:5001/tyler.jpg"
//   }
//  ];

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

// class App extends Component {
//   state = {
//     contacts: [
//       {
//         "id": "karen",
//         "name": "Karen Isgrigg",
//         "handle": "@karen_isgrigg",
//         "avatarURL": "http://localhost:5001/karen.jpg"
//       },
//       {
//         "id": "richard",
//         "name": "Richard Kalehoff",
//         "handle": "@richardkalehoff",
//         "avatarURL": "http://localhost:5001/richard.jpg"
//       },
//       {
//         "id": "tyler",
//         "name": "Tyler McGinnis",
//         "handle": "@tylermcginnis",
//         "avatarURL": "http://localhost:5001/tyler.jpg"
//       }
//      ]
//     }
//     removeContact = (contact) => {
//       this.setState((currentState) => ({
//         contacts: currentState.contacts.filter((c) => c.id !== contact.id)
//       }))
//     }
  
//   render() {
//     return (
//       <div className="App">
//         <ListContacts 
//           contacts={this.state.contacts}
//           onDeleteContact={this.removeContact}/>
//       </div>
//     );
//   }
// }

// export default App;

// const value1 = Math.floor(Math.random() * 100);
// const value2 = Math.floor(Math.random() * 100);
// const value3 = Math.floor(Math.random() * 100);
// const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
// const numQuestions = 0;
// const numCorrect = 0;

 // forTrue = (answer) => {
  //   // let ans = this.state.value1 + this.state.value2 + this.state.value3; if the real answer matches the proposed answer,
  //   //it will add a numCorrect and a numQuestions, else it will just add the question counter
  //   if (answer === this.proposedAnswer) {
  //     this.setState(() => ({
  //       numCorrect: this.state.numCorrect + 1,
  //       numQuestions: this.state.numQuestions + 1
  //     }))
  //   }
  //   else {
  //     this.setState((prevState) => ({
  //       numQuestions: prevState.numQuestions + 1
  //     }))
  //   }
  // }

  // forFalse = (answer) => { //same thing as above -- need to find a way to reset the values after each click
  //   if (answer !== this.proposedAnswer){
  //     this.setState((prevState) => ({
  //       numCorrect: prevState.numCorrect + 1,
  //       numQuestions: prevState.numQuestions + 1
  //     }))
  //   }
  //   else {
  //     this.setState((prevState) => ({
  //       numQuestions: prevState.numQuestions + 1
  //     }))
  //   }
  // }

