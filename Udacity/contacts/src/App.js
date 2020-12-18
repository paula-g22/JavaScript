import React, { Component } from 'react'
import './App.css';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }
      
  removeContact = (contact) => {
    this.setState((currentState) => ({
        contacts: currentState.contacts.filter((c) => c.id !== contact.id)
      }))
  }
    
  render() {
    return (
      <div className="App">
        <ListContacts 
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}/>
      </div>
    );
  }
}
  
export default App;

// // class App extends Component {
// //   state = {
// //     ...this.generateState(),
// //     numQuestions: 0,
// //     numCorrect: 0
// //   }
// //   ranNum(max) {
// //     return Math.floor(Math.random() * max)
// //   }

// //   generateState() {
// //     let value1 = this.ranNum(100);
// //     let value2 = this.ranNum(100);
// //     let value3 = this.ranNum(100);
// //     let proposedAns = this.ranNum(3) + value1 + value2 + value3;
// //     return {
// //       value1: value1,
// //       value2: value2,
// //       value3: value3,
// //       proposedAnswer: proposedAns,
// //     }
// //   }
  
//   // proposedAnswer = Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
    
//   // forOnClick = (answer, bool) => {
//   //   if ((answer === this.proposedAnswer && bool === 'true') || 
//   //   (answer !== this.proposedAnswer && bool === 'false')){
//   //     this.setState(() => ({
//   //       numCorrect: this.state.numCorrect + 1,
//   //       numQuestions: this.state.numQuestions + 1
//   //     })) 
//   //   }
//   //   else {
//   //     this.setState(() => ({
//   //       numQuestions: this.state.numQuestions + 1
//   //     }))
//   //   }
//   // }

//   // forOnClick = (bool) => {
//   //   const answer = this.state.value1 + this.state.value2 + this.state.value3
//   //   const newState = this.generateState();

//   //   this.setState(() => {
//   //     if ((answer === this.state.proposedAnswer && bool === 'true') || 
//   //     (answer !== this.state.proposedAnswer && bool === 'false')) {
//   //       return {numCorrect: this.state.numCorrect + 1}
//   //     } 
//   //     }) 
//   //   this.setState(() => ({...newState, numQuestions: this.state.numQuestions + 1}));

//   //old way^above is much more concise
//     // this.setState(() => {
//     //   const { value1, value2, value3, proposedAnswer } = this.generateState();
//     //   return {
//     //     numQuestions: this.state.numQuestions + 1,
//     //     value1: value1,
//     //     value2: value2,
//     //     value3: value3,
//     //     proposedAnswer: proposedAnswer
//     //   } 
//     // }) 
// //   }


// //   render() {
// //     const { value1, value2, value3, proposedAnswer, numQuestions, numCorrect } = this.state;
// //     return (
// //       <div className="App">
// //         <header className="App-header">
// //           <img src={logo} className="App-logo" alt="logo" />
// //           <h1 className="App-title">ReactND - Coding Practice</h1>
// //         </header>
// //         <div className="game">
// //           <h2>Mental Math</h2>
// //           <div className="equation">
// //             <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
// //           </div>
// //           <button 
// //             onClick={() => this.forOnClick('true')} name='true'>
// //             True
// //           </button>
// //           <button
// //             onClick={() => this.forOnClick('false')} name='false'>
// //             False
// //             </button>
// //           <p className="text">
// //             Your Score: {numCorrect}/{numQuestions}
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default App;


// // 

// // const value1 = Math.floor(Math.random() * 100);
// // const value2 = Math.floor(Math.random() * 100);
// // const value3 = Math.floor(Math.random() * 100);
// // const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
// // const numQuestions = 0;
// // const numCorrect = 0;

//  // forTrue = (answer) => {
//   //   // let ans = this.state.value1 + this.state.value2 + this.state.value3; if the real answer matches the proposed answer,
//   //   //it will add a numCorrect and a numQuestions, else it will just add the question counter
//   //   if (answer === this.proposedAnswer) {
//   //     this.setState(() => ({
//   //       numCorrect: this.state.numCorrect + 1,
//   //       numQuestions: this.state.numQuestions + 1
//   //     }))
//   //   }
//   //   else {
//   //     this.setState((prevState) => ({
//   //       numQuestions: prevState.numQuestions + 1
//   //     }))
//   //   }
//   // }

//   // forFalse = (answer) => { //same thing as above -- need to find a way to reset the values after each click
//   //   if (answer !== this.proposedAnswer){
//   //     this.setState((prevState) => ({
//   //       numCorrect: prevState.numCorrect + 1,
//   //       numQuestions: prevState.numQuestions + 1
//   //     }))
//   //   }
//   //   else {
//   //     this.setState((prevState) => ({
//   //       numQuestions: prevState.numQuestions + 1
//   //     }))
//   //   }
//   // }

