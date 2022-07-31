import styled from 'styled-components';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <ContactsList>
        {contacts.map(contact => (
          <ContactsItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteBtn onClick={() => onDelete(contact.id)}>Delete</DeleteBtn>
          </ContactsItem>
        ))}
      </ContactsList>
    </>
  );
};

const ContactsList = styled.ul`
  width: 400px;
  list-style: none;
  padding: 0 0 0 8px;
  margin: 0;
`;

const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 4px;
`;

const DeleteBtn = styled.button`
  cursor: pointer;
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
