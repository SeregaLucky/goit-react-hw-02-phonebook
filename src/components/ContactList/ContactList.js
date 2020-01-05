/* import - node_modules */
import React from 'react';
import T from 'prop-types';
import ContactListItem from './ContactListItem';

/*
 * COMONENT
 */
const ContactList = ({ list, deleteContant }) => (
  <ul>
    {list.map(contact => (
      <ContactListItem
        key={contact.id}
        contact={contact}
        deleteContant={deleteContant}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  list: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string,
      contact: T.string,
    }),
  ).isRequired,

  deleteContant: T.func.isRequired,
};

export default ContactList;
