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
    name: '',
    number: '',
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleFindInput = inputValue => {
    this.setState({ filter: inputValue });
  };

  contactsList = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addContact}></Form>
        <Find handleFindInput={this.handleFindInput} />
        <Contacts contacts={this.contactsList(this.state.contacts)}></Contacts>
      </>
    );
  }
}

export default App;
