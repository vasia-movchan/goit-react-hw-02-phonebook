import styled from 'styled-components';
import PropTypes from 'prop-types';
import Find from 'components/Find/Find';

const Contacts = ({ contacts }) => {
  return (
    <>
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
