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
        <ContactsTitle>Contacts</ContactsTitle>
        <FindLabel>
          Find contacts by name
          <FindInput type="text" onChange={this.handleChange}></FindInput>
        </FindLabel>
      </>
    );
  }
}

const ContactsTitle = styled.p`
  font-size: 28px;
  margin-bottom: 8px;
`;

const FindLabel = styled.label`
  font-size: 20px;
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
