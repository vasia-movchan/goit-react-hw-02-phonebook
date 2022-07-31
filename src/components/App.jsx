import { Component } from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Find from 'components/Find/Find';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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

  handleFindInput = inputValue => {
    this.setState({ filter: inputValue });
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
    return (
      <>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact}></Form>
        <h2>Contacts</h2>
        <Find handleFindInput={this.handleFindInput} />
        <Contacts
          contacts={this.contactsList(this.state.contacts)}
          onDelete={this.deleteContact}
        ></Contacts>
      </>
    );
  }
}

export default App;
