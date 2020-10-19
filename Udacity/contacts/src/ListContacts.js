import React from 'react'

function ListContacts (props) {
    return (
        <>
        <h3>This is my list</h3>
        <ol className='contact-list'>
            {props.contacts.map((contact) => (
                <li key={contact.id} className='contact-list-item'>
                    <div 
                        className='contact-avatar'
                        style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}
                    ></div>
                    <div className='contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                    </div>
                    <button 
                        className='contact-remove'
                        onClick={() => props.onDeleteContact(contact)}
                        >
                        Remove
                    </button>
                </li>
            ))}
        </ol>
        </>
    )
}


// class ListContacts extends Component {
//     render() {
//         return (
//             <>
//                 <h3>This is my list</h3>
//             <ol className='contact-list'>
//                 {this.props.contacts.map((contact) => (
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
//                         <button className='contact-remove'>
//                             {this.props.okay}
//                         </button>
//                     </li>
//                 ))}
//             </ol>
//             </>
//         )
//     }
// }

export default ListContacts