import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Find extends Component {
  handleChange = event => {
    let inputValue = event.currentTarget.value.toLowerCase();
    this.props.handleFindInput(inputValue);
  };

  render() {
    return (
      <>
        <FindLabel>
          Find contacts by name
          <FindInput type="text" onChange={this.handleChange}></FindInput>
        </FindLabel>
      </>
    );
  }
}

const FindLabel = styled.label`
  font-size: 16px;
`;

const FindInput = styled.input`
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
`;

Find.propTypes = {
  handleFindInput: PropTypes.func.isRequired,
};

export default Find;
