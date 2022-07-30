import { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

class Form extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const contact = {
      name,
      id: nanoid(),
    };
    this.props.onSubmit(contact);
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormTitle>Phonebook</FormTitle>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></FormInput>
        <FormButton type="submit">Add contact</FormButton>
      </form>
    );
  }
}

const FormTitle = styled.p`
  font-size: 32px;
`;

const FormInput = styled.input`
  font-size: 18px;
  margin-bottom: 12px;
`;

const FormButton = styled.button`
  display: block;
  cursor: pointer;
`;

export default Form;
