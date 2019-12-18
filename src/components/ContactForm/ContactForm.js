/* import - node_modules */
import React, { Component } from 'react';

/*
 * COMONENT
 */
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addContact } = this.props;

    addContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          type="number"
          value={number}
          onChange={this.handleChange}
          name="number"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ContactForm;
