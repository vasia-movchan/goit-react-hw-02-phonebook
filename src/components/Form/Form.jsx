import { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class Form extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.props.addContact(contact);
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></FormInput>
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></FormInput>
        </FormLabel>

        <FormButton type="submit">Add contact</FormButton>
      </form>
    );
  }
}

const FormLabel = styled.label`
  font-size: 20px;
`;

const FormInput = styled.input`
  display: block;
  font-size: 18px;
  margin-bottom: 12px;
`;

const FormButton = styled.button`
  display: block;
  cursor: pointer;
`;

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default Form;
