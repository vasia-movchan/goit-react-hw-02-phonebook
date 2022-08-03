import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsList } from './Contacts.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name}: {contact.number}
          <Button handleClickDelete={() => onDelete(contact.id)}>Delete</Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
