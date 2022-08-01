import { Component } from 'react';
import { FindLabel, FindInput } from './Find.styled';
import PropTypes from 'prop-types';

class Find extends Component {
  static propTypes = {
    onFindInput: PropTypes.func.isRequired,
  };

  handleChange = event => {
    let inputValue = event.currentTarget.value.toLowerCase();
    this.props.onFindInput(inputValue);
  };

  render() {
    return (
      <FindLabel>
        Find contacts by name
        <FindInput type="text" onChange={this.handleChange}></FindInput>
      </FindLabel>
    );
  }
}

export default Find;
