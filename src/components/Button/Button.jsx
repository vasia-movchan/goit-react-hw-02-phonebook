import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ handleClickDelete, children }) => {
  return <ButtonStyled onClick={handleClickDelete}>{children}</ButtonStyled>;
};

Button.propTypes = {
  handleClickDelete: PropTypes.func,
  children: PropTypes.string.isRequired,
};
