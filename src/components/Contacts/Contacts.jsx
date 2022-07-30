import styled from 'styled-components';

const Contacts = ({ contacts }) => {
  return (
    <>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactsList>
        {contacts.map(contact => (
          <ContactsItem key={contact.id}>{contact.name}</ContactsItem>
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
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactsItem = styled.li`
  font-size: 18px;
  padding-left: 12px;
`;

export default Contacts;
