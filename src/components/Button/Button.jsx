import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
