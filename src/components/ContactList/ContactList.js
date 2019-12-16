/* import - node_modules */
import React from 'react';

/*
 * COMONENT
 */
const ContactList = ({ list, deleteContant }) => (
  <ul>
    {list.map(contact => (
      <li key={contact.id}>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
        <button type="button" onClick={() => deleteContant(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
