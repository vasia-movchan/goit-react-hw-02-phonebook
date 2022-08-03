import PropTypes from 'prop-types';
import { ContactsItemStyled } from './ContactsItem.styled';

export const ContactsItem = ({ children }) => {
  return <ContactsItemStyled>{children}</ContactsItemStyled>;
};

ContactsItem.propTypes = {
  children: PropTypes.node.isRequired,
};
