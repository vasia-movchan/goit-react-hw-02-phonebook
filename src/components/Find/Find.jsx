import { FindLabel, FindInput } from './Find.styled';
import PropTypes from 'prop-types';

const Find = ({ inputValue, onFindInput }) => {
  return (
    <FindLabel>
      Find contacts by name
      <FindInput
        type="text"
        value={inputValue}
        onChange={onFindInput}
      ></FindInput>
    </FindLabel>
  );
};

Find.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onFindInput: PropTypes.func.isRequired,
};

export default Find;
