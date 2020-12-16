import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];


class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  
  state = {
    messages: [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
]
  };

  onMessage = (username, message) => {
    let newMessage = {
      ['username']: username,
      ['text']: message
    };
    this.setState(currentState => ({messages: currentState.messages.concat([newMessage])}))
  };

  render() {
    const {messages} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <ChatWindow
            key={user.username}
            user={user}
            messages={messages}
            onMessage={this.onMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends React.Component {
//   state = {
//     value: '',
//     items: [],
//   };

//   handleChange = event => {
//     this.setState({ value: event.target.value });
//   };

//   addItem = event => {
//     event.preventDefault();
//     this.setState(oldState => ({
//       items: [...oldState.items, this.state.value],
//     }));
//   };

//   deleteLastItem = event => {
//     this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
//   };

//   inputIsEmpty = () => {
//     return this.state.value === '';
//   };

//   noItemsFound = () => {
//     return this.state.items.length === 0;
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">ReactND - Coding Practice</h1>
//         </header>
//         <h2>Shopping List</h2>
//         <form onSubmit={this.addItem}>
//           <input
//             type="text"
//             placeholder="Enter New Item"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//           <button disabled={this.inputIsEmpty()}>Add</button>
//         </form>

//         <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
//           Delete Last Item
//         </button>

//         <p className="items">Items</p>
//         <ol className="item-list">
//           {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
//         </ol>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
// import ListContacts from './ListContacts'

// // const contacts = [
// //     {
// //       "id": "karen",
// //       "name": "Karen Isgrigg",
// //       "handle": "@karen_isgrigg",
// //       "avatarURL": "http://localhost:5001/karen.jpg"
// //     },
// //     {
// //       "id": "richard",
// //       "name": "Richard Kalehoff",
// //       "handle": "@richardkalehoff",
// //       "avatarURL": "http://localhost:5001/richard.jpg"
// //     },
// //     {
// //       "id": "tyler",
// //       "name": "Tyler McGinnis",
// //       "handle": "@tylermcginnis",
// //       "avatarURL": "http://localhost:5001/tyler.jpg"
// //     }
// //    ];
  
//   // class ContactList extends React.Component {
//   //   render() {
//   //     const people = this.props.contacts 
  
//   //     return <ol>
//   //       {people.map((person) => (
//   //         <li key={person.name}>{person.name}</li>
//   //       ))}
//   //     </ol>
//   //   }
//   // }
  
//   class App extends Component {
//     state = {
//       contacts: [
//         {
//           "id": "karen",
//           "name": "Karen Isgrigg",
//           "handle": "@karen_isgrigg",
//           "avatarURL": "http://localhost:5001/karen.jpg"
//         },
//         {
//           "id": "richard",
//           "name": "Richard Kalehoff",
//           "handle": "@richardkalehoff",
//           "avatarURL": "http://localhost:5001/richard.jpg"
//         },
//         {
//           "id": "tyler",
//           "name": "Tyler McGinnis",
//           "handle": "@tylermcginnis",
//           "avatarURL": "http://localhost:5001/tyler.jpg"
//         }
//        ]
//       }
//       removeContact = (contact) => {
//         this.setState((currentState) => ({
//           contacts: currentState.contacts.filter((c) => c.id !== contact.id)
//         }))
//       }
    
//     render() {
//       return (
//         <div className="App">
//           <ListContacts 
//             contacts={this.state.contacts}
//             onDeleteContact={this.removeContact}/>
//         </div>
//       );
//     }
//   }
  
//   export default App;

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

