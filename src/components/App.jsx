import { Component } from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addContact}></Form>
        <Contacts contacts={this.state.contacts}></Contacts>
      </>
    );
  }
}

export default App;
