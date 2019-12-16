/* import - node_modules */
import React from 'react';

/*
 * COMONENT
 */
const ContactForm = ({ name, number, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={name} onChange={onChange} name="name" />
    <input type="number" value={number} onChange={onChange} name="number" />
    <button type="submit">Add</button>
  </form>
);

export default ContactForm;
