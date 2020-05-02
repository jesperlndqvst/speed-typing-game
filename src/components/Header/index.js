import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderStyled = styled.h1`
  color: var(--color-primary);
  padding: 20px 0;
  text-transform: uppercase;
  text-decoration: underline;
`;

const Header = (props) => {
  return <HeaderStyled>{props.text}</HeaderStyled>;
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
