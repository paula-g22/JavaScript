import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        text: ''
    }

    showText = (text) => {
        this.setState(() => ({
            text: text
        }))
    }


    render() {
        return (
        <div className="App">
            <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
            <div className="container">
            <input 
            type="text" 
            placeholder="Say Something" 
            value = {this.state.text}
            onInput = {(event) => this.showText(event.target.value)}
            />
            <p className="echo">Echo:</p>
            <p>{this.state.text}</p>
            </div>
        </div>
        );
    }
}

export default App;

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// // function ListContacts (props) {
// //     return (
// //         <>
// //         <h3>This is my list</h3>
// //         <ol className='contact-list'>
// //             {props.contacts.map((contact) => (
// //                 <li key={contact.id} className='contact-list-item'>
// //                     <div 
// //                         className='contact-avatar'
// //                         style={{
// //                             backgroundImage: `url(${contact.avatarURL})`
// //                         }}
// //                     ></div>
// //                     <div className='contact-details'>
// //                         <p>{contact.name}</p>
// //                         <p>{contact.handle}</p>
// //                     </div>
// //                     <button 
// //                         className='contact-remove'
// //                         onClick={() => props.onDeleteContact(contact)}
// //                         >
// //                         Remove
// //                     </button>
// //                 </li>
// //             ))}
// //         </ol>
// //         </>
// //     )
// // }

// // ListContacts.propTypes = {
// //     contacts: PropTypes.array.isRequired,
// //     onDeleteContact: PropTypes.func.isRequired
// // }

// class ListContacts extends Component {
//     static propTypes = {
//         contacts: PropTypes.array.isRequired,
//         onDeleteContact: PropTypes.func.isRequired
//     }
//     state = {
//         query: ''
//     }
//     updateQuery = (query) => {
//         this.setState(()=> ({
//             query: query.trim()
//         }))
//     }
//     clearQuery = () => {
//         this.updateQuery('')
//     }
//     render() {
//         const {query} = this.state
//         const {contacts, onDeleteContact} = this.props
//         const showingContacts = query === '' 
//         ? contacts
//         : contacts.filter((c) => (
//             c.name.toLowerCase().includes(query.toLowerCase())
//         ))
        
//         return (
//             <div className='list-contacts'>
//                 <div className='list-contacts-top'>
//                     <input 
//                         className='search-contacts'
//                         type='text'
//                         placeholder='Search Contacts'
//                         value={query}
//                         onChange={(event) => this.updateQuery(event.target.value)}
//                     />
//                 </div>
//                 {showingContacts.length !== contacts.length && (
//                     <div className='showing-contacts'>
//                         <span>Now showing {showingContacts.length} of {contacts.length}</span>
//                         <button onClick={this.clearQuery}>Show All</button>
//                         </div>
//                 )}
//             <ol className='contact-list'>
//                 {showingContacts.map((contact) => (
//                     <li key={contact.id} className='contact-list-item'>
//                         <div 
//                             className='contact-avatar'
//                             style={{
//                                 backgroundImage: `url(${contact.avatarURL})`
//                             }}
//                         ></div>
//                         <div className='contact-details'>
//                             <p>{contact.name}</p>
//                             <p>{contact.handle}</p>
//                         </div>
//                         <button className='contact-remove'
//                             onClick={() => onDeleteContact(contact)}
//                             >
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ol>
//             </div>
//         )
//     }
// }

// export default ListContacts