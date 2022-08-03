import { Component } from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Find from 'components/Find/Find';
import styled from 'styled-components';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const contactsInPhonebook = this.state.contacts;
    const repeatedContact = contactsInPhonebook.find(
      elem => elem.name === contact.name
    );
    if (repeatedContact) {
      alert(`${repeatedContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  handleFindInput = event => {
    this.setState({ filter: event.currentTarget.value.toLowerCase() });
  };

  contactsList = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact}></Form>
        <h2>Contacts</h2>
        <Find inputValue={filter} onFindInput={this.handleFindInput} />
        <Contacts
          contacts={this.contactsList(this.state.contacts)}
          onDelete={this.deleteContact}
        ></Contacts>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 8px;
  width: 400px;
  margin: 0 auto;
  background-color: #c2e0fa;
  border-radius: 4px;
  box-shadow: 2px 3px 13px 0px rgba(0, 0, 0, 0.73); ;
`;

export default App;
