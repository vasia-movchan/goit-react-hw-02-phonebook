import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <ContactsList>
        {contacts.map(contact => (
          <ContactsItem key={contact.id}>
            {contact.name}: {contact.number}
            <Button onClick={() => onDelete(contact.id)}>Delete</Button>
          </ContactsItem>
        ))}
      </ContactsList>
    </>
  );
};

const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 4px;
`;

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
