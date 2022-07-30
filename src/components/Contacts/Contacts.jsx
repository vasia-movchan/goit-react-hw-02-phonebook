import styled from 'styled-components';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => {
  return (
    <>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactsList>
        {contacts.map(contact => (
          <ContactsItem key={contact.id}>
            {contact.name}: {contact.number}
          </ContactsItem>
        ))}
      </ContactsList>
    </>
  );
};

const ContactsTitle = styled.p`
  font-size: 28px;
  margin-bottom: 8px;
`;

const ContactsList = styled.ul`
  width: 400px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactsItem = styled.li`
  font-size: 18px;
  padding-left: 12px;
`;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
};

export default Contacts;
